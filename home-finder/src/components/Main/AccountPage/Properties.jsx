import { StateContext } from "@/contexts/StateProvider";
import React, { useContext, useState, useEffect } from "react";
import HouseCard from "../Home/HouseCard";
import { FaPlus } from "react-icons/fa";
import { MdOutlineAddHome } from "react-icons/md";
import ModalBox from "@/components/shared/ModalBox";
import { AuthContext } from "@/contexts/AuthProvider";
import { toast } from "react-hot-toast";
import RentedByCard from "./RentedByCard";

const Properties = () => {
  const { user } = useContext(AuthContext);
  const { allHouse, userInfo } = useContext(StateContext);

  const [heroImages, setHeroImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const [showHouse, setShowHouse] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState({});
  const [showRentInfo, setShowRentInfo] = useState(false);

  const { setIsCreateModalOpen, isCreateModalOpen } = useContext(StateContext);

  const [myProperties, setMyProperties] = useState([]);

  useEffect(() => {
    if (userInfo?.id !== undefined) {
      // Check if userInfo?.id is not undefined
      console.log("called", userInfo?.id, myProperties);
      fetch(
        `${import.meta.env.VITE_SERVER_URL}/properties/getPropertiesById?id=${
          userInfo?.id
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setMyProperties(data))
        .catch((err) => console.log(err));
    }
  }, [userInfo]);

  console.log("myProperties", myProperties);

  const handleAddProperty = async (e) => {
    e.preventDefault();

    const form = e.target;
    const description = form.description.value;
    const location = form.location.value;
    const price = form.price.value;
    const area = form.area.value;
    const bed = form.bed.value;
    const bathroom = form.bathroom.value;
    const floorPlanImage = "";

    const newHouse = {
      Name: userInfo?.name,
      Description: description,
      RentFee: parseInt(price),
      Features: "",
      Images: JSON.stringify(heroImages),
      Location: location,
      PostedBy: userInfo?.id,
      FloorPlanImage: floorPlanImage,
      PropertyInfo: {
        Area: parseInt(area),
        Bed: parseInt(bed),
        Bathroom: parseInt(bathroom),
      },
      Status: "Available",
      Timestamp: Date.now(),
    };

    console.log("newHouse", newHouse);

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/properties/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHouse),
      }
    );
    const data = await response.json();

    if (data) {
      toast.success("Property created successfully");
      console.log("Property created successfully");
      setIsCreateModalOpen(false);
      return data?.notifications;
    } else {
      console.log("Failed to create property");
    }
  };

  const handleFilesSelect = (event) => {
    setSelectedImages([]);
    const totalImages = event.target.files.length;

    if (totalImages > 5) {
      toast.error("You can upload a maximum of 5 images!");
      return;
    }

    let files = Array.from(event.target.files); // Convert files into an array

    const previewImageArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const previewImage = URL.createObjectURL(file);
      previewImageArray.push(previewImage);
      setSelectedImages((prevSelectedImages) => [...prevSelectedImages, file]);
    }
  };

  console.log("selectedImages", selectedImages);

  useEffect(() => {
    const uploadImagesSequentially = async () => {
      const imageHostKey = "e9ee41ec2bd1b26ca469c791ef1a12c2";

      for (let i = 0; i < selectedImages.length; i++) {
        const formData = new FormData();
        formData.append("image", selectedImages[i]);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        try {
          const response = await fetch(url, {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            const imgUpload = await response.json();
            if (imgUpload.success) {
              const imageUrl = imgUpload.data.url;
              setHeroImages((prevHeroImages) => [...prevHeroImages, imageUrl]);
            }
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    // Call this function when you want to start the sequential upload
    uploadImagesSequentially();
  }, [selectedImages]);

  console.log("heroImages", heroImages);

  console.log("myProperties", myProperties);

  return (
    <div className="container-sm mx-auto min-h-screen">
      <ModalBox
        isModalOpen={isCreateModalOpen}
        setIsModalOpen={setIsCreateModalOpen}
      >
        <div className="bg-white rounded-lg w-[500px]">
          <p className="border-b px-5 py-3">Add Property</p>
          <form
            onSubmit={handleAddProperty}
            className="flex flex-col gap-5 w-full p-5"
          >
            <label htmlFor="" className="flex flex-col relative">
              <div className="space-y-2">
                <span className="text-sm border border-dashed flex items-center justify-center h-16 w-full p-5 rounded-lg">
                  Upload upto 5 images
                </span>
              </div>
              <input
                type="file"
                multiple
                onChange={handleFilesSelect}
                name="image[]"
                className="opacity-0 h-full w-full absolute top-0 cursor-pointer"
              />
            </label>
            <label htmlFor="">
              <span className="text-sm">Name</span>
              <input
                type="text"
                name="name"
                defaultValue={userInfo?.name}
                className="input-box w-full"
                readOnly
              />
            </label>
            <label htmlFor="">
              <span className="text-sm">Description</span>
              <textarea
                type="text"
                name="description"
                className="input-box w-full"
              />
            </label>
            <label htmlFor="">
              <span className="text-sm">Address</span>
              <input type="text" name="location" className="input-box w-full" />
            </label>
            <label htmlFor="">
              <span className="text-sm">Price (Tk) </span>
              <input type="number" name="price" className="input-box w-full" />
            </label>
            <label htmlFor="">
              <span className="text-sm">Living Area</span>
              <input type="number" name="area" className="input-box w-full" />
            </label>
            <label htmlFor="">
              <span className="text-sm">Bed</span>
              <input type="number" name="bed" className="input-box w-full" />
            </label>
            <label htmlFor="">
              <span className="text-sm">Bathroom</span>
              <input
                type="number"
                name="bathroom"
                className="input-box w-full"
              />
            </label>
            <button type="submit" className="primary-btn">
              Add Property
            </button>
          </form>
        </div>
      </ModalBox>
      <div className="flex flex-col gap-5">
        <p className="text-3xl font-semibold my-10">My Properties</p>
        <div
          className={`grid ${
            showRentInfo ? "grid-cols-4" : "grid-cols-3"
          } gap-5`}
        >
          <div
            className={`grid ${
              showRentInfo ? "col-span-3 grid-cols-2" : "col-span-3 grid-cols-3"
            }    gap-5`}
          >
            <div
              onClick={() => setIsCreateModalOpen(true)}
              className="w-full h-full shadow-lg rounded-lg flex flex-col justify-center items-center cursor-pointer"
            >
              <MdOutlineAddHome className="text-9xl" />
            </div>

            {myProperties?.map((house, index) => (
              <div className="" key={index}>
                <HouseCard
                  house={house}
                  selectedHouse={house}
                  setSelectedHouse={setSelectedHouse}
                  setShowHouse={setShowHouse}
                  showHouse={showHouse}
                  setShowRentInfo={setShowRentInfo}
                  showRentInfo={showRentInfo}
                />
              </div>
            ))}
          </div>
          {showRentInfo && (
            <div className="col-span-1">
              <RentedByCard selectedHouse={selectedHouse} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;

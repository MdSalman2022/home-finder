import { StateContext } from "@/contexts/StateProvider";
import React, { useContext, useState, useEffect } from "react";
import HouseCard from "../Home/HouseCard";
import { FaImages, FaPlus } from "react-icons/fa";
import { MdOutlineAddHome } from "react-icons/md";
import ModalBox from "@/components/shared/ModalBox";
import { AuthContext } from "@/contexts/AuthProvider";
import { toast } from "react-hot-toast";
import RentedByCard from "./RentedByCard";
import { BiImageAdd } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import inputArray from "@/assets/data";
import Dropdown from "../Dropdown";

const Properties = () => {
  const { user } = useContext(AuthContext);
  const { userInfo, refetchAllHouse, myProperties, refetchMyProperties } =
    useContext(StateContext);

  const [heroImages, setHeroImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const [showHouse, setShowHouse] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState({});
  const [showRentInfo, setShowRentInfo] = useState(false);

  const { setIsCreateModalOpen, isCreateModalOpen } = useContext(StateContext);

  const allCities = inputArray.map((item) => item.City);

  // console.log("allCities", allCities);

  const [selectedCity, setSelectedCity] = useState("Dhaka");
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("Mirpur");

  const bhks = ["1 Bhk", "2 Bhk", "3 Bhk", "4 Bhk", "5 Bhk"];

  useEffect(() => {
    const cityObject = inputArray.find((city) => city?.City === selectedCity);

    if (cityObject) {
      setSelectedArea(cityObject.Area[0]);
      setSelectedAreas(cityObject.Area);
    } else {
      setSelectedAreas([]);
    }
  }, [selectedCity]);

  const [selectedBhk, setSelectedBhk] = useState("3 Bhk");

  const handleSelectBhk = (item) => {
    setSelectedBhk(item);
  };
  const handleSelect = (item) => {
    setSelectedCity(item);
  };
  const handleSelectArea = (item) => {
    setSelectedArea(item);
  };

  // const [myProperties, setMyProperties] = useState([]);

  console.log("myProperties", myProperties);

  const handleAddProperty = async (e) => {
    e.preventDefault();

    const form = e.target;
    const description = form.description.value;
    const location = form.location.value;
    const thana = selectedArea;
    const district = selectedCity;
    const propertyType = selectedBhk;
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
      thana: thana,
      district: district,
      propertyType: propertyType,
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
      refetchAllHouse();
      refetchMyProperties();
      setHeroImages([]);
      setSelectedImages([]);
      return data?.notifications;
    } else {
      console.log("Failed to create property");
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

  const handleFilesSelect = (event) => {
    console.log("heroImages length", heroImages);
    if (selectedImages.length >= 5) {
      toast.error("You can't upload more than 5 images");
      return;
    } else {
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
        setSelectedImages((prevSelectedImages) => [
          ...prevSelectedImages,
          file,
        ]);
      }
    }
  };

  console.log("userInfo", userInfo);

  return (
    <div className="container-sm mx-auto min-h-screen">
      <ModalBox
        isModalOpen={isCreateModalOpen}
        setIsModalOpen={setIsCreateModalOpen}
      >
        <div className="bg-white rounded-lg md:min-w-[900px] 2xl:max-h-[850px]">
          <p className="border-b px-5 py-3">Add Property</p>
          <div className="grid grid-cols-2 p-2 gap-3 h-full">
            <label htmlFor="" className="flex flex-col  ">
              <div className="space-y-2 flex flex-col justify-between h-[92%]">
                <div className="flex flex-col h-full">
                  {heroImages?.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2">
                      {heroImages?.map((image, index) => (
                        <img
                          src={image}
                          key={index}
                          alt=""
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex h-full justify-center items-center ">
                      <FaImages className="text-5xl" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center justify-center gap-5 border border-dashed border-gray-600 h-60 w-full p-5 rounded-lg relative">
                  <BiImageAdd className="text-5xl" />
                  <span className="text-sm">Upload upto 5 images</span>
                  <input
                    type="file"
                    multiple
                    onChange={handleFilesSelect}
                    name="image[]"
                    className="opacity-0 h-full w-full absolute top-0 cursor-pointer"
                  />
                </div>
              </div>
            </label>
            <form
              onSubmit={handleAddProperty}
              className="flex flex-col gap-1 2xl:gap-5 w-full p-2 2xl:p-5"
            >
              <label htmlFor="">
                <span className="text-sm">Description</span>
                <textarea
                  type="text"
                  name="description"
                  className="input-box w-full"
                />
              </label>
              <div className="flex justify-between gap-3">
                <label htmlFor="" className="flex gap-5 items-center">
                  <span className="text-sm">District</span>
                  <Dropdown
                    items={allCities}
                    onSelect={handleSelect}
                    selectedItem={selectedCity}
                  />
                </label>
                <label htmlFor="" className="flex gap-5 items-center">
                  <span className="text-sm">Thana</span>
                  <Dropdown
                    items={selectedAreas}
                    onSelect={handleSelectArea}
                    selectedItem={selectedArea}
                  />
                </label>
                <label htmlFor="" className="flex gap-5 items-center">
                  <span className="text-sm">Property Type</span>
                  <Dropdown
                    items={bhks}
                    onSelect={handleSelectBhk}
                    selectedItem={selectedBhk}
                  />
                </label>
              </div>

              <label htmlFor="">
                <span className="text-sm">Address</span>
                <input
                  type="text"
                  name="location"
                  className="input-box w-full"
                />
              </label>

              <label htmlFor="">
                <span className="text-sm">Price (Tk) </span>
                <input
                  type="number"
                  name="price"
                  className="input-box w-full"
                />
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
              <button
                type="submit"
                className="primary-btn md:h-10 md:text-sm 2xl:text-lg 2xl:h-12 flex items-center justify-center"
              >
                Add Property
              </button>
            </form>
          </div>
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
            {myProperties?.length > 0 ? (
              <div
                onClick={() => setIsCreateModalOpen(true)}
                className="w-full h-full shadow-lg rounded-lg flex flex-col justify-center items-center cursor-pointer"
              >
                <MdOutlineAddHome className="text-9xl" />
              </div>
            ) : (
              <div
                onClick={() => setIsCreateModalOpen(true)}
                className="w-80 h-80 shadow-lg rounded-lg flex flex-col justify-center items-center cursor-pointer"
              >
                <MdOutlineAddHome className="text-9xl" />
              </div>
            )}

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

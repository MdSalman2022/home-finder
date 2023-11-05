import { StateContext } from "@/contexts/StateProvider";
import React, { useContext, useState, useEffect } from "react";
import HouseCard from "../Home/HouseCard";
import { FaPlus } from "react-icons/fa";
import { MdOutlineAddHome } from "react-icons/md";
import ModalBox from "@/components/shared/ModalBox";
import { AuthContext } from "@/contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Properties = () => {
  const { user } = useContext(AuthContext);
  const { allHouse, userInfo } = useContext(StateContext);

  const [showHouse, setShowHouse] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState({});

  const { setIsCreateModalOpen, isCreateModalOpen } = useContext(StateContext);

  const [myProperties, setMyProperties] = useState([]);

  useEffect(() => {
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
    const images = "";
    const floorPlanImage = "";

    const newHouse = {
      Name: userInfo?.name,
      Description: description,
      RentFee: parseInt(price),
      Features: "",
      Images: images,
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

  return (
    <div className="container-sm mx-auto ">
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
        <p className="text-3xl font-semibold my-10">Your Properties</p>
        <div className="grid grid-cols-3 gap-5">
          <div
            onClick={() => setIsCreateModalOpen(true)}
            className="w-full h-full shadow-lg rounded-lg flex flex-col justify-center items-center cursor-pointer"
          >
            <MdOutlineAddHome className="text-9xl" />
          </div>

          {myProperties?.length > 0
            ? myProperties?.map((house, index) => (
                <div className="" key={index}>
                  <HouseCard
                    house={house}
                    selectedHouse={house}
                    setSelectedHouse={setSelectedHouse}
                    setShowHouse={setShowHouse}
                    showHouse={showHouse}
                  />
                </div>
              ))
            : allHouse?.map((house, index) => (
                <div className="" key={index}>
                  <HouseCard
                    house={house}
                    selectedHouse={house}
                    setSelectedHouse={setSelectedHouse}
                    setShowHouse={setShowHouse}
                    showHouse={showHouse}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;

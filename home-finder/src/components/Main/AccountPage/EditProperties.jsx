import inputArray from "@/assets/data";
import ModalBox from "@/components/shared/ModalBox";
import { StateContext } from "@/contexts/StateProvider";
import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { BiImageAdd } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Dropdown from "../Dropdown";

const EditProperties = ({ isModalOpen, setIsModalOpen, selectedHouse }) => {
  const { refetchAllHouse, refetchMyProperties } = useContext(StateContext);

  const [heroImages, setHeroImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const allCities = inputArray.map((item) => item.City);

  console.log("inputArray", inputArray);
  console.log("allCities", allCities);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

  const [defaultCity, setDefaultCity] = useState("");
  const [defaultThana, setDefaultThana] = useState("");
  const [defaultBhk, setDefaultBhk] = useState("");

  useEffect(() => {
    const cityObject = inputArray.find(
      (city) => city?.City === selectedHouse?.district
    );
    if (cityObject) {
      setDefaultCity(cityObject.City);
      setDefaultThana(
        cityObject.Area.find((area) => area === selectedHouse?.thana)
      );
      setDefaultBhk(selectedHouse?.propertyType);
    }
  }, [
    selectedHouse?.district,
    selectedHouse?.propertyType,
    selectedHouse?.thana,
  ]);

  console.log("defaultCity", defaultCity);
  console.log("defaultThana", defaultThana);
  console.log("defaultBhk", defaultBhk);

  useEffect(() => {
    if (selectedCity) {
      const cityObject = inputArray.find((city) => city?.City === selectedCity);

      if (cityObject) {
        setSelectedAreas(cityObject.Area);
        setSelectedArea(cityObject.Area[0]);
      } else {
        setSelectedAreas([]);
      }
    } else {
      const cityObject = inputArray.find((city) => city?.City === defaultCity);

      if (cityObject) {
        setSelectedAreas(cityObject.Area);
        setSelectedArea(defaultThana);
      } else {
        setSelectedAreas([]);
      }
    }
  }, [selectedCity, defaultCity, defaultThana]);

  console.log(
    "find",
    inputArray
      ?.find((city) => city?.City === selectedHouse?.district)
      .Area?.find((area) => area === selectedHouse?.thana)
  );
  console.log("selectedArea", selectedArea);

  const bhks = ["1 Bhk", "2 Bhk", "3 Bhk", "4 Bhk", "5 Bhk"];

  const [selectedBhk, setSelectedBhk] = useState("");

  const handleSelectBhk = (item) => {
    setSelectedBhk(item);
  };
  const handleSelect = (item) => {
    setSelectedCity(item);
  };
  const handleSelectArea = (item) => {
    setSelectedArea(item);
  };

  console.log("selectedHouse", selectedHouse);

  const handleUpdateProperty = async (e) => {
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

    const updateHouse = {
      id: selectedHouse?.pid,
      Description: description,
      RentFee: parseInt(price),
      Location: location,
      thana: thana,
      district: district,
      propertyType: propertyType,
      PropertyInfo: {
        Area: parseInt(area),
        Bed: parseInt(bed),
        Bathroom: parseInt(bathroom),
      },
    };

    console.log("updateHouse", updateHouse);

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/properties/updateProperty`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateHouse),
      }
    );
    const data = await response.json();

    console.log("data", data);
    if (data) {
      toast.success("Property updated successfully");
      console.log("Property updated successfully");
      refetchAllHouse();
      refetchMyProperties();
      setHeroImages([]);
      setSelectedImages([]);
      setIsModalOpen(false);
      return data?.notifications;
    } else {
      console.log("Failed to create property");
    }
  };

  console.log("selectedImages", selectedImages);

  console.log("heroImages", heroImages);

  const uploadedImages =
    (selectedHouse?.Images &&
      JSON.parse(selectedHouse?.Images.replace(/\\/g, ""))) ||
    [];
  console.log("uploadedImages", uploadedImages);

  const propertyInfoObject = JSON.parse(selectedHouse?.PropertyInfo || "{}");

  console.log("propertyInfoObject", propertyInfoObject);

  return (
    <div>
      <ModalBox isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="flex flex-col bg-white rounded-lg md:min-w-[900px] 2xl:max-h-[850px]">
          <div className="flex justify-between p-3  border-b">
            <p className="text-xl">Edit Property</p>
            <span onClick={() => setIsModalOpen(!isModalOpen)}>
              <RxCross2 className="text-2xl hover:text-red-600 cursor-pointer" />
            </span>
          </div>
          <div className="grid grid-cols-2 p-2 gap-3 h-full">
            <label htmlFor="" className="flex flex-col  ">
              <div className="space-y-2 flex flex-col justify-between h-[92%]">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-2 gap-2">
                    {uploadedImages?.map((image, index) => (
                      <img
                        src={image}
                        key={index}
                        alt=""
                        className="w-full h-52 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </label>
            <form
              onSubmit={handleUpdateProperty}
              className="flex flex-col gap-1 2xl:gap-5 w-full p-2 2xl:py-0 2xl:px-5"
            >
              <label htmlFor="">
                <span className="text-sm">Description</span>
                <textarea
                  type="text"
                  name="description"
                  className="input-box w-full h-20"
                  defaultValue={selectedHouse?.Description}
                />
              </label>
              <div className="flex justify-between gap-3">
                <label htmlFor="" className="flex gap-5 items-center">
                  <span className="text-sm">District</span>
                  <Dropdown
                    items={allCities}
                    onSelect={handleSelect}
                    selectedItem={selectedCity}
                    defaultItem={defaultCity}
                  />
                </label>
                <label htmlFor="" className="flex gap-5 items-center">
                  <span className="text-sm">Thana</span>
                  <Dropdown
                    items={selectedAreas}
                    onSelect={handleSelectArea}
                    selectedItem={selectedArea}
                    defaultItem={defaultThana}
                  />
                </label>
                <label htmlFor="" className="flex gap-5 items-center">
                  <span className="text-sm">Property Type</span>
                  <Dropdown
                    items={bhks}
                    onSelect={handleSelectBhk}
                    selectedItem={selectedBhk}
                    defaultItem={defaultBhk}
                  />
                </label>
              </div>

              <label htmlFor="">
                <span className="text-sm">Address</span>
                <input
                  type="text"
                  name="location"
                  className="input-box w-full"
                  defaultValue={selectedHouse?.Location}
                />
              </label>

              <label htmlFor="">
                <span className="text-sm">Price (Tk) </span>
                <input
                  type="number"
                  name="price"
                  className="input-box w-full"
                  defaultValue={selectedHouse?.RentFee}
                />
              </label>
              <label htmlFor="">
                <span className="text-sm">Living Area</span>
                <input
                  type="number"
                  name="area"
                  className="input-box w-full"
                  defaultValue={propertyInfoObject?.Area}
                />
              </label>
              <label htmlFor="">
                <span className="text-sm">Bed</span>
                <input
                  type="number"
                  name="bed"
                  className="input-box w-full"
                  defaultValue={propertyInfoObject?.Bed}
                />
              </label>
              <label htmlFor="">
                <span className="text-sm">Bathroom</span>
                <input
                  type="number"
                  name="bathroom"
                  className="input-box w-full"
                  defaultValue={propertyInfoObject?.Bathroom}
                />
              </label>
              <button
                type="submit"
                className="primary-btn md:h-10 md:text-sm 2xl:text-lg 2xl:h-12 flex items-center justify-center"
              >
                Update Property
              </button>
            </form>
          </div>
        </div>
      </ModalBox>
    </div>
  );
};

export default EditProperties;

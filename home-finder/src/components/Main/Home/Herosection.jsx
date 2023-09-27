import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../Dropdown";
import inputArray from "@/assets/data";
import bg from "@/assets/bg.png";

const Herosection = () => {
  const allCities = inputArray.map((item) => item.City);

  console.log("allCities", allCities);

  const [selectedCity, setSelectedCity] = useState("Dhaka");
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("Mirpur");

  console.log("selectedAreas", selectedAreas);

  // Function to handle city selection
  useEffect(() => {
    const cityObject = inputArray.find((city) => city?.City === selectedCity);

    if (cityObject) {
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

  const bhks = ["1 Bhk", "2 Bhk", "3 Bhk", "4 Bhk", "5 Bhk"];

  console.log("selectedCity", selectedCity);

  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 w-[95vw] h-[50vh] rounded-3xl relative">
        <div
          className="absolute right-10 h-full flex justify-end"
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          }}
        >
          <img className="object-cover " src={bg} alt="" />
        </div>
        <div className="flex justify-between items-center h-full w-full p-5">
          <div className="flex flex-col gap-5">
            <div className="h-fit bg-blue-900 w-fit flex flex-col gap-3 justify-center p-5 rounded-lg">
              <p className="text-6xl font-bold text-white">
                Find Your Dream Home
              </p>
              <p className="text-gray-300 text-xl">
                Saving much time by finding the match one using our algorithm{" "}
                <br />
                that we designed
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-lg flex items-end justify-between gap-10">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">District</p>
                <Dropdown
                  items={allCities}
                  onSelect={handleSelect}
                  selectedItem={selectedCity}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">City</p>
                <Dropdown
                  items={selectedAreas}
                  onSelect={handleSelectArea}
                  selectedItem={selectedArea}
                />
              </div>{" "}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Property Type</p>
                <Dropdown
                  items={bhks}
                  onSelect={handleSelectBhk}
                  selectedItem={selectedBhk}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Budget</p>
                <input type="text" className="input-box w-full" />
              </div>
              <div className="primary-outline-btn h-fit">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

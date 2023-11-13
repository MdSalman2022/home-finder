import React, { useEffect, useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../Dropdown";
import inputArray from "@/assets/data";
import bg from "@/assets/bg.png";
import { StateContext } from "@/contexts/StateProvider";
import { GrPowerReset } from "react-icons/gr";
import { RxReset } from "react-icons/rx";
import toast from "react-hot-toast";

const Herosection = () => {
  const { filteredProperties, setFilteredProperties } =
    useContext(StateContext);
  const allCities = inputArray.map((item) => item.City);

  // console.log("allCities", allCities);

  const [selectedCity, setSelectedCity] = useState("Dhaka");
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("Mirpur");

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

  const bhks = ["1 Bhk", "2 Bhk", "3 Bhk", "4 Bhk", "5 Bhk"];

  console.log("selectedCity", selectedCity);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("searched");
    const form = e.target;
    const budget = form.budget.value;
    const district = selectedCity;
    const thana = selectedArea;
    const propertyType = selectedBhk;

    const payload = {
      maxRent: budget || 1000000,
      district,
      thana,
      propertyType,
    };

    console.log("payload", payload);

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/properties/filterProperties`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = await response.json();
    console.log("res", res);

    setFilteredProperties(res);
  };

  console.log("filteredProperties", filteredProperties);

  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 w-full md:w-[95vw] md:h-[50vh] md:rounded-xl 2xl:rounded-3xl relative">
        <div
          className="absolute md:right-2 2xl:right-10 h-full hidden md:flex justify-end"
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          }}
        >
          <img className="object-cover " src={bg} alt="" />
        </div>
        <div className="flex justify-between items-center h-full w-full p-5">
          <div className="flex flex-col gap-5">
            <div className="h-fit bg-blue-900 w-fit flex flex-col gap-3 justify-center p-5 rounded-lg">
              <p className="md:text-4xl 2xl:text-6xl font-bold text-white">
                Find Your Dream Home
              </p>
              <p className="text-gray-300 md:text-xl">
                Saving much time by finding the match one using our algorithm{" "}
                <br />
                that we designed
              </p>
            </div>

            <form
              onSubmit={handleSearch}
              className="p-5 bg-white rounded-lg shadow-lg flex flex-wrap md:flex-nowrap items-end justify-between gap-2 md:gap-10"
            >
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">District</p>
                <Dropdown
                  items={allCities}
                  onSelect={handleSelect}
                  selectedItem={selectedCity}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Thana</p>
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
                <p className="font-bold text-xl">Maximum Budget</p>
                <input
                  type="number"
                  name="budget"
                  className="input-box w-full"
                  placeholder="20000"
                />
              </div>
              <div className="flex flex-col gap-1">
                {(filteredProperties?.properties?.length > 0 ||
                  filteredProperties?.issue === "No property found") && (
                  <a
                    name="reset"
                    onClick={() => setFilteredProperties([])}
                    className="primary-outline-btn border-red-600 hover:bg-red-800 text-red-600 hover:text-white h-fit w-14 md:w-auto flex justify-center"
                  >
                    <RxReset />
                  </a>
                )}
                <button
                  name="submit"
                  className="primary-outline-btn h-fit w-14 md:w-auto flex justify-center"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

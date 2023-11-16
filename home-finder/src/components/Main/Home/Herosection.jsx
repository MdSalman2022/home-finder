import React, { useEffect, useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../Dropdown";
import inputArray from "@/assets/data";
import bg from "@/assets/bg.png";
import { StateContext } from "@/contexts/StateProvider";
import { GrPowerReset } from "react-icons/gr";
import { RxReset } from "react-icons/rx";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Herosection = () => {
  const { filteredProperties, setFilteredProperties } =
    useContext(StateContext);
  const allCities = inputArray.map((item) => item.City);

  // console.log("allCities", allCities);

  const [selectedCity, setSelectedCity] = useState("Dhaka");
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("Mirpur");
  const [selectFavorite, setSelectFavorite] = useState(0);

  console.log("selectFavorite", selectFavorite);

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

  console.log("selectedBhk", selectedBhk);

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
    const maxBudget = form.maxBudget.value;
    const minBudget = form.minBudget.value;
    const district = selectedCity;
    const thana = selectedArea;
    const propertyType = selectedBhk;
    const favoriteCount = parseInt(selectFavorite);

    const payload = {
      maxRent: maxBudget || 1000000,
      minRent: minBudget || 0,
      district,
      thana,
      propertyType,
      favoriteCount,
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
  console.log("selectedArea", selectedArea);

  const favorites = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
              className="p-5 bg-white z-[300] rounded-lg shadow-lg flex flex-wrap md:flex-nowrap items-end justify-between gap-2 md:gap-5"
            >
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">District</p>
                <Select
                  onValueChange={(value) => setSelectedCity(value)}
                  className="w-[150px]"
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Select a District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {allCities.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <Dropdown
                  items={allCities}
                  onSelect={handleSelect}
                  selectedItem={selectedCity}
                /> */}
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Thana</p>
                <Select
                  onValueChange={(value) => setSelectedArea(value)}
                  className="w-[150px]"
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Select a Thana" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {selectedAreas.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/*    <Dropdown
                  items={selectedAreas}
                  onSelect={handleSelectArea}
                  selectedItem={selectedArea}
                /> */}
              </div>{" "}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Property Type</p>
                <Select
                  onValueChange={(value) => setSelectedBhk(value)}
                  className="w-[150px]"
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Bhk" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {bhks.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <Dropdown
                  items={bhks}
                  onSelect={handleSelectBhk}
                  selectedItem={selectedBhk}
                /> */}
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-lg">Min</p>
                  <input
                    type="number"
                    name="minBudget"
                    className="input-box w-28"
                    placeholder="10000"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-lg">Max</p>
                  <input
                    type="number"
                    name="maxBudget"
                    className="input-box w-28"
                    placeholder="20000"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-lg">Likes</p>
                  <Select
                    onValueChange={(value) => setSelectFavorite(value)}
                    className="w-[150px]"
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Likes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {favorites.map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {(filteredProperties?.properties?.length > 0 ||
                  filteredProperties?.issue === "No property found") && (
                  <a
                    name="reset"
                    onClick={() => setFilteredProperties([])}
                    className="primary-outline-btn border-red-600 hover:bg-red-800 text-red-600 hover:text-white h-10 w-14 md:w-auto flex justify-center items-center"
                  >
                    <RxReset />
                  </a>
                )}
                <button
                  name="submit"
                  className="primary-outline-btn h-10 w-14 md:w-auto flex justify-center items-center"
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

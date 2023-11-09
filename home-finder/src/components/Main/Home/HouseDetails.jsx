import React from "react";
import { BiSolidBath } from "react-icons/bi";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import room1 from "@/assets/room1.webp";
import room2 from "@/assets/room2.webp";
import room3 from "@/assets/room3.jpeg";
import room4 from "@/assets/room4.jpg";
import room5 from "@/assets/room5.jpeg";
import map from "@/assets/map.png";

const HouseDetails = ({ selectedHouse }) => {
  console.log("selectedHouse", selectedHouse);
  const propertyInfoObject =
    (selectedHouse?.Name && JSON?.parse(selectedHouse?.PropertyInfo)) || {};

  console.log("propertyInfoObject", propertyInfoObject);
  return (
    <div className="sticky top-10 flex flex-col gap-2 shadow-lg p-5 rounded-xl">
      <p className="font-semibold">Product Details</p>
      <div className="flex flex-col gap-2">
        <img
          className="h-[200px] object-cover"
          src={
            selectedHouse?.images?.length > 0 ? selectedHouse?.images[0] : room1
          }
          alt=""
        />
        <div className="grid grid-cols-2 gap-x-2">
          <img
            className="h-[100px] w-full object-cover"
            src={
              selectedHouse?.images?.length > 0
                ? selectedHouse?.images[1]
                : room2
            }
            alt=""
          />
          <img
            className="h-[100px] w-full object-cover"
            src={
              selectedHouse?.images?.length > 0
                ? selectedHouse?.images[2]
                : room3
            }
            alt=""
          />
        </div>
      </div>
      <p className="font-semibold">Property From {selectedHouse?.Name}</p>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <IoBedSharp />
            <p className="text-sm">{propertyInfoObject?.Bed}</p>
          </div>
          <p className="font-semibold text-sm">Bedrooms</p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <BiSolidBath />
            <p className="text-sm">{propertyInfoObject?.Bathroom}</p>
          </div>
          <p className="font-semibold text-sm">Bathrooms</p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <BsFillHouseDoorFill />
            <p className="text-sm">{propertyInfoObject?.Area}sqft</p>
          </div>
          <p className="font-semibold text-sm">Living Area</p>
        </div>
      </div>
      <span className="flex items-center gap-2">
        <FaLocationDot />
        <span className="text-sm">{selectedHouse?.location}</span>
      </span>
      <p className="font-semibold">Description</p>
      <span className="text-sm">
        {selectedHouse?.Description}
        <Link
          to={`house/${selectedHouse?.id}`}
          className="text-blue-600 cursor-pointer"
        >
          {" "}
          Read More
        </Link>
      </span>
      <img className="rounded-xl" src={map} alt="map" />
      <div className="primary-btn flex justify-center">
        Price: {selectedHouse?.RentFee}Tk
      </div>
    </div>
  );
};

export default HouseDetails;

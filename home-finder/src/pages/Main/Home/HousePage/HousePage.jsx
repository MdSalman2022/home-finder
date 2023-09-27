import React from "react";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Herosection from "../../../../components/Main/HousePage/Herosection";
import HouseDetails from "../../../../components/Main/HousePage/HouseDetails";

const HousePage = () => {
  return (
    <div className="container-sm mx-auto space-y-3">
      <p className="text-3xl font-medium">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            {" "}
            <FaStar /> 5.00
          </span>
          <span>·</span>
          <span>308</span>
          <span>·</span>
          <span>Dhanmondi, Dhaka</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <FiShare /> Share
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineHeart /> Save
          </span>
        </div>
      </div>
      <Herosection />
      <HouseDetails />
    </div>
  );
};

export default HousePage;

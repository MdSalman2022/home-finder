import React from "react";
import { IoBedSharp } from "react-icons/io5";
import { BiSolidBath } from "react-icons/bi";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HouseCard = ({ house }) => {
  return (
    <div className="rounded-xl p-4 w-full shadow-lg bg-white">
      <img
        src="https://housing.com/news/wp-content/uploads/2022/11/shutterstock_1715891752-1200x700-compressed.jpg"
        alt=""
        className="w-full rounded-2xl"
      />
      <div className="flex flex-col gap-3 mt-5">
        <p className="text-2xl font-bold">10,000</p>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <IoBedSharp />
              <p>3</p>
            </div>
            <p className="font-semibold">Bedrooms</p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <BiSolidBath />
              <p>2</p>
            </div>
            <p className="font-semibold">Bathrooms</p>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <BsFillHouseDoorFill />
              <p>1000sqft</p>
            </div>
            <p className="font-semibold">Living Area</p>
          </div>
        </div>
        <div className="flex items-center w-full justify-between">
          <span className="flex items-center gap-2">
            <FaLocationDot />
            <span>Mirpur, Dhaka, Bangladesh</span>
          </span>
          <Link
            to="/house"
            className="primary-btn h-8 text-sm flex flex-col items-center justify-center"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;

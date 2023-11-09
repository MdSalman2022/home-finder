import React from "react";
import { IoBedSharp } from "react-icons/io5";
import { BiSolidBath } from "react-icons/bi";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import room1 from "@/assets/room1.webp";
import rentimg from "@/assets/rented.png";

const HouseCard = ({
  house,
  setSelectedHouse,
  selectedHouse,
  setShowHouse,
  showHouse,
  setShowRentInfo,
  showRentInfo,
}) => {
  const { pathname } = useLocation();

  const propertyInfoObject = JSON.parse(house?.PropertyInfo || "{}");

  const imagesArray =
    (house?.Images && JSON.parse(house?.Images.replace(/\\/g, ""))) || [];
  console.log("imagesArray", imagesArray);

  console.log("pathname", pathname);

  console.log("house card house", house);

  return (
    <div className="rounded-xl p-4 w-full shadow-lg bg-white">
      <Link to={`/house/${house?.pid}`}>
        <div className="relative flex justify-center">
          {house?.Status === "Reserved" && (
            <img
              className="absolute h-60 w-60 object-contain"
              src={rentimg}
              alt=""
            />
          )}
          <img
            src={house?.Images?.length > 0 ? imagesArray[0] : room1}
            alt=""
            className="h-[250px] w-full rounded-2xl object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">
            ৳ {house?.price || house?.RentFee}
          </p>
          <p>{house?.Status === "Reserved" && "Rented"}</p>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col text-sm">
            <div className="flex gap-1 items-center">
              <IoBedSharp />
              <p>{house?.bedroom || propertyInfoObject?.Bed}</p>
            </div>
            <p className="font-semibold">Bedrooms</p>
          </div>
          <div className="flex flex-col text-sm">
            <div className="flex gap-1 items-center">
              <BiSolidBath />
              <p>{house?.bathroom || propertyInfoObject?.Bathroom}</p>
            </div>
            <p className="font-semibold">Bathrooms</p>
          </div>
          <div className="flex flex-col text-sm">
            <div className="flex gap-1 items-center">
              <BsFillHouseDoorFill />
              <p>{house?.livingArea || propertyInfoObject?.Area}sqft</p>
            </div>
            <p className="font-semibold">Living Area</p>
          </div>
        </div>
        <div className="flex items-center w-full justify-between">
          <span className="flex items-center gap-2">
            <FaLocationDot />
            <span className="text-xs">
              {house?.location || house?.Location}
            </span>
          </span>
          {pathname === "/" ? (
            <div
              onClick={() => {
                setSelectedHouse(showHouse ? {} : house);
                setShowHouse(!showHouse);
              }}
              className={`${
                selectedHouse?.price === house?.price
                  ? "primary-outline-btn"
                  : "primary-btn"
              }  h-8 text-sm flex flex-col items-center justify-center select-none`}
            >
              {selectedHouse?.price === house?.price ? "Open" : "View"}
            </div>
          ) : pathname === "/account/properties" &&
            house?.Status === "Reserved" ? (
            <div
              onClick={() => {
                setShowRentInfo(!showRentInfo);
                setSelectedHouse(house);
              }}
              className={`primary-outline-btn h-8 text-xs flex flex-col items-center justify-center select-none`}
            >
              Rented By
            </div>
          ) : (
            <div
              className={`h-8 text-sm flex flex-col items-center justify-center select-none opacity-0`}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HouseCard;

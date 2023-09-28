import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Dropdown from "../Dropdown";

const HouseRent = ({ house }) => {
  const [selectedArea, setSelectedArea] = useState(1);
  const items = [1, 2, 3, 4, 5];

  const handleSelectArea = (item) => {
    setSelectedArea(item);
  };

  return (
    <div className="sticky top-5 w-full h-fit">
      <div className="bg-white h-full w-full border shadow-xl rounded-lg p-5">
        <div className="flex justify-between">
          <p className="text-xl font-bold py-5">BDT {house?.price}</p>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              {" "}
              <FaStar /> 5.00
            </span>
            <span>·</span>
            <span>308</span>
          </div>
        </div>
        <div>
          <div className="border rounded-lg rounded-b-none p-3">
            <div className="flex flex-col w-full gap-1">
              <span className="text-xs font-medium">CHECK-IN</span>
              <input type="date" className=" rounded-lg text-xs" />
            </div>
          </div>
          <div className="border-b border-x rounded-t-none rounded-lg p-3">
            <div className="flex flex-col w-full gap-1">
              <span className="text-xs font-medium">Members</span>
              <Dropdown
                items={items}
                onSelect={handleSelectArea}
                selectedItem={selectedArea}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className="primary-btn shadow-lg shadow-blue-100 h-12 w-full flex justify-center items-center">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseRent;

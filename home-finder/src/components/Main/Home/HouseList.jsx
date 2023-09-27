import React from "react";
import HouseCard from "./HouseCard";

const HouseList = () => {
  const allHouse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="grid grid-cols-4 gap-5 mt-10">
      {allHouse?.map((house, index) => (
        <div key={index}>
          <HouseCard house={house} />
        </div>
      ))}
    </div>
  );
};

export default HouseList;

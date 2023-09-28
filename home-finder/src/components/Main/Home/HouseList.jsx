import React, { useContext, useState } from "react";
import HouseCard from "./HouseCard";
import HouseDetails from "./HouseDetails";
import { StateContext } from "../../../contexts/StateProvider";

const HouseList = () => {
  const { allHouse } = useContext(StateContext);

  const [showHouse, setShowHouse] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState({});

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 2xl:grid-cols-4 gap-5 mt-10">
      <div
        className={`h-full flex flex-col md:grid ${
          showHouse
            ? "md:grid-cols-2 2xl:grid-cols-3 md:col-span-2 2xl:col-span-3"
            : "md:grid-cols-3 2xl:grid-cols-4 md:col-span-3 2xl:col-span-4"
        } gap-5`}
      >
        {allHouse?.map((house, index) => (
          <div key={index}>
            <HouseCard
              house={house}
              selectedHouse={selectedHouse}
              setSelectedHouse={setSelectedHouse}
              setShowHouse={setShowHouse}
              showHouse={showHouse}
            />
          </div>
        ))}
      </div>
      {showHouse && (
        <div className="col-span-1">
          <HouseDetails selectedHouse={selectedHouse} />
        </div>
      )}
    </div>
  );
};

export default HouseList;

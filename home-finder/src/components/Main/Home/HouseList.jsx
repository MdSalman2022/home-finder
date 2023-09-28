import React, { useContext, useState } from "react";
import HouseCard from "./HouseCard";
import HouseDetails from "./HouseDetails";
import { StateContext } from "../../../contexts/StateProvider";

const HouseList = () => {
  const { allHouse } = useContext(StateContext);

  const [showHouse, setShowHouse] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState({});

  return (
    <div className="grid grid-cols-4 gap-5 mt-10">
      <div
        className={`h-full grid ${
          showHouse ? "grid-cols-3 col-span-3" : "grid-cols-4 col-span-4"
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

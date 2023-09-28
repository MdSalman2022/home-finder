import React, { useContext, useEffect, useState } from "react";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Herosection from "../../../../components/Main/HousePage/Herosection";
import HouseDetails from "../../../../components/Main/HousePage/HouseDetails";
import { StateContext } from "../../../../contexts/StateProvider";
import { useParams } from "react-router-dom";

const HousePage = () => {
  const { allHouse } = useContext(StateContext);
  const { id } = useParams();
  const [house, setHouse] = useState({});

  console.log("allHouse", allHouse);
  console.log("id", id);

  useEffect(() => {
    if (id && allHouse?.length > 0) {
      console.log(
        "find",
        allHouse.find((house) => house.id === id)
      );
      setHouse(allHouse ? allHouse.find((house) => house.id === id) : {});
    }
  }, [allHouse, id]);

  console.log("house", house);
  console.log("house name", house?.name);

  return (
    <div className="container-sm mx-auto space-y-3 px-3 md:px-0">
      <p className="text-3xl font-medium">{house?.name}</p>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            {" "}
            <FaStar /> 5.00
          </span>
          <span>·</span>
          <span>308</span>
          <span>·</span>
          <span>{house?.location}</span>
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
      <Herosection house={house} />
      <HouseDetails house={house} />
    </div>
  );
};

export default HousePage;

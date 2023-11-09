import React, { useContext, useEffect, useState } from "react";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Herosection from "../../../../components/Main/HousePage/Herosection";
import HouseDetails from "../../../../components/Main/HousePage/HouseDetails";
import { StateContext } from "../../../../contexts/StateProvider";
import { useParams } from "react-router-dom";

const HousePage = () => {
  const { id } = useParams();
  const [house, setHouse] = useState({});

  // console.log("allHouse", allHouse);
  console.log("house id", id);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }/properties/getPropertiesByUID?id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setHouse(data[0]);
      });
  }, [id]);

  console.log("house", house);

  return (
    <div className="container-sm mx-auto space-y-3 px-3 md:px-0">
      <p className="text-3xl font-medium">{house?.Name}</p>

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

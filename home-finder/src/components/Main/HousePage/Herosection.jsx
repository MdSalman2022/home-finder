import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../../contexts/StateProvider";

const Herosection = ({}) => {
  const { allHouse } = useContext(StateContext);
  const { id } = useParams();
  const [house, setHouse] = useState({});

  console.log("allHouse", allHouse);
  console.log("id", id);

  useEffect(() => {
    if (id && allHouse?.length > 0) {
      console.log(
        "find",
        allHouse.map((house) => house.id === id)
      );
      setHouse(allHouse.find((house) => house.id === id));
    }
  }, [allHouse, id]);

  console.log("house", house);
  console.log("house name", house?.name);
  return (
    <div className="grid grid-cols-3 gap-3 h-[600px]">
      <img
        className="h-[600px] w-full object-cover rounded-l-xl"
        src={house?.name && house?.images[0]}
        alt=""
      />
      <div className="flex flex-col gap-3">
        <img
          className="h-[293px] object-cover"
          src={house?.name && house?.images[1]}
          alt=""
        />
        <img
          className="h-[293px] object-cover"
          src={house?.name && house?.images[2]}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <img
          className="h-[293px] object-cover rounded-se-xl"
          src={house?.name && house?.images[3]}
          alt=""
        />
        <img
          className="h-[293px] object-cover rounded-ee-xl"
          src={house?.name && house?.images[4]}
          alt=""
        />
      </div>
    </div>
  );
};

export default Herosection;

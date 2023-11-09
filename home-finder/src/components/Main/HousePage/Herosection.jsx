import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../../contexts/StateProvider";

const Herosection = ({ house }) => {
  console.log("house", house);

  const imagesArray =
    (house?.Images && JSON.parse(house?.Images.replace(/\\/g, ""))) || [];
  console.log("imagesArray", imagesArray);

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:h-[500px]">
      <img
        className="md:h-[500px] w-full object-cover rounded-l-xl"
        src={house?.Name && imagesArray[0]}
        alt=""
      />
      <div className="flex flex-col gap-3">
        <img
          className="h-[244px] object-cover"
          src={house?.Name && imagesArray[1]}
          alt=""
        />
        <img
          className="h-[244px] object-cover"
          src={house?.Name && imagesArray[2]}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <img
          className="h-[244px] object-cover rounded-se-xl"
          src={house?.Name && imagesArray[3]}
          alt=""
        />
        <img
          className="h-[244px] object-cover rounded-ee-xl"
          src={house?.Name && imagesArray[4]}
          alt=""
        />
      </div>
    </div>
  );
};

export default Herosection;

import React from "react";
import Herosection from "../../../components/Main/Shifting/Herosection";
import Service from "../../../components/Main/Shifting/Service";
import ConfirmOrder from "../../../components/Main/Shifting/ConfirmOrder";

const Shifting = () => {
  return (
    <div className="container-lg mx-auto ">
      <Herosection />
      <Service />
      <ConfirmOrder />
    </div>
  );
};

export default Shifting;

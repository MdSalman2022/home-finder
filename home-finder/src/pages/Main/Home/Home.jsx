import React, { useContext } from "react";
import Herosection from "../../../components/Main/Home/Herosection";
import HouseList from "../../../components/Main/Home/HouseList";
import { StateContext } from "@/contexts/StateProvider";

const Home = () => {
  const { filteredProperties } = useContext(StateContext);
  return (
    <div className="container-lg mx-auto space-y-5 ">
      <Herosection />
      <div className="flex flex-col gap-2">
        {filteredProperties?.issue === "No property found" ? (
          <div>
            <p className="text-center text-3xl font-bold text-[#103ADC]">
              No Property Found for your search
            </p>
            <p className="text-4xl font-semibold">Other Properties</p>
          </div>
        ) : (
          <p className="text-4xl font-semibold">Properties</p>
        )}

        <HouseList />
      </div>
    </div>
  );
};

export default Home;

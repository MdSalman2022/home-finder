import React, { useContext } from "react";
import Herosection from "../../../components/Main/Home/Herosection";
import HouseList from "../../../components/Main/Home/HouseList";

const Home = () => {
  return (
    <div className="container-lg mx-auto ">
      <Herosection />
      <HouseList />
    </div>
  );
};

export default Home;

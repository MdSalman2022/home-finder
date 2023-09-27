import React from "react";
import room1 from "@/assets/room1.webp";
import room2 from "@/assets/room2.webp";
import room3 from "@/assets/room3.jpeg";
import room4 from "@/assets/room4.jpg";
import room5 from "@/assets/room5.jpeg";

const Herosection = () => {
  return (
    <div className="grid grid-cols-3 gap-3 h-[600px]">
      <img
        className="h-[600px] w-full object-cover rounded-l-xl"
        src={room1}
        alt=""
      />
      <div className="flex flex-col gap-3">
        <img className="h-[293px] object-cover" src={room2} alt="" />
        <img className="h-[293px] object-cover" src={room3} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <img
          className="h-[293px] object-cover rounded-se-xl"
          src={room4}
          alt=""
        />
        <img
          className="h-[293px] object-cover rounded-ee-xl"
          src={room5}
          alt=""
        />
      </div>
    </div>
  );
};

export default Herosection;

import React from "react";
import heroImage from "@/assets/heroImage.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[60vh] w-full relative">
        <img
          className="w-full h-full object-cover object-top brightness-75"
          src={heroImage}
          alt=""
        />
        <div className="absolute top-[50%] -translate-y-[50%] h-60 flex flex-col gap-3 justify-center xl:left-32 bg-gray-900 bg-opacity-50 p-5">
          <p className="text-3xl xl:text-6xl text-white font-bold">
            It's More Than Decor, IT'S A LIFESTYLE
          </p>
          <p className="text-xl text-white font-semibold">
            Turning Spaces into Your Lifestyle Canvas
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

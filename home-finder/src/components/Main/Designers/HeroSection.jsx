import React from "react";
import heroImage from "@/assets/heroImageInterior.webp";
import { FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const HeroSection = () => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }

  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // You can use latitude and longitude for your desired functionality
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#F2F7FF] w-full md:w-[80vw] md:h-[40vh] md:rounded-3xl relative flex flex-col items-center justify-center gap-5">
        <p className="text-5xl text-[#0067FB] font-semibold">
          Find your local Designer
        </p>
        <div className="flex relative items-center">
          <input
            className="rounded-full w-96 h-14 px-6  bg-[#F2F7FF] border-[#0067FB] border-2 placeholder-[#0067FB] caret-[#0067FB] focus:outline-[#2966bc]"
            type="text"
            placeholder="Search by location"
          />
          <div className="absolute right-2 flex items-center gap-2">
            <span onClick={getLocation} className="">
              <HiOutlineLocationMarker className="text-xl text-[#0067FB]  cursor-pointer    " />
            </span>
            <span className="transition-all duration-300 cursor-pointer bg-[#e2ecff] hover:bg-[#0067FB] hover:text-white rounded-full w-12 h-12 flex justify-center items-center text-[#0067FB]">
              <FaSearch className="text-xl" />
            </span>
          </div>
        </div>
      </div>
      {/* <div className="h-[70vh] w-full relative">
        <img
          className="w-full h-full object-cover object-top brightness-75"
          src={heroImage}
          alt=""
        />
        <div className="absolute top-[50%] -translate-y-[50%] h-60 flex flex-col gap-3 justify-center xl:left-32 bg-gray-900 bg-opacity-50 p-5">
          <p className="text-3xl xl:text-6xl text-white font-bold">
          Elevate Your Space with Visionary Designer
          </p>
          <p className="text-xl text-white font-semibold">
          Discover Expert Designers to Bring Your Dreams to Life
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;

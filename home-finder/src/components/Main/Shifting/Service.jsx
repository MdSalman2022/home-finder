import React from "react";
import { MdOutlineEngineering } from "react-icons/md";
import { GoPackageDependencies } from "react-icons/go";
import { LuTruck } from "react-icons/lu";
import { GrStatusGood } from "react-icons/gr";
import { TbDiscount2 } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";

const Service = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 py-10 px-4 md:px-5 2xl:px-0">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-4xl font-bold text-center leading-snug">
            <span className="">Shifting</span> and{" "}
            <span className="">Designing</span>
            <br />
            with
            <span className="text-blue-600"> Distinction</span>
          </p>
          <p className="tracking-tight text-center md:text-start">
            Tailored Solutions for Your Every Need Unlocking Possibilities, One
            Service at a Time
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-5 w-full">
          <div className="col-span-2 flex flex-col md:grid grid-rows-2 gap-5 w-full">
            <div className="flex flex-col md:grid grid-cols-3 gap-5">
              <div className="col-span-1 rounded-2xl p-10 flex flex-col gap-3 bg-[#E9FCF6] text-[#119C75]">
                <BsCheck2Circle className="text-5xl text-[#119C75]" />
                <p className="text-2xl font-bold">Affordable Rate</p>
                <span className="font-semibold">
                  You are assured of professional shifting services at low cost
                </span>
              </div>
              <div className="col-span-2 rounded-2xl p-10 flex flex-col gap-3 bg-[#FFF2F9] text-[#FF43A2]">
                <LuTruck className="text-5xl" />

                <p className="text-2xl font-bold">Verified Vehicle</p>
                <span className="font-semibold">
                  Verified trucks and skilled labor to ensure the safety of your
                  cargo
                </span>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-3 gap-5">
              <div className="col-span-2 rounded-2xl p-10 flex flex-col gap-3 bg-[#F7F0FE] ">
                <GoPackageDependencies className="text-5xl" />
                <p className="text-2xl font-bold">Packaging and set up</p>
                <span className="font-semibold">
                  Get expert packaging and setup services for your precious
                  furniture
                </span>
              </div>
              <div className="col-span-1 rounded-2xl p-10 flex flex-col gap-3  bg-[#F2F7FF] text-[#0067FB] ">
                <MdOutlineEngineering className="text-5xl" />
                <p className="text-2xl font-bold">Skilled technician</p>
                <span className="font-semibold">
                  Get installation service from our skilled technicians
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-center rounded-2xl p-10 gap-3 bg-[#FEF9E6] text-[#DAAB00]">
            <TbDiscount2 className="text-7xl" />
            <p className="text-3xl md:text-5xl leading-relaxed font-bold">
              Free <br /> Interior Design <br /> Consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

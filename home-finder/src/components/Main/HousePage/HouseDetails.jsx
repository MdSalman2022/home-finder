import React, { useContext } from "react";
import avatar from "@/assets/avatar.jpeg";
import { BsDoorOpen, BsLightningFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { GiWaterDrop } from "react-icons/gi";
import plan from "@/assets/plan.jpg";
import { MdOutlineSecurity } from "react-icons/md";
import { GiPowerLightning, GiGymBag, GiFlowers } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { TbParking, TbCameraCheck, TbStairsDown } from "react-icons/tb";
import { GiFireExtinguisher } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import HouseCard from "../Home/HouseCard";
import HouseRent from "./HouseRent";
import { StateContext } from "../../../contexts/StateProvider";

const HouseDetails = ({ house }) => {
  const { allHouse } = useContext(StateContext);
  const facilities = [
    {
      id: 1,
      title: "24/7 Gas",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quo magnam asperiores exercitationem optio fugit vero eos harum esse. Voluptatibus!",
      icon: AiOutlineFire,
    },
    {
      id: 2,
      title: "24/7 Water",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quo magnam asperiores exercitationem optio fugit vero eos harum esse. Voluptatibus!",
      icon: GiWaterDrop,
    },
    {
      id: 3,
      title: "24/7 Electricity",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quo magnam asperiores exercitationem optio fugit vero eos harum esse. Voluptatibus!",
      icon: BsLightningFill,
    },
  ];

  const propertyInfo = [
    {
      id: 1,
      title: "Property Type",
      description: "Residential",
    },
    {
      id: 3,
      title: "Reference no.",
      description: "HF1242141",
    },
    {
      id: 2,
      title: "Property Purpose",
      description: "Rent",
    },
    {
      id: 4,
      title: "Last Updated",
      description: "25 September 2023",
    },
  ];

  const features = [
    {
      name: "Lift Service",
      icon: BsDoorOpen,
    },
    {
      name: "Parking",
      icon: TbParking,
    },
    {
      name: "Security",
      icon: MdOutlineSecurity,
    },
    {
      name: "CCTV",
      icon: TbCameraCheck,
    },
    {
      name: "Generator",
      icon: GiPowerLightning,
    },
    {
      name: "Emergency Exit",
      icon: TbStairsDown,
    },
    {
      name: "Fire Extinguisher",
      icon: GiFireExtinguisher,
    },
    {
      name: "Intercom",
      icon: FiPhoneCall,
    },
    {
      name: "Gym",
      icon: GiGymBag,
    },
    {
      name: "Roof Top Garden",
      icon: GiFlowers,
    },
  ];

  return (
    <div>
      <div className="md:grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="flex items-center justify-between py-5">
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Property of {house?.name}</p>
              <div className="flex items-center gap-1">
                <p>{house?.bedroom} Bedrooms </p>
                <span>·</span>
                <span>{house?.bathroom} Bathrooms</span>
                <span>·</span>
                <span>{house?.balcony || 1} Balcony</span>
              </div>
            </div>
            <img
              className="w-14 h-14 rounded-full object-cover"
              src={avatar}
              alt=""
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 py-10 border-y">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start gap-2">
                  <facility.icon className="text-xl mt-1" />
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold flex gap-1 items-center">
                      {facility.title}
                    </span>
                    <span className="text-xs">{facility.description}</span>
                  </div>
                </div>
              ))}
            </div>
            <span className="pt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              perspiciatis illo velit quia debitis consequuntur cupiditate
              aliquam, est veniam dignissimos ullam ratione. Exercitationem
              animi unde ut praesentium! Natus saepe non sapiente, voluptatem
              consequatur suscipit dolor in rem alias aut totam. Dolorem,
              molestias? Officia in id asperiores tempora velit cupiditate. Quis
              blanditiis ea omnis nulla eius fugit provident officia aspernatur
              assumenda alias repellendus tenetur eos et numquam laboriosam,
              modi magni voluptatem reprehenderit atque. Itaque eum aliquid
              quia? Accusantium dolore possimus dolorum eligendi! Reiciendis
              natus commodi culpa expedita odio fugit ipsam cumque voluptate in,
              omnis cupiditate odit assumenda quod nostrum vitae nobis?
            </span>
            <div>
              <p className="text-2xl font-semibold">Property Information</p>
              <div className="grid grid-cols-2 gap-5">
                {propertyInfo.map((info, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 border-b gap-2 py-3"
                  >
                    <span className="flex gap-1 items-center">
                      {info.title}
                    </span>
                    <span className="font-semibold ">{info.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold">Floor Plans</p>
              <div className="flex justify-center">
                <img className="w-80" src={plan} alt="" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold">Features</p>
              <div className="flex flex-wrap gap-3 w-full ">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center pl-5 items-start h-32 w-60 border rounded-lg gap-2 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                  >
                    <feature.icon className="text-3xl" />
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold">Recommendation</p>
              <div className="grid md:grid-cols-2 gap-5 mt-5">
                {allHouse?.slice(0, 3).map((house, index) => (
                  <div key={index}>
                    <HouseCard house={house} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <HouseRent house={house} />
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;

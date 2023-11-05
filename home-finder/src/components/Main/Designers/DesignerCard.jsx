import React, { useState } from "react";
import room1 from "@/assets/room1.webp";
import avatar from "@/assets/avatar.jpeg";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const DesignerCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex gap-5">
      <img
        className="aspect-video object-cover md:max-w-[200px] 2xl:max-w-[400px] rounded-lg"
        src={room1}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start w-full">
          <div className="flex gap-2">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={avatar}
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Name</p>
              <div className="flex items-center gap-2">
                <span className="text-[#ffbf2e]">4.9</span>
                <span className="flex gap-1 text-[#ffbf2e]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="font-semibold">22 Reviews</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="primary-outline-btn flex items-center gap-2">
              <FaLocationArrow />
              Send Message
            </button>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <p className="w-[80%]">
            {isExpanded
              ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ad?
            Possimus, cum ad? Ducimus delectus necessitatibus voluptatem aliquid
            perspiciatis praesentium excepturi sequi, maxime itaque temporibus
            voluptatum! Explicabo repudiandae placeat sit? Corrupti consequuntur
            illum delectus. Velit nostrum harum mollitia, veritatis quis
            possimus deleniti maiores ipsam, veniam eos sit blanditiis ut
            delectus!`
              : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ad?
              Possimus, cum ad? Ducimus delectus necessitatibus voluptatem aliquid
              perspiciatis praesentium excepturi sequi...`}
            <button
              className="text-blue-600"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          </p>

          <span className="flex items-center gap-1">
            <HiLocationMarker />
            <p>Banani, Dhaka</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;

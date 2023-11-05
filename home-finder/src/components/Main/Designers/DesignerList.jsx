import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DesignerCard from "./DesignerCard";

const DesignerList = () => {
  const categories = [
    {
      name: "Architects & Building Designers",
    },
    {
      name: "Interior Designers & Decorators",
    },
    {
      name: "Civil Engineers & Contractors",
    },
    {
      name: "Design-Build Firms",
    },
    {
      name: "Home Builders & Construction Companies",
    },
    {
      name: "Kitchen & Bath Designers",
    },
    {
      name: "Landscape Architects & Contractors",
    },
    {
      name: "Tile, Stone & Countertops",
    },
    {
      name: "Furniture & Accessories",
    },
    {
      name: "Flooring & Carpet",
    },
  ];

  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <div>
      <div className="grid md:grid-cols-3 2xl:grid-cols-4">
        <div className="col-span-1 flex flex-col gap-5 items-start  mt-5">
          <div className="w-full flex flex-col gap-2">
            <p className="text-lg font-semibold">Location</p>
            <input
              className="input-box w-80"
              placeholder="District"
              type="text"
            />
            <input className="input-box w-80" placeholder="City" type="text" />
          </div>
          <div className="flex flex-col gap-3 border-t mt-3 w-80">
            <div
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="hover:bg-[#f6f6f6] flex justify-between items-center gap-2 w-full py-3 pl-2 pr-3 cursor-pointer"
            >
              <p className="text-lg font-semibold">Professional Category</p>
              <FaChevronUp
                className={`transition-all duration-300 text-lg ${
                  categoryOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {categoryOpen && (
              <RadioGroup
                defaultValue="Interior Designers & Decorators"
                className="gap-5"
              >
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={category.name} id={index} />
                    <Label htmlFor={index}>{category.name}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        </div>
        <div className="col-span-2 2xl:col-span-3 flex flex-col gap-5  mt-5">
          <DesignerCard />
          <DesignerCard />
          <DesignerCard />
          <DesignerCard />
          <DesignerCard />
        </div>
      </div>
    </div>
  );
};

export default DesignerList;

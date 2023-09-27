import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Dropdown({ items, onSelect, selectedItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item, index) => {
    onSelect(item);
    toggleDropdown();
  };

  console.log(items);

  console.log("items", items);

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center justify-between w-full border rounded-lg h-10"
      >
        <button className="inline-flex justify-start w-full px-2 pr-8 py-1 text-sm font-medium text-[#103ADC]  bg-white rounded-md">
          {selectedItem}
        </button>
        <span
          className={`transition-all duration-300 absolute right-2 z-[200] text-[#103ADC] ${
            isOpen ? "-rotate-180 " : ""
          }`}
        >
          <FaChevronDown />
        </span>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-full z-[9999] overflow-y-auto scrollbar-thumb-[#103ADC] scrollbar-track-gray-200 scrollbar-thin scrollbar-thumb-rounded-full bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={item}
                href="#"
                onClick={() => handleItemClick(item, index)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 cursor-pointer ${
                  selectedItem === item
                    ? "bg-[#103ADC] text-white"
                    : "bg-white text-black"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
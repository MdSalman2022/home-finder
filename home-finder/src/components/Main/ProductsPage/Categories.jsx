import React from "react";
import wallart from "@/assets/categories/wallart.jpg";
import accents from "@/assets/categories/accents.jpg";
import baskets from "@/assets/categories/baskets.jpg";
import candles from "@/assets/categories/candles.jpg";
import curtains from "@/assets/categories/curtains.jpg";
import fauxplants from "@/assets/categories/plants.jpg";
import handmade from "@/assets/categories/handmade.jpg";
import lighting from "@/assets/categories/lighting.jpg";
import mirrors from "@/assets/categories/mirrors.jpg";
import pillows from "@/assets/categories/pillows.jpg";
import planters from "@/assets/categories/planters.jpg";
import rugs from "@/assets/categories/rugs.jpg";
import throws from "@/assets/categories/throws.jpg";
import vases from "@/assets/categories/vases.jpg";
import wallpaper from "@/assets/categories/wallpaper.jpg";
import shelves from "@/assets/categories/shelves.jpg";

const Categories = () => {
  const categories = [
    {
      name: "Wall Art",
      img: wallart,
      bg: "#E9FCF6",
      text: "#119C75",
    },
    {
      name: "Home Accents",
      img: accents,
      bg: "#FFF2F9",
      text: "#FF43A2",
    },
    {
      name: "Rugs",
      img: rugs,
      bg: "#F7F0FE",
      text: "#802FDE",
    },
    {
      name: "Faux Plants",
      img: fauxplants,
      bg: "#F2F7FF",
      text: "#0067FB",
    },
    {
      name: "Mirrors",
      img: mirrors,
      bg: "#FEF9E6",
      text: "#DAAB00",
    },
    {
      name: "Curtains",
      img: curtains,
      bg: "#E5F5FA",
      text: "#3A506B",
    },
    {
      name: "Pillows",
      img: pillows,
      bg: "#FFE7D9",
      text: "#6F5151",
    },
    {
      name: "Floating Shelves",
      img: shelves,
      bg: "#D8E3E7",
      text: "#4F7178",
    },
    {
      name: "Vases",
      img: vases,
      bg: "#F0F3F9",
      text: "#475A77",
    },
    {
      name: "Lighting",
      img: lighting,
      bg: "#DDEBF5",
      text: "#3E6379",
    },
    {
      name: "Planters",
      img: planters,
      bg: "#F7E6E2",
      text: "#9A694E",
    },
    {
      name: "Throws",
      img: throws,
      bg: "#EAE8E1",
      text: "#7C7B6D",
    },
    {
      name: "Baskets & Bins",
      img: baskets,
      bg: "#E9F3F0",
      text: "#4E6A69",
    },
    {
      name: "Candles",
      img: candles,
      bg: "#FFE4F1",
      text: "#955272",
    },
    {
      name: "Wallpaper",
      img: wallpaper,
      bg: "#F9EFE9",
      text: "#8F7A6D",
    },
    {
      name: "Handmade Decor",
      img: handmade,
      bg: "#F3E9F4",
      text: "#7A6D80",
    },
  ];

  return (
    <div className="flex flex-col gap-5 py-20 px-5">
      <div>
        <p className="text-4xl text-slate-600 font-bold pb-5">
          Shop top categories in decor
        </p>
        <hr className="rounded-full h-1 bg-slate-600 w-60" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-5">
        {categories.map((category, index) => (
          <div
            className={`flex flex-col cursor-pointer justify-center items-center gap-2 p-5 border rounded-xl `}
            key={index}
            style={{
              backgroundColor: category.bg,
              color: category.text,
            }}
          >
            <img
              className="max-h-32 w-40 object-contain object-top p-5"
              src={category.img}
              alt=""
            />
            <p className="text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

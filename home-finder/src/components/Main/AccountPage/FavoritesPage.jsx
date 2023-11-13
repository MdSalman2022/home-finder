import React, { useContext } from "react";
import data from "@/assets/products.json";
import ProductCard from "../ProductsPage/ProductCard";
import HouseCard from "../Home/HouseCard";
import { StateContext } from "@/contexts/StateProvider";

const FavoritesPage = () => {
  const { allHouse } = useContext(StateContext);
  return (
    <div className="container-sm mx-auto min-h-[80vh] space-y-10">
      <div className="flex flex-col">
        <p className="text-4xl font-semibold">Favorite Products:</p>
        <div className="md:grid md:grid-cols-3 2xl:grid-cols-4 gap-5">
          {data?.slice(0, 10)?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-4xl font-semibold">Favorite Properties:</p>
        <div className="md:grid md:grid-cols-3 gap-5">
          {allHouse?.slice(0, 5)?.map((house, index) => (
            <div key={index}>
              <HouseCard house={house} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;

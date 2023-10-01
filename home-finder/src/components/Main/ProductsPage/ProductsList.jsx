import React from "react";
import data from "@/assets/products.json";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  console.log("data", data);
  return (
    <div className="px-5">
      <p className="text-3xl font-semibold py-2">Latest products in store</p>
      <div className="md:grid md:grid-cols-3 2xl:grid-cols-5 gap-5">
        {data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

import React, { useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { StateContext } from "@/contexts/StateProvider";

const ProductsList = () => {
  const { products } = useContext(StateContext);

  const [searchKey, setSearchKey] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);

  console.log("products", products);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("searchKey", searchKey);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/products/searchProducts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ searchKey }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log("data", data);
      setSearchProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  console.log("searchProducts", searchProducts);

  return (
    <div className="px-5">
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-between gap-2"
      >
        <input
          type="text"
          className="input-box h-12 w-full rounded-lg"
          placeholder="Search decor product"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="primary-btn h-12 flex items-center rounded-lg">
          Search
        </button>
      </form>
      <p className="text-3xl font-semibold py-2">Latest products in store</p>
      <div className="md:grid md:grid-cols-3 2xl:grid-cols-5 gap-5">
        {searchProducts?.length > 0
          ? searchProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          : products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductsList;

import Categories from "@/components/Main/ProductsPage/Categories";
import HeroSection from "@/components/Main/ProductsPage/HeroSection";
import ProductsList from "@/components/Main/ProductsPage/ProductsList";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="container-lg mx-auto">
        <Categories />
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductsPage;

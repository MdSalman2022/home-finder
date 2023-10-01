import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const [like, setLike] = useState(false);

  const handleMouseEnter = () => {
    setLike(true);
  };

  const handleMouseLeave = () => {
    setLike(false);
  };
  const handleClick = () => {
    setLike(!like);
  };

  return (
    <div className="p-3 rounded-2xl shadow-md flex flex-col items-start w-full">
      <span className="bg-gray-100 w-full flex justify-center">
        <img className="object-cover" src={product?.img} alt="" />
      </span>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold">{product?.price}</p>
          <p className="font-medium">{product?.name}</p>
        </div>
        <span
          className="w-10 h-10 rounded-full shadow-lg shadow-red-100 bg-white flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          {like ? (
            <AiFillHeart className="text-red-600" />
          ) : (
            <AiOutlineHeart className="text-red-600" />
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Home/ProductCard";

const Favorite = () => {
  const { favorite } = useSelector((s) => s);
  return (
    <div className="flex justify-around flex-wrap">
      {favorite.map((el) => (
        <ProductCard el={el} />
      ))}
    </div>
  );
};

export default Favorite;

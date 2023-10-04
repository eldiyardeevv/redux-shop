import { useDispatch, useSelector } from "react-redux";
import { data } from "../../components/data";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const { product } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "DATA", payload: data });
  }, []);
  // console.log(product);
  // console.log(basket);
  return (
    <div className="flex flex-wrap justify-around">
      {product.map((el) => (
        <ProductCard el={el} />
      ))}
    </div>
  );
};
// BsFillBasketFill
export default Home;

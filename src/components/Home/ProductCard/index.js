import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBasketFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { addBasket, addFavorite } from "../../../redux/actions";

const ProductCard = ({ el }) => {
  const { basket, value } = useSelector((s) => s);
  let addbasket = basket.some((some) => some.id === el.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return el.title.includes(value) ? (
    <div class="max-w-sm my-[30px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={el.image} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {el.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {el.description}
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {el.price}$
        </a>
        {addbasket ? (
          <button
            onClick={() => navigate("/basket")}
            type="button"
            class="text-white ml-[20px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            {/* <Link to={"/basket"}> */}
            <BsFillBasketFill />
            {/* </Link> */}
          </button>
        ) : (
          <button
            onClick={() => dispatch(addBasket(el, basket))}
            type="button"
            class="text-white ml-[20px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Basket
          </button>
        )}
        <button
          onClick={() => dispatch(addFavorite(el))}
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          <PiHeartStraightDuotone />
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProductCard;

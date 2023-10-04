import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_BASKET, DEC_COUNT, DEL_BASKET } from "../../../redux/actionTyoe";
import { HiPlus } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";
import { addBasket, decBasket, delBasket } from "../../../redux/actions";

const BasketCard = ({ el }) => {
  const { basket, value } = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <tr class="bg-white dark:bg-gray-800">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img width={150} src={el.image} alt="" />
      </th>
      <td class="px-6 py-4">{el.title}</td>
      <button
        onClick={() => dispatch(decBasket(el))}
        type="button"
        class="text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <FiMinus />
      </button>

      <td class="px-6 py-4">{el.count}</td>
      <button
        onClick={() => dispatch(addBasket(el, basket))}
        type="button"
        class="text-white mt-[80px]  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <HiPlus />
      </button>

      <td class="px-6 py-4">{el.price * el.count}$</td>
      <td class="px-6 py-4">
        <button
          onClick={() => dispatch(delBasket(basket, el))}
          type="button"
          class="text-gray-900  bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default BasketCard;

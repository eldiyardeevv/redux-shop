import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  const total = basket.reduce((acc, el) => {
    return acc + el.count * el.price;
  }, 0);
  // console.log(basket);
  return basket.length === 0 ? (
    <div className="flex justify-center mt-[50px]">
      <div
        class="flex items-center w-[800px]   flex justify-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-500"
        role="alert"
      >
        <svg
          class="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Danger alert!</span> Change a few things up
          and try submitting again.
        </div>
      </div>
    </div>
  ) : (
    <div class="relative pb-[100px] flex justify-center pt-[40px] overflow-x-auto">
      <table class="w-[800px] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              image
            </th>
            <th scope="col" class="px-6 py-3">
              product name
            </th>
            <th scope="col" class="px-6 py-3">
              count
            </th>
            <th scope="col" class="px-6 py-3">
              price
            </th>
          </tr>
        </thead>
        <tbody>
          {basket.map((el) => (
            <BasketCard el={el} />
          ))}
        </tbody>
      </table>
      <div className="w-[200px] h-[80px] mt-[90px] p-[15px] bg-[grey] rounded-[10px] ml-[40px]">
        <h1 className="text-[white]">ИТОГИ:{total}$</h1>
      </div>
    </div>
  );
};

export default Basket;

import { useSelector } from "react-redux";
import {
  ADD_BASKET,
  ADD_TO_FAV,
  DEC_COUNT,
  DEL_BASKET,
  SEARCH,
} from "./actionTyoe";
import { Value } from "sass";

export const delBasket = (basket, item) => {
  localStorage.setItem(
    "basket",
    JSON.stringify([...basket.filter((el) => el.id !== item.id)])
  );
  return { type: DEL_BASKET, payload: item };
};

export const decBasket = (el) => {
  return { type: DEC_COUNT, payload: el };
};

export const addBasket = (el, basket) => {
  localStorage.setItem(
    "basket",
    JSON.stringify([...basket, { ...el, count: 1 }])
  );
  return { type: ADD_BASKET, payload: el };
};

export const addFavorite = (el) => {
  return { type: ADD_TO_FAV, payload: el };
};

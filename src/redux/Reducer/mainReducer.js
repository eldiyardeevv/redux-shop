import {
  ADD_BASKET,
  ADD_TO_FAV,
  DATA,
  DEC_COUNT,
  DEL_BASKET,
  SEARCH,
} from "../actionTyoe";

let INITState = {
  product: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorite: [],
  value: "",
};

export const Reducer = (state = INITState, action) => {
  switch (action.type) {
    case DATA:
      return { ...state, product: action.payload };
    case ADD_BASKET:
      let foundBasket = state.basket.find((el) => el.id === action.payload.id);
      if (foundBasket) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === foundBasket.id ? { ...el, count: el.count + 1 } : el
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, count: 1 }],
        };
      }
    case DEL_BASKET:
      return {
        ...state,
        basket: [...state.basket.filter((el) => el.id !== action.payload.id)],
      };
    case DEC_COUNT:
      return {
        ...state,
        basket: state.basket.map((el) => {
          if (el.id === action.payload.id && el.count > 1) {
            return { ...el, count: el.count - 1 };
          } else {
            return el;
          }
        }),
      };
    case ADD_TO_FAV:
      let foundFavorite = state.favorite.find(
        (el) => el.id === action.payload.id
      );
      if (foundFavorite) {
        return {
          ...state,
          favorite: state.favorite.filter((el) => el.id !== action.payload.id),
        };
      } else {
        return { ...state, favorite: [...state.favorite, action.payload] };
      }
    case SEARCH: {
      return { ...state, value: action.payload };
    }

    default:
      return state;
  }
};

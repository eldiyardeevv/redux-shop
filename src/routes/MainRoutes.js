import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./../components/Home/Home";
import Basket from "./../components/Basket/Basket";
import Favorite from "./../components/Favorite/Favorite";

const MainRoutes = () => {
  let PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/basket", element: <Basket />, id: 2 },
    { link: "/favorite", element: <Favorite />, id: 3 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

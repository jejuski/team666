import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Home from "../components/home/Home";
import List from "../components/list/List";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/home" element={<Home />} />
      <Route path="/list" element={<List />} exact />
    </Routes>
  );
};

export default Pages;

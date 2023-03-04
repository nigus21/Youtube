import React from "react";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router";
import { Register } from "../Components/Register";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_us" element={<Aboutus />} />
        <Route path="/How_It_works" element={<HowItWorks />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Pages;

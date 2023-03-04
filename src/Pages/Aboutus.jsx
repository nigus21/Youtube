import React from "react";
import social from "./../recource/social.png";
import "./About.css";

const Aboutus = () => {
  return (
    <div className="cont">
      <div className="imgCont">
        <img src={social} alt="about us" />
      </div>
      <div className="title">
        <h1>
          Welcome to <br /> <span> kings's land </span>
        </h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas
          ducimus, eius minus vel, nisi sint, odit modi similique et nulla iusto
          temporibus dolores saepe. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt quas ducimus, eius minus vel, nisi sint,
          odit modi similique et nulla iusto temporibus dolores saepe.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;

import React from "react";
import "./Home.css";
import money from "./../recource/money.png";

const Home = () => {
  return (
    <div className="home">
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
        <div>
          <button className="signup btn">Read more</button>
        </div>
      </div>
      <div>
        <img className="image" src={money} alt={"this is the logo"} />
      </div>
    </div>
  );
};

export default Home;

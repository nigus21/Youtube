import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { useState } from "react";
import "./Loginandreg.css";

const Loginandreg = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Loginandreg;

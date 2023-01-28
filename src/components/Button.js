import React from "react";

// Importing the style file
import "../css/Button.css";

// Creating the button component
const Button = ({ inputValue, doubleWidth }) => {
  return (
    <input
      type="button"
      value={inputValue}
      className={`btn ${doubleWidth ? "double" : ""}`}
    />
  );
};

// exporting the button
export default Button;

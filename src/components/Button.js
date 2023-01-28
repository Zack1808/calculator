import React, { forwardRef } from "react";

// Importing the style file
import "../css/Button.css";

// Creating the button component
const Button = forwardRef(({ inputValue, doubleWidth, click }, ref) => {
  if (ref)
    return (
      <input
        type="button"
        value={inputValue}
        ref={ref}
        className={`btn ${doubleWidth ? "double" : ""}`}
      />
    );

  return (
    <input
      type="button"
      value={inputValue}
      className={`btn ${doubleWidth ? "double" : ""}`}
    />
  );
});

// exporting the button
export default Button;

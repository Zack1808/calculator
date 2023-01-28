import React from "react";

// Importing costume made components
import Button from "./Button";

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {
  return (
    <div className="app-container">
      <div className="calculator-container">
        <div className="display"></div>
        <div className="buttons">
          <Button inputValue="AC" doubleWidth />
          <Button inputValue="C" />
          <Button inputValue="/" />
          <Button inputValue="1" />
          <Button inputValue="2" />
          <Button inputValue="3" />
          <Button inputValue="*" />
          <Button inputValue="4" />
          <Button inputValue="5" />
          <Button inputValue="6" />
          <Button inputValue="+" />
          <Button inputValue="7" />
          <Button inputValue="8" />
          <Button inputValue="9" />
          <Button inputValue="-" />
          <Button inputValue="." />
          <Button inputValue="0" />
          <Button inputValue="=" doubleWidth />
        </div>
      </div>
    </div>
  );
};

// Exporting the App component
export default App;

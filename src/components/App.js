import React, { useRef } from "react";

// Importing costume made components
import Button from "./Button";

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {
  // Defining references to the buttons
  const Cref = useRef();
  const divisionRef = useRef();
  const multiplicationRef = useRef();
  const addRef = useRef();
  const deductRef = useRef();
  const decimalRef = useRef();
  const equalRef = useRef();
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();
  const sixRef = useRef();
  const sevenRef = useRef();
  const eightRef = useRef();
  const nineRef = useRef();
  const zeroRef = useRef();

  return (
    <div className="app-container">
      <div className="calculator-container">
        <div className="display"></div>
        <div className="buttons">
          <Button inputValue="AC" doubleWidth />
          <Button inputValue="C" ref={Cref} />
          <Button inputValue="/" ref={divisionRef} />
          <Button inputValue="1" ref={oneRef} />
          <Button inputValue="2" ref={twoRef} />
          <Button inputValue="3" ref={threeRef} />
          <Button inputValue="*" ref={multiplicationRef} />
          <Button inputValue="4" ref={fourRef} />
          <Button inputValue="5" ref={fiveRef} />
          <Button inputValue="6" ref={sixRef} />
          <Button inputValue="+" ref={addRef} />
          <Button inputValue="7" ref={sevenRef} />
          <Button inputValue="8" ref={eightRef} />
          <Button inputValue="9" ref={nineRef} />
          <Button inputValue="-" ref={deductRef} />
          <Button inputValue="." ref={decimalRef} />
          <Button inputValue="0" ref={zeroRef} />
          <Button inputValue="=" ref={equalRef} doubleWidth />
        </div>
      </div>
    </div>
  );
};

// Exporting the App component
export default App;

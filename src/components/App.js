import React, { useRef, useReducer, useEffect } from "react";

// Importing costume made components
import Button from "./Button";

// Importing the style file
import "../css/App.css";

// importing helpers and reducer
import { formatOperand } from "../helpers/formatOperand";
import { operationReducer, ACTIONS } from "../reducers/opReducer";
import { detectKeydown } from "../helpers/detectKeyDown";
import { debounce } from "../helpers/debounce";

// Creating the App component
const App = () => {
  // Creating a reducer variable that will contain all the states returned from the operationReducer
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    operationReducer,
    {}
  );

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

  //   Functions start
  const addNumber = (digit) => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  };

  const mathOperation = (op) => {
    console.log(op);
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { op } });
  };

  const clearAll = (info) => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  const deleteLast = (info) => {
    dispatch({ type: ACTIONS.DELETE_DIGIT });
  };

  const result = (info) => {
    dispatch({ type: ACTIONS.EVALUATE });
  };

  // Adding an event listener that will listen for key strokes
  useEffect(() => {
    // Ref list for currents
    const refs = [
      divisionRef.current,
      multiplicationRef.current,
      addRef.current,
      deductRef.current,
      decimalRef.current,
      oneRef.current,
      twoRef.current,
      threeRef.current,
      fourRef.current,
      fiveRef.current,
      sixRef.current,
      sevenRef.current,
      eightRef.current,
      nineRef.current,
      zeroRef.current,
    ];
    document.addEventListener(
      "keydown",
      (e) => {
        debounce(
          detectKeydown(e, dispatch, refs, Cref.current, equalRef.current)
        );
      },
      false
    );
  }, []);

  return (
    <div className="app-container">
      <div className="calculator-container">
        <div className="display">
          <div className="previous-operand">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="current-operand">{formatOperand(currentOperand)}</div>
        </div>
        <div className="buttons">
          <Button inputValue="AC" click={clearAll} clear doubleWidth />
          <Button inputValue="C" click={deleteLast} del ref={Cref} />
          <Button inputValue="/" click={mathOperation} ref={divisionRef} />
          <Button inputValue="1" click={addNumber} digit ref={oneRef} />
          <Button inputValue="2" click={addNumber} digit ref={twoRef} />
          <Button inputValue="3" click={addNumber} digit ref={threeRef} />
          <Button
            inputValue="*"
            click={mathOperation}
            ref={multiplicationRef}
          />
          <Button inputValue="4" click={addNumber} digit ref={fourRef} />
          <Button inputValue="5" click={addNumber} digit ref={fiveRef} />
          <Button inputValue="6" click={addNumber} digit ref={sixRef} />
          <Button inputValue="+" click={mathOperation} ref={addRef} />
          <Button inputValue="7" click={addNumber} digit ref={sevenRef} />
          <Button inputValue="8" click={addNumber} digit ref={eightRef} />
          <Button inputValue="9" click={addNumber} digit ref={nineRef} />
          <Button inputValue="-" click={mathOperation} ref={deductRef} />
          <Button inputValue="." click={addNumber} digit ref={decimalRef} />
          <Button inputValue="0" click={addNumber} equal ref={zeroRef} />
          <Button inputValue="=" click={result} ref={equalRef} doubleWidth />
        </div>
      </div>
    </div>
  );
};

// Exporting the App component
export default App;

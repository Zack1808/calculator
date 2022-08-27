import React, { useReducer, useState } from 'react';

// Importing costumer made components
import { DigitButton } from './DigitButton';
import { OperationButton } from './OperationButton';

// importing the stylesheet
import '../css/App.css';

export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: 'choose operation',
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: 'evaluate'
}

// creating the reducer function
const reducer = (state, { type, payload }) => {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            if(payload.digit === "0" && state.currentOperand === "0") return state;
            if(payload.digit === "." && state.currentOperand.includes(".")) return state;
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`
            }
    }
}

// Creating the App component
const App = () => {

    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {}); 

    return (
        <div className="container">
            <div className="calculator-grid">
                <div className="output">
                    <div className="previous-operand">{previousOperand} {operation}</div>
                    <div className="current-operand">{currentOperand}</div>
                </div>
                <button className="span-two">AC</button>
                <button>DEL</button>
                <OperationButton operation="÷" dispatch={dispatch} />
                <DigitButton digit="1" dispatch={dispatch} />
                <DigitButton digit="2" dispatch={dispatch} />
                <DigitButton digit="3" dispatch={dispatch} />
                <OperationButton operation="*" dispatch={dispatch} />
                <DigitButton digit="4" dispatch={dispatch} />
                <DigitButton digit="5" dispatch={dispatch} />
                <DigitButton digit="6" dispatch={dispatch} />
                <OperationButton operation="+" dispatch={dispatch} />
                <DigitButton digit="7" dispatch={dispatch} />
                <DigitButton digit="8" dispatch={dispatch} />
                <DigitButton digit="9" dispatch={dispatch} />
                <OperationButton operation="-" dispatch={dispatch} />
                <DigitButton digit="." dispatch={dispatch} />
                <DigitButton digit="0" dispatch={dispatch} />
                <button className='span-two'>=</button>
            </div>
        </div>
    );
};

export default App;
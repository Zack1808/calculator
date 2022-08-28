import React, { useReducer, useState } from 'react';

// Importing costumer made components
import { DigitButton } from './DigitButton';
import { OperationButton } from './OperationButton';

// Importing the helper functions
import { formatOperand } from '../helpers/FormatOperand';
import { operationReducer } from '../reducers/OperationReducer'
import { ACTIONS } from '../reducers/OperationReducer';

// importing the stylesheet
import '../css/App.css';

// Creating the App component
const App = () => {

    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(operationReducer, {}); 

    return (
        <div className="container">
            <div className="calculator-grid">
                <div className="output">
                    <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
                    <div className="current-operand">{formatOperand(currentOperand)}</div>
                </div>
                <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR})}>AC</button>
                <button onClick={() => {dispatch({ type: ACTIONS.DELETE_DIGIT, })}}>DEL</button>
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
                <button className='span-two' onClick={() => {dispatch({type: ACTIONS.EVALUATE, })}}>=</button>
            </div>
        </div>
    );
};

export default App;
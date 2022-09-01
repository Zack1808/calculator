// Importing the action variable to add the action needed to the button
import { ACTIONS } from '../reducers/OperationReducer'

// Function that will handle the key presses
export const detectKeydown = (e, dispatch) => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operations = ['/', '*', '-', '+'];
    if(numbers.includes(e.key)) {
        const digit = e.key;
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
    }
    if(operations.includes(e.key)) {
        let operation = e.key;
        if(operation === '/') operation = "÷";
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
    }
    if(e.key === "Backspace") {
        dispatch({ type: ACTIONS.DELETE_DIGIT, });
    }
    if(e.key === "Enter") {
        dispatch({type: ACTIONS.EVALUATE, });
    }
} 
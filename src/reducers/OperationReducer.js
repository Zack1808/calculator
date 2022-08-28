// Importing the helper functions
import { evaluate } from '../helpers/CalculationHelper';

// Creating a variable that holds all the possible cases the calculator App can use 
export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: 'choose operation',
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: 'evaluate'
}

// Creating the reducer function
export const operationReducer = (state, { type, payload }) => {
    switch(type) {

        // Action that will add a digit to the calculator screen
        case ACTIONS.ADD_DIGIT:

            // Will clear out the result of the last calculation and input another number
            if(state.overwrite) return { ...state, currentOperand: payload.digit, overwrite: false}

            // Prevents user from entering more than one 0 in case 0 is the only number displayed
            if(payload.digit === "0" && state.currentOperand === "0") return state;

            // Prevents user from entering more than one period for decimal numbers
            if(payload.digit === "." && state.currentOperand.includes(".")) return state;

            // Returns the current number to the display
            return { ...state,currentOperand: `${state.currentOperand || ""}${payload.digit}`}

        // Action that will display the operand on the screen
        case ACTIONS.CHOOSE_OPERATION:

            // Prevents user from entering an operation sign in case no operand was entered
            if(state.currentOperand == null && state.previousOperand == null) return state;

            // Changes the operation sign in case the second operand was not entered
            if(state.currentOperand == null)  return { ...state, operation: payload.operation, }

            // Enters the operation sign in case first operand was entered
            if(state.previousOperand == null) return { ...state, operation: payload.operation, previousOperand: state.currentOperand, currentOperand: null}

            // Adds operation sign to the result of the previous calculation for and sets the result as the firs operand
            return { ...state, previousOperand: evaluate(state), operation: payload.operation, currentOperand: null }

        // Action that clears the whole calculator display
        case ACTIONS.CLEAR:
            return {}

        // Action that removes one digit from the current operand being typed in
        case ACTIONS.DELETE_DIGIT:

            // Checks if the result of the previous calculation is displayed, and if yes, removes it
            if(state.overwrite) return { ...state, overwrite: false, currentOperand: null }

            // Returns the empty object if no operand was entered in the calculator
            if(state.currentOperand == null) return state;

            // Removes the digit completely in case it is a single digit number
            if(state.currentOperand.length === 1) return {...state, currentOperand: null}

            // Removes the last digit of the number
            return { ...state, currentOperand: state.currentOperand.slice(0, -1) }

        // Action that will calculate the result of the operation between the two operands
        case ACTIONS.EVALUATE:

            // Checks if the operands and operation were entered, and if not, will not proceed with the calculation, instead will return the current entered state of the calculator
            if(state.operation === null || state.currentOperand == null || state.previousOperand == null) return state

            // Will perform the calculation of the two operands
            return { ...state, overwrite: true, previousOperand: null, operation: null, currentOperand: evaluate(state) }
    }
}
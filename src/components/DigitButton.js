// Importing the action variable to add the action needed to the button
import { ACTIONS } from '../reducers/OperationReducer'

// Creating a button that will contain the digits of the calculator
export const DigitButton = ({dispatch, digit, id}) => {
    return <button id={id} onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
}
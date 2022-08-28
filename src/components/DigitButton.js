import { ACTIONS } from '../reducers/OperationReducer'

export const DigitButton = ({dispatch, digit}) => {
    return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
}
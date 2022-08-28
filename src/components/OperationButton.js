// Importing the action variable to add the action needed to the button
import { ACTIONS } from '../reducers/OperationReducer'

// Creating the button that will contain the operations identifier
export const OperationButton = ({dispatch, operation}) => {
    return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
}
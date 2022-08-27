import { ACTIONS } from './App'

export const OperationButton = ({dispatch, digit}) => {
    return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { digit } })}>{digit}</button>
}
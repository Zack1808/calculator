// Importing the action variable to add the action needed to the button
import { ACTIONS } from "../reducers/opReducer";

// Function that will handle the key presses
export const detectKeydown = (e, dispatch, refs, delKey, equal) => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operations = ["/", "*", "-", "+"];
  if (numbers.includes(e.key)) {
    const digit = e.key;
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
    refs.forEach((ref) => {
      if (ref.value === e.key) ref.focus();
    });
  }
  if (operations.includes(e.key)) {
    let op = e.key;
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { op } });
    refs.forEach((ref) => {
      if (ref.value === e.key) ref.focus();
    });
  }
  if (e.key === "Backspace") {
    dispatch({ type: ACTIONS.DELETE_DIGIT });
    delKey.focus();
  }
  if (e.key === "Enter") {
    dispatch({ type: ACTIONS.EVALUATE });
    equal.focus();
  }
};

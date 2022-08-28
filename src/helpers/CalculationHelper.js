// Funciton that will calculate the result between the two operands
export const evaluate = ({ currentOperand, previousOperand, operation }) => {

    // Converting the operands into numbers
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand); 

    // Checking if numbers were entered as operands
    if(isNaN(prev) || isNaN(current)) return "";
    let computation = "";

    // Checking what operation must be performed to the operands, then performing the correct one
    switch(operation){
        case "+":
            computation = prev + current;
            break;
        case "-":
            computation = prev - current;
            break;
        case "*":
            computation = prev * current;
            break;
        case "÷":
            computation = prev / current;
    }

    // Returning the result of the operation
    return computation.toString();
}
// Creating a formater mask which will tell the calculator how the number should be displayed
const INTEGER_FORMATER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
});

// Function that will perform the formatation of the number
export const formatOperand = (operand) => {

    // Checking if the operand was entered, if not, skipping the rest of the function
    if(operand == null) return;

    // Spliting the integer and decimal part of the number entered
    const [integer, decimal] = operand.split('.');

    // Returning only the formated integer number in case the number did not have a decimal
    if(decimal == null) return INTEGER_FORMATER.format(integer);

    // Returning the formated integer part of the number with the attached decimal part
    return `${INTEGER_FORMATER.format(integer)}.${decimal}`;
}
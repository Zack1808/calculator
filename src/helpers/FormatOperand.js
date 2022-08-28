import React from 'react';

const INTEGER_FORMATER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
});

export const formatOperand = (operand) => {
    if(operand == null) return;
    const [integer, decimal] = operand.split('.');
    if(decimal == null) return INTEGER_FORMATER.format(integer);
    return `${INTEGER_FORMATER.format(integer)}.${decimal}`;
}
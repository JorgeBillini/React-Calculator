/* 
NOTES:
DIRECT STATE MANIUPLATION
AC CLEARS ALL DATA ON THE SCREEN
C CLEAR CURRENTNUM 
. ADD A DOT TO THE CURRENTNUM

FUNCTIONAL LOGIC:
= PERFORMS OPERATIONS
± MULTIPLIES  by -1 or + 
+, -, *, /

*/
const Operation = {};

const add = (num1, num2) =>  num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const subtract = (num1, num2) => num1 - num2;

const divide = (num1, num2) => (num1 / num2);

Operation.percentage = (num) => num / 100;

Operation.convertPos_Neg = (num) => num * -1;

Operation.result = (num1, num2, opStr) => {
    if (opStr === '*') {
        return multiply(num1, num2)
    } else if (opStr === '+') {
        return add(num1, num2);
    } else if (opStr === '-') {
        return subtract(num1, num2);
    } else if (opStr === '/') {
        return divide(num1, num2);
    }
}

export {
    Operation
};


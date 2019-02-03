/*
AC CLEARS ALL DATA ON THE SCREEN
C CLEAR CURRENTNUM 
. ADD A DOT TO THE CURRENTNUM
= PERFORMS OPERATIONS
_____________
+- 
MULTIPLIES  by -1 or + 
. 
= 
Take num from state and perform operation 

*/
const operation = {};

const add = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const subtract = (num1, num2) => num1 - num2;

const divide = (num1, num2) => (num1 / num2);

operation.percentage = (num) => num / 100;

operation.convertPos_Neg = (num) => num * -1;

operation.result = (num1, num2, opStr) => {
    if (opStr === '*') {
        return multiply(num1, num2)
    } else if (opStr === '+') {
        return add(num1, num2);
    } else if (opStr === '-') {
        return substract(num1, num2);
    } else if (opStr === '/') {
        return divide(num1, num2);
    }
}

export default operation;
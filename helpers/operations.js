const add = (num1, num2) =>  num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const subtract = (num1, num2) => num1 - num2;

const divide = (num1, num2) => (num1/num2);

const percentage = (num) => num / 100;

const convertPos_Neg = (num) => num * -1;

console.log(add(1,2), 'add')
console.log(multiply(5,10), 'multiply')
console.log(subtract(200,10), 'subtract')
console.log(percentage(200), 'percent')
console.log(convertPos_Neg(69), 'convert')
console.log(convertPos_Neg(-20), 'convert')

// export {add, multiply, subtract, divide, convertPos_Neg};
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

operation.result = (num1,num2,opStr) =>{
    if (opStr === '*'){
        return multiply(num1,num2)
    }
   else if (opStr === '+'){
        return add(num1,num2);
    }
    else if (opStr === '-'){
        return substract(num1,num2);
    }
    else if (opStr === '/'){
        return divide(num1,num2);
    }
}


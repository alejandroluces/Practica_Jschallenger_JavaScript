// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), 
// return true. Otherwise, return false.

// Escribe una función que tome un número (a) como argumento. Si a es un número entero (no tiene lugar decimal), devuelve verdadero. 
// De lo contrario, devuelve falso.

function myFunction(a){

    return Number.isInteger(a)

}


console.log(myFunction(4));
console.log(myFunction(1.123));

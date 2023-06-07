// Write a function that takes a number (a) as argument. 
// Round a to the 2nd digit after the decimal point. 
// Return the rounded number

// Escribe una función que tome un número (a) como argumento. 
// Redondea a al segundo dígito después del punto decimal. 
// Devolver el número redondeado


function myFunction(a){

    return Number(a.toFixed(2)) 

}

console.log(myFunction(2.12397));
console.log(myFunction(3.136));
console.log(myFunction(1.12397));
console.log(myFunction(26.1379));


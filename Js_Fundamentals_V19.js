// Write a function that takes a number (a) as argument. 
// Split a into its individual digits and return them in an array. 
// Tipp: you might want to change the type of the number for the splitting

// Escribe una función que tome un número (a) como argumento. 
// Divide a en sus dígitos individuales y devuélvelos en una matriz. 
// Consejo: es posible que desee cambiar el tipo de número para la división



function myFunction (a) {
    const cadenaNumero = String(a);
    const arrayDigitos = Array.from(cadenaNumero, Number);
    return arrayDigitos;




}
console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));



// Write a function that takes a string as argument. 
// Extract the last 3 characters from the string. Return the result

// Escribe una función que tome una cadena como argumento. 
// Extraiga los últimos 3 caracteres de la cadena. Devolver el resultado

function myFunction(str) {

return str.slice(-3)

}

console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));


// Write a function that takes a string (a) as argument. 
// Remove the first 3 characters of a. Return the result

// Escribe una función que tome una cadena (a) como argumento. 
// Elimina los 3 primeros caracteres de a. Devolver el resultado

function myFunction(a){

    return a.substring(3)

}


console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));


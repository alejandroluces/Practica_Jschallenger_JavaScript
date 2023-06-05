// Write a function that takes a string (a) as argument. 
// Get the first 3 characters of a. Return the result

// Escribe una función que tome una cadena (a) como argumento. 
// Obtenga los primeros 3 caracteres de a. Devolver el resultado

function myFunction(a) {

    return a.slice(0,3)
    
    }
    
    console.log(myFunction('abcdefg'));
    console.log(myFunction('1234'));
    console.log(myFunction('fgedcba'));
// Write a function that takes a string (a) as argument. 
// Remove the last 3 characters of a. Return the result

// Escribe una función que tome una cadena (a) como argumento. 
// Elimina los últimos 3 caracteres de a. Devolver el resultado


function myFunction(a) {

    return a.slice(0,-3)
    
    }
    
    console.log(myFunction('abcdefgh'));
    console.log(myFunction('1234'));
    console.log(myFunction('gedcba'));
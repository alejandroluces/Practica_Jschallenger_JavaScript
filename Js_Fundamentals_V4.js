// Write a function that takes a string (a) and a number (n) as argument. 
// Return the nth character of 'a'.

// Escribe una función que tome una cadena (a) y un número (n) como argumento. 
// Devuelve el carácter enésimo de 'a'.
/* 

Parámetros
indice
Un entero entre 0 y 1 menos que la longitud de la cadena. 
Si no se proporciona ningún indice charAt() utilizará 0.

*/

function myFunction (a, n){

    return a. charAt(n-1)
    
    }
    
    console.log(myFunction('abcd',1))
    console.log(myFunction('zyxbwpl',5))
    console.log(myFunction('gfedcba',3))
    
    
    
    

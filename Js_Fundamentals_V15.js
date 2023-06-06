// Write a function that takes two strings (a and b) as arguments. 
// Return the number of times a occurs in b.

// Escriba una función que tome dos cadenas (a y b) como argumentos. 
// Devuelve el número de veces que a ocurre en b.


function myFunction(a,b) {
   
    return b.split(a).length -1
}
console.log(myFunction('m', 'how many times does the character occur in this sentence?'));
console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
console.log(myFunction('?', 'how many times does the character occur in this sentence?'));
console.log(myFunction('z', 'how many times does the character occur in this sentence?'));


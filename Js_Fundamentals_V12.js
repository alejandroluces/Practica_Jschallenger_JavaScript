// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. 
// Then substract by c. Then multiply by d and divide by e. 
// Finally raise to the power of f and return the result. Tipp: mind the order.

// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos. 
// Suma a y b. Luego reste por c. Luego multiplique por d y divida por e. 
// Finalmente eleva a la potencia de f y devuelve el resultado. Consejo: cuidado con el orden.

function myFunction(a,b,c,d,e,f) {

    return ((a+b-c)*d/e)**f
    
    }
    
    console.log(myFunction(6,5,4,3,2,1)); 
    console.log(myFunction(6,2,1,4,2,3));
    console.log(myFunction(2,3,6,4,2,3));
    
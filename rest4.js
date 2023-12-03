/* Perform a code refactoring by using the Spread Operator. 
The output of the console.log must be the same.   */
function sum(...numbers) {
    let suma=0;
    for (i=0;i<numbers.length;i++) {
        suma= numbers[i]+suma;
    }
    return suma;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));
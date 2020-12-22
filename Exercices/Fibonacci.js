/*
Your mission is simple:

1. Develop a function that prints the first 100 numbers of the Fibonacci sequence by console. You can look up what the sequence is, but don't copy the code to solve it. 
2. Develop a function that performs the sum of all the even numbers in the sequence.

*/

function fibonacci(x) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < x; i++) {
    if (i === 0) {
      console.log(0);
    } else if (i === 1) {
      console.log(1);
    }else {
      let total = a + b;
      console.log(total);
      a = b;
      b = total;
   }
 }
}
fibonacci(100);


function sumEvenFibonacci (listOfFibonacciNumbers){
  var fibo = 218922995834555169026;
  var result = 0:
 for (var i = 1; i<=fibo; i++){
   result +=i;
 }
  console.log(result);
}
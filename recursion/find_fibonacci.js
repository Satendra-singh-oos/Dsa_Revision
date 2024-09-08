//itrative

function fibonacci(n) {
  let n0 = 0;
  let n1 = 1;
  if (n === 0) {
    return n0;
  }
  let i = 2;
  while (i <= n) {
    let temp = n0 + n1;

    n0 = n1;
    n1 = temp;
    i++;
  }

  return n1;
}

// console.log(fibonacci(9));

function fibonacciRecurssion(n) {
  //   if (n === 0) {
  //     return 0;
  //   }
  //   if (n === 1) {
  //     return 1;
  //   }

  if (n <= 1) {
    return n;
  }
  return fibonacciRecurssion(n - 1) + fibonacciRecurssion(n - 2);
}

console.log(fibonacciRecurssion(9));

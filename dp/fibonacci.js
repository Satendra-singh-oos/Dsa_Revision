function fib(n) {
  // if (n === 0) {
  //   return 0;
  // }
  // if (n === 1) {
  //   return 1;
  // }
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(20));
// memoization

function fibMemo(n) {
  let memo = {};

  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }

  memo[n] = fibMemo(n - 1) + fibMemo(n - 2);

  return memo[n];
}

console.log(fibMemo(20));

function fibTable(n) {
  if (n <= 1) {
    return n;
  }
  const table = Array(n + 1).fill(0);

  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}
console.log(fibTable(20));

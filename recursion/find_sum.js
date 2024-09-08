//itrative

function findSum(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum = sum + i;
    i++;
  }

  return sum;
}

console.log(findSum(5));

function findSumRecursion(n) {
  if (n == 1) {
    return n;
  }

  return n + findSumRecursion(n - 1);
}

console.log(findSumRecursion(5));

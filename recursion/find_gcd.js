/*
find gcd of two number

i/p= 42 and 18
o/p=6

 42 divisior are 1,2,3,6,7,14,21,42
 18 divisior are 1,2,3,6,9,18

*/

// itravtive and also withoud formula not optimized methord

function gcd(n, m) {
  let divOfN = [1];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      divOfN.push(i);
    }
  }

  let divOfM = [1];
  for (let i = 2; i <= m; i++) {
    if (m % i === 0) {
      divOfM.push(i);
    }
  }

  const commonDivisior = divOfM.filter((value) => divOfN.includes(value));

  return commonDivisior[commonDivisior.length - 1];
}

console.log(gcd(36, 60));

function gcdRecursion(m, n) {
  if (n == m) {
    return m;
  } else if (m > n) {
    return gcdRecursion(m - n, n);
  } else {
    return gcdRecursion(m, n - m);
  }
}

console.log(gcdRecursion(36, 60));

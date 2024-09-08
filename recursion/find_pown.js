//itratve

function powerOfN(base, exp) {
  let ans = 1;

  while (exp > 0) {
    ans = ans * base;
    exp--;
  }
  return ans;
}
console.log(powerOfN(3, 3));

//recursive

function powerOfNRecurssion(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * powerOfNRecurssion(base, exp - 1);
}

console.log(powerOfNRecurssion(2, 5));

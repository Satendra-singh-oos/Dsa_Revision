function countKey(key, arr) {
  let count = 0;

  let i = 0;
  while (i < arr.length) {
    if (arr[i] === key) {
      count++;
    }
    i++;
  }
  return count;
}

console.log(countKey(2, [1, 2, 3, 4, 2]));

function countKeyRecurssion(key, arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr[0] === key) {
    return 1 + countKeyRecurssion(key, arr.slice(1));
  } else {
    return countKeyRecurssion(key, arr.slice(1));
  }
}

// if interviwer dose not allow to use slice methrod
// function countKeyRecurssion(key, arr, index = 0) {
//   if (index >= arr.length) {
//     return 0;
//   }
//   return (arr[index] === key ? 1 : 0) + countKeyRecurssion(key, arr, index + 1);
// }

console.log(countKeyRecurssion(2, [1, 2, 3, 4, 2]));

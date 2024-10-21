/*

 -> merge sort exicute in 2 part breaking (until size of array is 1) and assambling  
  

 6,5,3,1,8,7,2,9

 6,5,3,1      8,7,2,4
 6,5  3,1    8,7  2,4
 6 5   3 1    8 7   2 4
 ----Now Compare ans assabmble ----
 5,6   1,3      7,8  4,2
 1,3,5,6        2,4,7,8
 1,2,3,5,6,7,8


 TC->On(log(n))
*/

// will write merge code first
function merge(left, right) {
  let result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}

function mergeSort(arr) {
  // break point
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle); // case in slice methord end value is not inclusive hene not includede
  const right = arr.slice(middle, arr.length);

  //   const leftSideArray = mergeSort(left);
  //   const rightSideArray = mergeSort(right);

  //   return merge(leftSideArray, rightSideArray);

  return merge(mergeSort(left), mergeSort(right));
}

let arr = [6, 5, 3, 1, 8, 7, 2, 9];

console.log(mergeSort(arr));

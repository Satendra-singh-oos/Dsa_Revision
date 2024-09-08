/*
 Given 
 Arr->[1,2,3,4,5]
 findMe=3
 currIndex=0;

 output if fount index of number else -1

*/
// ittrative

function firstOcc(arr, findMe, currIndex) {
  while (currIndex < arr.length) {
    if (arr[currIndex] === findMe) {
      return currIndex;
    }
    currIndex++;
  }
  return -1;
}

// const arr = [1, 2, 3, 4, 5];
// console.log(firstOcc(arr, 3, 0));

function firstOccRecursion(arr, findMe, currIndex) {
  //base case
  if (arr.length === currIndex) {
    return -1;
  }

  if (arr[currIndex] === findMe) {
    return currIndex;
  }

  return findVowelsRecursion(arr, findMe, currIndex + 1);
}

const arr1 = [1, 2, 3, 4, 5];
console.log(firstOcc(arr1, 5, 1));

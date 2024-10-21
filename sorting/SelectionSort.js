/*
Selection Sort
(in this short we will do the selection of  index not the value)


  2 , 6 , 4 , 1 , 5 , 3

  TC->  O(n^2)
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    //now swap

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

let arr = [2, 6, 4, 1, 5, 3];

console.log(selectionSort(arr));

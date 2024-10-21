/*
 Insertion sort

 -> we need to insert value so we need a temp box to store things
 -> in insertion sort we don't swap we shift it to + 1
 -> start from second postion cause 0 has nothing in left

 TC->  O(n^2)
  

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1; // past element

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = currentElement;
  }

  return arr;
}

let arr = [1, 6, 7, 4, 2, 9];

console.log(insertionSort(arr));

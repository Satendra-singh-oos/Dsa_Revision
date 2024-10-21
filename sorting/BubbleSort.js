/*
 Bubble short

 4,2,1,3
 2,4,1,3
 2,1,4,3
 2,1,3,4

 Again
 1,2,3,4

 What is bubble sort
 bubble means compare and swip it


  TC->  O(n^2)

*/

function bubbleSort(arr) {
  let isSwap; // for make sure in that case when there is only one swap needed so we dont traverse again in the array

  // why do while ? cause we need to run atleast one time to run so the best loop for such condition is dowhile
  do {
    isSwap = false; // asuming no swaping run

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwap = true;
      }
    }
  } while (isSwap);

  return arr;
}
let arr = [4, 3, 2, 1];

console.log(bubbleSort(arr));

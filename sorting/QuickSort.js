/*
Quick sort
(Ignore The Big)
herat of Quick sort is pivot point-> easy if we take right most point 
-> we will get low=0 and high=n-1 
-> let we assume pivote point last element
-> now we need 2 valiable one will stand at i=-1 index and other at j=0 index
-> compate j and pivote index if j is greater ignore if(j>pivote){
 Igonore

}
-> now move j++
-> if we found j<pivote first we will do i++ and then we swap between i and j 
-> now again move j++ and repeat the steps
 
   
    8,2 ,4 ,7 ,1,3,9,6,5
  i j                  pivote




-> NOTE pivote can tell which is have all the left value small then pivote and right value is greater then pivote HENCE IT IS BREAKING POINT
TC-> (O(n²))


*/

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      // Swap arr[i] and arr[j] using a temporary variable
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Final swap of pivot and the element at i + 1
  i++;
  let temp = arr[i];
  arr[i] = arr[high];
  arr[high] = temp;

  return i;
}

function QuickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);

    // Recursively sort the left and right sub-arrays
    QuickSort(arr, low, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, high);
  }
}

// Example
let arr = [8, 2, 4, 7, 1, 3, 9, 6, 5];
QuickSort(arr);
console.log(arr);

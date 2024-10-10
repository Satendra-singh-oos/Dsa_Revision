/*

LC->1679


You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maxOperations = function (nums, k) {
//   nums.sort((a, b) => a - b);

//   let left = 0;
//   let right = nums.length - 1;
//   let operation = 0;

//   while (left < right) {
//     let sum = nums[left] + nums[right];

//     if (sum === k) {
//       operation++;
//       left++;
//       right--;
//     } else if (sum < k) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return operation;
// };

// methord 2 (without sorting)
var maxOperations = function (nums, k) {
  /*
     k = 10
     num=2
     compliemnt =8(k-num)
     
    */

  let map = new Map();

  let operation = 0;

  for (const num of nums) {
    let compliemnt = k - num;

    if (map.get(compliemnt) > 0) {
      operation++;
      map.set(compliemnt, map.get(compliemnt) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  return operation;
};

console.log(maxOperations([1, 2, 3, 4], 5));

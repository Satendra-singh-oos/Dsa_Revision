/*

LC->11 

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxWater = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // min value so that water will not come outside
    let currentHeight = Math.min(height[left], height[right]);
    let currentWidth = right - left;

    let currentArea = currentHeight * currentWidth;

    // to find the maximum area

    maxWater = Math.max(currentArea, maxWater);

    // move the pointers

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

/*
LC->605

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false


*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    // check current position of flowerbed is empty or not

    if (flowerbed[i] === 0) {
      // if we are at first postion
      let isLeftEmpty = i === 0 || flowerbed[i - 1] === 0;

      // if last postion is empty
      let isRightEmpty = i + 1 === flowerbed.length || flowerbed[i + 1] === 0;

      if (isLeftEmpty && isRightEmpty) {
        flowerbed[i] = 1;
        count++;
        if (count >= n) {
          return true;
        }
      }
    }
  }

  if (count >= n) {
    return true;
  }

  return false;
};

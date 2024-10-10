/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"


*/

/**
 * @param {string} s
 * @return {string}
 */

function isVowel(char) {
  let lowerChar = char.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.indexOf(lowerChar) != -1 ? true : false;
}

var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;

  let charcterArr = s.split("");

  while (left < right) {
    let leftChar = charcterArr[left];
    let rightChar = charcterArr[right];
    // if left charcter is
    if (isVowel(leftChar) && isVowel(rightChar)) {
      let temp = charcterArr[left];
      charcterArr[left] = charcterArr[right];
      charcterArr[right] = temp;
      left++;
      right--;
    } else if (!isVowel(leftChar)) {
      left++;
    } else if (!isVowel(rightChar)) {
      right--;
    }
  }

  return charcterArr.join("");
};

console.log(reverseVowels("IceCreAm"));

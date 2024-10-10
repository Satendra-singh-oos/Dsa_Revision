/*
LC->392

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) {
    return true;
  }
  if (t.length === 0) {
    return false;
  }

  let i = 0; // pointer at start of s
  let check = 0;
  let j = 0; // pointer at the end of t
  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) {
      check += 1;
      i++;
    }
    j++;
  }

  if (check === s.length) {
    return true;
  }
  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));

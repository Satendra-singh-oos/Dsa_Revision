/*
LC-> 151

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.


*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = [];
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== " ") {
      word += s.charAt(i);
    }
    // if the starting has space we will not go and also if word is contructed then we got sapce like after the _ Sky in that case wee need to unshift in array
    else if (word.length > 0) {
      result.unshift(word);
      word = "";
    }
  }

  // it the edge case when the last word is contructed but we also crosed the length of arr so in that case we need to add
  if (word.length > 0) {
    result.unshift(word);
  }
  return result.join(" ");
};

const s = "the sky is blue";

console.log(reverseWords(s));

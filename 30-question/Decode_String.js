/*
LC-> 394
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 




*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  let currentNum = 0;
  let currentStr = "";

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      //   currentNum = currentNum * 10 + (char - "0");
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "[") {
      stack.push(currentNum);
      stack.push(currentStr);
      // rest the current values
      currentNum = 0;
      currentStr = "";
    } else if (char === "]") {
      // now we perfom opration

      let prevStr = stack.pop(); // cause we push first  number and then string
      let prevNum = stack.pop(); //prev num time we repete the string

      currentStr = prevStr + currentStr.repeat(prevNum);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
};

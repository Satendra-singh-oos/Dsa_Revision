/*
 LC-> 1071
 
 For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""

*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  /* if we add 2 string str1 + str2 and str2+str1 to form a gcd they should be same okay like 
    likec->AAA +A = A + AAA 
    ABD+ CE != CE+ADB
    */

  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  function gcd(a, b) {
    if (b.length === 0) {
      return a;
    }
    return gcd(b, a.slice(0, a.length % b.length));
  }
  return gcd(str1, str2);
};

// Eucideean Algorithum => gcd(a,b) = gcd(a,b-a)

//  let a = "ABCABCABC";
//  let b = "ABCABC";

// let result = a.slice(0,a.length%b.length);
// console.log(result)

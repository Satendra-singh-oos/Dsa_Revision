/*

LC-> 1768


You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

*/

var mergeAlternately = function (word1, word2) {
  let i = 0;
  let j = 0;
  let ans = "";
  while (i < word1.length && j < word2.length) {
    ans = ans + word1.charAt(i);
    ans = ans + word2.charAt(j);
    i++;
    j++;
  }

  while (i < word1.length) {
    ans = ans + word1.charAt(i);
    i++;
  }
  while (j < word2.length) {
    ans = ans + word2.charAt(j);
    j++;
  }
  return ans;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrst"));

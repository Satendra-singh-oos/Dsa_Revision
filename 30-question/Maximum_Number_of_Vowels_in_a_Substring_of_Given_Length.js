/*


LC->1456

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let currentVowelCount = 0;

  // intialize window

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowelCount++;
    }
  }
  let maxVowelCount = currentVowelCount;

  // window move
  for (let i = k; i < s.length; i++) {
    // first check is current value is vowel
    if (vowels.has(s[i])) {
      currentVowelCount++;
    }
    // then check is first value of old window is vowel or not if vowel then we need to decrese the vowelCount

    if (vowels.has(s[i - k])) {
      currentVowelCount--;
    }

    maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
  }

  return maxVowelCount;
};

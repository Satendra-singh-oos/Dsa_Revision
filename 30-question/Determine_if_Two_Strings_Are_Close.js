/*
LC-> 1657
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 

Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  /*
     Step 1:- check length if not same return fasle
     Step 2:- then we have to make frequency map(total number of the charcter should be same ) for word1 and word2, 
     Step 3:- then we Compare the map(using keys comparesion size) if not same reutrn false;
     Step 4:- now we compare the character should have same frequency
     Step 5:- value -> sort ->put Array
     Step 6:- array -> string -> then compare
     
    */
  if (word1.length !== word2.length) {
    return false;
  }

  const freqMap1 = new Map();
  const freqMap2 = new Map();

  for (const char of word1) {
    freqMap1.set(char, (freqMap1.get(char) || 0) + 1);
  }
  for (const char of word2) {
    freqMap2.set(char, (freqMap2.get(char) || 0) + 1);
  }

  const charachters1 = new Set(freqMap1.keys());
  const charachters2 = new Set(freqMap2.keys());

  if (charachters1.size !== charachters2.size) {
    return false;
  }

  const haveSameCharacters = [...charachters1].every((char) =>
    charachters2.has(char)
  );

  if (!haveSameCharacters) {
    return false;
  }

  const sortedFrequency1 = Array.from(freqMap1.values())
    .sort((a, b) => a - b)
    .join(",");
  const sortedFrequency2 = Array.from(freqMap2.values())
    .sort((a, b) => a - b)
    .join(",");

  const areFrequncyIdentical = sortedFrequency2 === sortedFrequency1;

  if (!areFrequncyIdentical) {
    return false;
  }
  return true;
};
console.log(closeStrings("abc", "bca"));

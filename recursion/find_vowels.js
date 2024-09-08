// find vowels

function isVowel(char) {
  let lowerChar = char.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.indexOf(lowerChar) != -1 ? true : false;
}

// itrative

function findVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    // let checkVowel = isVowel(str.charAt(i));
    if (isVowel(str.charAt(i))) count++;
  }
  return count;
}

// console.log(findVowels("Hello"));

function findVowelsRecursion(str) {
  console.log(`length: ${str.length - 1} , current string : ${str}`);
  if (str.length === 1) {
    console.log("Base Case Hit Here");
    console.log(`Base case : ${Number(isVowel(str[0]))}`);
    return Number(isVowel(str[0]));
  }

  // return (
  //   findVowelsRecursion(str.substring(0, str.length - 1)) +
  //   Number(isVowel(str[str.length - 1]))
  // );

  const result =
    findVowelsRecursion(str.substring(0, str.length - 1)) +
    Number(isVowel(str[str.length - 1]));

  console.log(`count after cehcking ${str[str.length - 1]} : ${result}`);
  return result;
}

console.log(findVowelsRecursion("Heelo"));

// Reverse a string

// itrative way to reverse a string
function reverseString(str) {
  let reverseStr = "";
  let i = str.length - 1;

  while (i >= 0) {
    reverseStr = reverseStr + str.charAt(i);
    i--;
  }
  return reverseStr;
}

console.log(reverseString("abc"));
// recursion

function recursiveReverseString(str) {
  console.log(`CurrentString: ${str}`);

  if (str === "") {
    return str;
  }

  let reversePart = recursiveReverseString(str.substring(0, str.length - 1));
  let result = str[str.length - 1] + reversePart;

  console.log(
    `Reversing : Last Char ${
      str[str.length - 1]
    } added in the front of: ${reversePart} to form a result: ${result}`
  );

  return result;
}

console.log(recursiveReverseString("abcde"));

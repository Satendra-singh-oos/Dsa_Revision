// itrative

function checkPalindrom(str) {
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str.charAt(i) != str.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(checkPalindrom("abcd"));
console.log(checkPalindrom("madam"));

// recursive

function checkPalindromRecursive(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] != str[str.length - 1]) {
    return false;
  }
  //(str[0] === str[str.length - 1])
  else {
    return checkPalindromRecursive(str.substring(1, str.length - 1));
  }
}

console.log(checkPalindromRecursive("abcd"));
console.log(checkPalindromRecursive("madam"));

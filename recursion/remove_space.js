/*
 remove all tabs and spaces from string 
 this includes the character \t adn " " from a string
*/

function removeSpaceAndTab(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== " " && str.charAt(i) !== "\t") {
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

console.log(removeSpaceAndTab("abc de f"));

function removeSpaceAndTabRecursvie(str) {
  if (str.length === 0) {
    return "";
  }

  const firstChar = str.charAt(0);
  const remainingStr = str.slice(1);

  if (firstChar === " " || firstChar === "\t") {
    return removeSpaceAndTab(remainingStr);
  } else {
    return firstChar + removeSpaceAndTab(remainingStr);
  }
}

console.log(removeSpaceAndTabRecursvie("abc de f"));

// find the length function in string

// itrative

function findLength(str) {
  let count = 0;

  while (str[count] !== undefined) {
    count++;
  }
  return count;
}

console.log(findLength("abcd"));

//recursive solution

function findLengthRecursvie(str) {
  if (str[0] === "") {
    return;
  }
  return 1 + findLength(str.substring(1));
}

console.log(findLengthRecursvie("abcd"));

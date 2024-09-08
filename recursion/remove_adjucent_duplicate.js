/*

i/p = "aabcc"
o/p= "abc"

-> other type of same question but will have diffrent soluion 
-> question will ask to remove all the adjucent element
*/

// solution of case 1 remove only adjuscent one copy of char

function removeAdjDuplicate(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1 || str.charAt(i) != str.charAt(i + 1)) {
      ans += str.charAt(i);
    }
  }
  return ans;
}

console.log(removeAdjDuplicate("abbaca"));

function recursiveRemoveAdjDuplicate(inputString) {
  if (inputString.length <= 1) {
    return inputString;
  }

  if (inputString[0] === inputString[1]) {
    return recursiveRemoveAdjDuplicate(inputString.substring(1));
  } else {
    return (
      inputString[0] + recursiveRemoveAdjDuplicate(inputString.substring(1))
    );
  }
}

console.log("recurstion=> " + recursiveRemoveAdjDuplicate("aabccdeff"));
console.log("recurstion=> " + recursiveRemoveAdjDuplicate("Helloo"));

/* 
I/p-> "aabccdeff"
O/p->"bde"
*/

// solution of case 2 when we remove the both adjucent char from the string
// sol-> to write this solution we will have to use stack
function removeAllAdjDuplicate(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length > 0 && str.charAt(i) === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str.charAt(i));
    }
  }
  let ans = "";
  while (stack.length > 0) {
    ans = stack.pop() + ans;
  }

  return ans;
}
console.log(removeAllAdjDuplicate("abbaca"));

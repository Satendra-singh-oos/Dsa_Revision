// arr = ["(",")",")","(",")","("]

function balanceParenthieses(arr) {
  let count = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === "(") {
      count++;
    } else {
      count--;
    }
    // If the count is negative, it means there are more closing than opening parentheses in the current itration
    if (count < 0) {
      return false;
    }
    i++;
  }

  return count === 0 ? true : false;
}
let arr = ["(", ")", ")", "(", ")", "("];
console.log(balanceParenthieses(arr));

function balanceParenthesesRecursion(array, startIndex = 0, count = 0) {
  if (startIndex === array.length) {
    return count === 0 ? true : false;
  }

  // If the count is negative, it means there are more closing than opening parentheses
  if (count < 0) {
    return false;
  }

  if (array[startIndex] === "(") {
    return balanceParenthesesRecursion(array, startIndex + 1, count + 1);
  } else if (array[startIndex] === ")") {
    return balanceParenthesesRecursion(array, startIndex + 1, count - 1);
  } else {
    return false;
  }
}

console.log(balanceParenthesesRecursion(arr));

// variotion of this question
/*
 Suppose there are the multipule type of paranetises how you will check like this
 arr=["(","{","[","]","}",")"]

 soultion will be using stack
*/

function mulipuleParamtestes(arr) {
  let stack = [];
  let openingBrackets = ["(", "{", "["];
  let closingBrackets = [")", "}", "]"];

  let i = 0;
  while (i < s.length) {
    const bracket = s.charAt(i);

    // Push opening brackets onto the stack
    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    }
    // Handle closing brackets
    else if (closingBrackets.includes(bracket)) {
      let closingIndex = closingBrackets.indexOf(bracket);

      // Check if stack is empty or top of stack doesn't match opening bracket
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== openingBrackets[closingIndex]
      ) {
        return false;
      }
      stack.pop(); // Remove the matched opening bracket from stack
    }

    i++;
  }

  // If the stack is empty, all brackets were matched
  return stack.length === 0 ? true : false;
}

let multiParmarr = ["(", "{", "[", "]", "}", ")"];
console.log(mulipuleParamtestes(multiParmarr));

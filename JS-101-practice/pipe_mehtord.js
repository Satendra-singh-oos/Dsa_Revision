/*
```
Implement a utility function called pipe that accepts a series of functions as arguments. 
The pipe function should return a new function that, when called,
processes an initial input by passing it through each of the provided functions in sequence,
where the output of one function becomes the input for the next.

Function Signature

javascript
Copy code
pipe(fn1, fn2, fn3, ...fnN)(input);

```
*/

function pipe(...fns) {
  return function (initialValue) {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
  };
}

// Example usage
const getName = (object) => object.name;
const makeUpperCase = (string) => string.toUpperCase();
const slice = (string) => string.slice(0, 3);

const method = pipe(getName, makeUpperCase, slice);

const value = method({ name: "chaicode" });

console.log(value);

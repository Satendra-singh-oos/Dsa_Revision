
# Quick Look Before Interview 😄

## Q1. Is JavaScript single threaded or multi-threaded?

 - JavaScript is a single-threaded language. This means it has one call stack and one memory heap. 
   As expected, it executes code in order and must finish executing a piece code before moving onto the next.
   This is what allows JavaScript to be non-blocking and use async operations. 
   However, JavaScript also has asynchronous behavior. This is what allows us to use setTimeout, AJAX, and promises.
   These functions are handled by the browser/run-time environment,   not by JavaScript itself. 
   This is what allows JavaScript to be non-blocking for main thread operations. 

---

## Q2. Explain how JavaScript engines works?

 - JavaScript engines are programs that execute JavaScript code. (Ex: GoogleV8, spiderMonkey,etc)
  
 Execution 
```
 JS_CODE --> Parser --> Abstract_Syntax_Tree --> Interpreter (Optimized Compiler) --> ByteCode --> Execution

 ```

---

## Q3. What is event loop in JavaScript?
 - As we know JavaScript is single-threaded language   but it also follow the asynchronous  and have non-blocking behaviors.
   So how this happens in js as it is single-threaded the answer lies in the execution of the code in js,

   The Code will come in the call stack , if it contains the browser-api like(setTimeout,setInterval,..etc) the that call will take that task to the task queue
   we have 2 type of task queue one is micro task queue and other is macro Task Queue so when the task go do any of this queue there will be something which will tell us to execute the code 
   that is done by event loop 

   ```
   CallStack  (EventLoop)[keep checking the queue]           <--->  [MICRO- TASKQUEUE]<---> [MACRO-TASKQUEUE]
                                                             ```

    show this code bellow 


```JavaScript
console.log("start");
setTimeout(() => console.log("Timeout Go to Queue"), 1000);
console.log("end");
```
---
## Q4. Difference between var, let and const?

- var: The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined. If it is defined outside a function, the scope of the variable is global.
  Default value of var is undefined.
- let: The scope of a variable defined with the keyword “let” or “const” is limited to the “block” defined by curly braces i.e. {}.
  Default value of let is uninitialized.
- const: The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.
  Default value of const is uninitialized.

---

## Q5. Different types of data types in JavaScript?

 - There are mainly two types of data types in JavaScript: primitive data types and object (reference) data types.

1) Primitive data types are the basic data types in JavaScript. 
They include numbers, strings, Booleans, null, and undefined. Symbols are also primitive data types, that represent unique identifiers.

2) Object data types are data types that contain other data types.
They are created using object literals or constructor functions. Objects, Arrays, and Functions are examples of object data types.


---

## Q6. What is Hosting/temporal dead zone

- Hosting = as we know js program run a global execution context which has 2 page 
              1)Memory Creation (allocate memory to the variable fuction(refrence) and object)
              2)Execution Phase

    **NOTE** -> 1) varible are declared ans assigned as undefine
                2) function are declared and are made avlaible as they reach call stack
    -> In js we can access function before decalation like we do in the bellow code
    -> But We can't access varaibel before decalation



- Temporal dead zone - Accesses the variable or function before they declare

   Case 1-> We can access the function before declaration
   Case 2-> If we access VAR before declaration it will give undefine
   Case 3-> If we access LET/Const before declaration it will give Reference Error

   Temporal dead zone is a concept in JS related to let and const declarations. 
   Variables with let or const declarations are hoisted to the top of their scope,
   but they are not immediately available in the code. 
   This means that you can use a variable before it is declared, but the value of the variable will be undefined until it is assigned a value.
   Here's an example of a temporal dead zone in JavaScript:
   ```JavaScript
       console.log(x); // Output: ReferenceError: x is not defined
       let x = 5;
       console.log(x); // Output: 5
  

   In this example, the variable `x` is declared with the `let` keyword.

main();
function main() {
  console.log("I am avaliabale");
}

console.log(a);
console.log(b);
 console.log(c);
var a = 2;
let b;
 const c = 10;
```
---

## Q7. What is Promise and Promise chaining in JavaScript ?


- Promises are a way to handle asynchronous operations in JavaScript. They allow you to write code that can be executed asynchronously, without blocking the main thread. 

- So basically, Promise are nothing just a placeholder which have ability to resolve or reject the value promise get .then or .catch which can provided asynchronous nature in JavaScript
(the creation of a Promise is synchronous ex-> const a = new Promise((resolve, reject) => {
  // asynchronous code
});)

- Promises have three states: `pending`, `fulfilled`, and `rejected`. When a promise is pending, it means that the asynchronous operation is still in progress. When a promise is fulfilled, it means that the asynchronous operation has completed successfully. When a promise is rejected, it means that the asynchronous operation has failed.

- Promises can be chained together using the `then` method. The `then` method takes two arguments: a success callback and an error callback. The success callback is called when the promise is fulfilled, and the error callback is called when the promise is rejected

Here's an example of using promises to fetch data from an API:

```javascript
fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```


---


## Q8. What is async/await in JavaScript?

-  Async/await is a syntax feature in JavaScript that allows you to write asynchronous code in a more synchronous way. It uses the `async` and `await` keywords to define asynchronous functions.

- after await all the code of the following block will run in the micro task queue
- We can say this 1) Promise.revolve("abcd") === async function (){return "abcd"}
                  2) Promise.revolve("abcd").then((res)=>consol.log(then)) === async function (){await conts a= "abcd"; console.log(a)}

Here's an example of using async/await to fetch data from an API:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.freeapi.app/v1/jokes/random');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData()
  .then(() => console.log('Data fetched'))
  .catch(error => console.error(error));
```

In this example, the `fetchData` function is defined as an asynchronous function using the `async` keyword. The `await` keyword is used to wait for the `fetch` function to complete before moving on to the next line of code. All code after the `await` keyword, rest of the function is executed in the microtask queue.

---

## Q9. Discuss callback and callback hell in JavaScript.

-   Callback functions are functions that are passed as arguments to other functions and are called when a certain event occurs. They are commonly used in JavaScript to handle asynchronous operations, such as making HTTP requests or reading from a file.

  example:

  ```javascript
  function readFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) return callback(err);
      callback(null, data);
    });
  }

  readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  setTimeout(() => {
    console.log('Timeout');
  }, 1000);
  ```

- Callback hell is a problem in JavaScript where functions are nested inside each other, making the code difficult to read and understand. It can lead to callbacks being called multiple times or not being called at all, which can cause unexpected behavior.

Here's an example of callback hell:

```javascript

fetchRandomJoke(joke) =>{
  console.log(joke);
  translateJoke(joke, translation) =>{
    console.log(translation);
    writeToFile(translation, file) =>{
      console.log('Joke written to file');
      sendEmail(translation, email) =>{
        console.log('Joke sent to email');
      }
    }
  }
}

//better way to do it
const fetchRandomJoke = async (joke) => {
  const joke = await fetchJoke();
  const translation = await translateJoke(joke);
  await writeToFile(translation, file);
  await sendEmail(translation, email);
}
```

In this example, the `fetchRandomJoke` function is called with a callback function that is passed to the `translateJoke` function. The `translateJoke` function is called with a callback function that is passed to the `writeToFile` function. The `writeToFile` function is called with a callback function that is passed to the `sendEmail` function.

The problem with this code is that the callback functions are nested inside each other, making the code difficult to read and understand. It can lead to callbacks being called multiple times or not being called at all, which can cause unexpected behavior. To avoid callback hell, it's recommended to use async/await or promises to handle asynchronous operations.

---

## Q10 .What is the difference between == and === in JavaScript?

- `==` compares the values of two operands for equality, while `===` compares the values of two operands for strict equality. In other words, `==` checks if the operands are equal, while `===` checks if the operands are equal and of the same type.

Here's an example of using `==` and `===` in JavaScript:

```javascript
let a = 5;
let b = 5;

console.log(a == b); // Output: true
console.log(a === b); // Output: true

a = '5';
b = '5';

console.log(a == b); // Output: false
console.log(a === b); // Output: false
```

In this example, the `==` operator is used to compare the values of `a` and `b`, and the result is `true`. The `===` operator is used to compare the values of `a` and `b`, and the result is also `true`.

In the second example, the `==` operator is used to compare the values of `a` and `b`, and the result is `false`. The `===` operator is used to compare the values of `a` and `b`, and the result is also `false`.

---

## Q11. How to create object in JavaScript?

- Objects are a fundamental data type in JavaScript. They can be created using object literals or constructor functions.

Object literals are enclosed in curly braces `{}` and are used to create objects with key-value pairs. Here's an example of an object literal:

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

- Constructor functions are used to create objects with custom properties and methods. Here's an example of a constructor function:


```javascript
 function Person(name,age,city){
  this.name=name;
  this.age=age;
  this.city=city;
 }

 const person = new Person("abcd",23,"New Delhi")

```

In this example, the `Person` function is used as a constructor function to create a new object with the specified properties.

Although there are other ways to create objects such as using the `Object.create()` method, object literals and constructor functions are the most common ways to create objects in JavaScript.

```javascript

const person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";

```

---


## Q12. What are rest and spread operator in JavaScript?

- The rest operator (...) collects multiple elements into an array or object, while the spread operator (...) unpacks elements from arrays or objects.

-Rest and spread operator are two important features in JavaScript that allow you to work with arrays and objects in a more concise and readable way.

- The rest operator allows you to take an array or an object as an argument and use it in a function call.

- The spread operator allows you to expand an array or an object into individual elements.

Here's an example of using the rest and spread operator in JavaScript:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); 

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
```

In this example, the `sum` function takes an array of numbers as an argument using the rest operator. 
The spread operator is used to expand the array into individual elements, which are then passed to the `reduce` function.


--- 


## Q13.  What is higher order function in JavaScript?

- Higher order functions are functions that take other functions as arguments or return functions as results.

Here's an example of a higher order function in JavaScript:

```javascript
function applyTwice(func, arg) {
  return func(func(arg));
}

console.log(applyTwice(Math.sqrt, 16));


```

## Q14. What are closures in JavaScript and give 1 DOM related example?

-  Closures are functions that have access to variables from their outer scope, even after the outer function has finished executing.


Here's an example of a closure in JavaScript:

```javascript
function outerFunction() {
  const outerVariable = 'I am an outer variable';

  function innerFunction() {
    console.log(outerVariable); // Output: I am an outer variable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); 

```

In this example, the `outerFunction` function defines a variable `outerVariable` and a function `innerFunction` that has access to `outerVariable`. The `innerFunction` returns the `outerFunction` function, which allows it to be called later.

One DOM related example of a closure is the `addEventListener` method. The `addEventListener` method allows you to attach event listeners to elements in the DOM. The event listener function has access to the element's properties and methods, even after the element has been removed from the DOM.

Here's an example of using the `addEventListener` method with a closure:

```javascript
const button = document.getElementById('myButton');

function handleClick() {
  console.log('Button clicked');
}

button.addEventListener('click', handleClick);
```

In this example, the `handleClick` function is defined inside the `addEventListener` method. The `handleClick` function has access to the `button` element, even after the `button` element has been removed from the DOM.

---

## Q15.   Explain hoisting in JavaScript.


- Hoisting is a JavaScript feature that allows you to use variables and functions before they are declared. This means that you can use variables and functions before they are defined in your code. Hoisting is done by the JavaScript engine, which moves the declaration of variables and functions to the top of their `scope`. 

Here's an example of hoisting in JavaScript:

```javascript
divideByTen(100)

function divideByTen(x) {
  console.log(x / 10);  
}
```

In this example, the `divideByTen` function is called with the argument `100`. The `divideByTen` function is defined after the call to `divideByTen`, so the function is hoisted to the top of the scope. This means that the `divideByTen` function is available to be called before it is defined.

---


## Q16.What is temporal dead zone in JavaScript?

- Temporal dead zone is a concept in JS related to let and const declarations. Variables with let or const declarations are hoisted to the top of their scope, but they are not immediately available in the code. This means that you can use a variable before it is declared, but the value of the variable will be undefined until it is assigned a value.

Here's an example of a temporal dead zone in JavaScript:

```javascript


console.log(x); // Output: ReferenceError: x is not defined

let x = 5;

console.log(x); // Output: 5
```

In this example, the variable `x` is declared with the `let` keyword.

---


## Q17. What is currying in JavaScript?


- Currying is a technique in functional programming that allows you to transform a function that takes multiple arguments into a sequence of functions, each taking a single argument. This can be useful for creating more flexible and reusable code.

Here's an example of currying in JavaScript:

```javascript

function add (x){
  return function(y){
    return x+y;
  }
}

const addTwo = add(3)
console.log(addTwo(3))

```

In this example, the `add` function takes a single argument `x` and returns a new function that takes a single argument `y` and returns the sum of `x` and `y`. The `addTwo` function is created by calling `add` with the argument `2`. The `addTwo` function can then be called with any value of `y` to get the sum of `2` and `y`.

---

## Q18. what are arrow functions in JavaScript?

- Arrow functions are a shorthand syntax for writing functions in JavaScript. They provide a more concise and readable way to write functions, especially when using anonymous functions.


## Q19. What is prototype & prototype chain in JavaScript?

- A prototype is an object from which other objects inherit properties and method.
 The prototype chaining is a series of linking of prototype of parent object to the child object & utilized property of parent in the child


```javascript
let company = {
  name: "company_name",
  location: function () {
    console.log("Company_Location");
  },
};

let employe = {
  name: "abcd",
  homeTown: function () {
    console.log("Delhi");
  },
};

console.log(employe);

```

```javascript

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log(this.name);
}

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);


const dog = new Dog('Fido');
dog.sayName(); 

```

In this example, the `Animal` constructor is used to create a base class with a `sayName` method. The `Dog` constructor then uses the `Animal` constructor to create a new object with the `name` property. This allows the `Dog` object to be used as a constructor for other objects.

---


## Q20. what is difference between call bind and apply in JavaScript?

- CALL -> The call method will invoke function immediately with the specified values. **OR** .The `call` method is used to call a function with a specific this value.  It takes two arguments: the function to be called and the this value to use. 

- APPLY ->Same as Call But arguments are passed as array . **OR**  The `apply` method is used to call a function with a variable number of arguments. It takes two arguments: the function to be called and an array of arguments to pass to the function.

- BIND -> The `bind` method is used to create a new function that, when called, has its `this` value pre-bound to a specific object. 
It takes two arguments: the function to be bound and the `this` value to use.

Here's an example of how the `call`, `apply`, and `bind` methods work in JavaScript:

```javascript

const person = {
  name:"satendra",
  age:25
}

function introduce(intrest,hobby){
  console.log(`My name is ${this.name} and age is ${this.age} , My intrest is in ${intrest} and hobby is playing ${hobby}`)
}

introduce.call(person,"computers", "video-games")
introduce.apply(person,["maths",'chess'])
const bindFn = introduce.bind(person,"painting","cricket")
bindFn()
```


## Q21. How to compare two objects in JavaScript?

- You can compare two objects in JavaScript using the `===` operator. This operator checks if the two objects are the same object or if they have the same value.

- You can convert an object to a string using the `toString()` method. This method returns a string representation of the object. You can then compare the string representations of the objects using the `===` operator.

Here's an example on how to compare two objects in JavaScript

```javascript

const obj1 = { name: 'Alice', age: 25 };
const obj2 = { name: 'Alice', age: 25 };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); 
```

---

## Q22.  What is event delegation in JavaScript?

- Event delegation is a technique in JavaScript that allows you to attach event listeners to a parent element and handle events for its child elements. This can be useful for creating more flexible and reusable code.

Here's an example of event delegation in JavaScript:

```javascript
const parentElement = document.getElementById('parent');
const childElements = document.getElementsByClassName('child');

childElements.forEach(childElement => {
  childElement.addEventListener('click', handleClick);
});

function handleClick(event) {
  console.log('Child element clicked');
}
```

In this example, the `parentElement` variable is used to get the parent element with the ID `'parent'`. The `childElements` variable is used to get all the child elements with the class `'child'`. The `forEach` method is used to iterate over each child element and attach a click event listener to it. The `handleClick` function is used to handle the click event for each child element.


---

## Q23. What is event bubbling and capturing in JavaScript?

- Event bubbling is a technique in JavaScript where an event starts from the target element (the innermost child) and propagates upward through its ancestors (parent elements), allowing you to handle events for child elements by attaching event listeners to the parent.

- Event capturing is a technique in JavaScript where an event starts from the outermost parent element and propagates down to the target element (the innermost child), allowing you to handle events by attaching event listeners to parent elements before reaching the child."

- Key Points:
 1) Event Bubbling: Child to Parent (innermost to outermost).
 2) Event Capturing: Parent to Child (outermost to innermost).

---

## Q24. What is shallow copy and deep copy in JavaScript?

- Shallow copy is a copy of an object whose references are same. It creates a new object with the same properties as the original object. If you modify the properties of the new object, it will also modify the original object.

- Deep copy is a copy of an object that creates a new object with the same properties and values. It does not share the same references between the original object and the new object. If you modify the properties of the new object, it will not modify the original object.



```javascript

/*
Shallow Copy Example:
Using Object.assign() or the spread operator (...) for a shallow copy:
*/

const original = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'New York',
    zip: '10001'
  }
};

// Creating a shallow copy
const shallowCopy = { ...original };

// Modifying the shallow copy
shallowCopy.name = 'Bob'; // This will not affect original
shallowCopy.address.city = 'Los Angeles'; // This will affect original

console.log(original.name); // Output: Alice
console.log(original.address.city); // Output: Los Angeles (affected)
  
/* Deep Copy
Using JSON.stringify() and JSON.parse() for a deep copy:
*/
const original = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'New York',
    zip: '10001'
  }
};

// Creating a deep copy
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying the deep copy
deepCopy.name = 'Bob'; // This will not affect original
deepCopy.address.city = 'Los Angeles'; // This will not affect original

console.log(original.name); // Output: Alice (not affected)
console.log(original.address.city); // Output: New York (not affected)

```

---

## Q25. What is an IIFE in JavaScript?

- An IIFE, or immediately-invoked function expression, is a JavaScript function that is invoked immediately after it is defined. It is often used to create a private scope for variables and functions.

Here's an example of an IIFE in JavaScript:

```javascript
(function() {
  // Private variables and functions
  const name = 'John';
  function sayHello() {
    console.log('Hello, ' + name + '!');
  }

  // Public functions
  function greet() {
    console.log('Hello, world!');
  }
})();
```

In this example, the IIFE is immediately invoked after it is defined. The `name` variable and the `sayHello` function are private to the IIFE, and they cannot be accessed from outside the IIFE. The `greet` function is also private to the IIFE, but it can be accessed from outside the IIFE.


---
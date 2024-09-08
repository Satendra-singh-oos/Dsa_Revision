class Stack {
  constructor() {
    this.stack = [];
    this.currentIndex = 0;
  }

  push(value) {
    this.stack.push(value);
    this.currentIndex++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    this.currentIndex--;
    return this.stack.pop();
  }

  peak() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
    this.currentIndex = 0;
  }

  contains(value) {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.stack.includes(value);
  }

  reverse() {
    return this.stack.reverse();
  }

  printStack() {
    let str = "";
    str += "[";

    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i];
      if (i < this.currentIndex - 1) {
        str += ",";
      }
    }
    str += "]";
    return str;
  }
}

//usage Example
let myStack = new Stack();
myStack.push(4);
myStack.push(2);
myStack.push(6);
// myStack.pop();
// console.log(myStack.isEmpty());
// console.log(myStack.reverse());

console.log(myStack.printStack());

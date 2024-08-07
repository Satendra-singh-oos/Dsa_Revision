class Queue {
  constructor() {
    this.queue = [];
    this.currentIndex = 0;
  }

  enqueue(data) {
    this.queue.push(data);
    this.currentIndex++;
  }

  //Ask to interviewer : should i put null or undeifne here
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    this.currentIndex--;
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }

  printQueue() {
    let str = "";
    str += "[";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i];
      if (i < this.currentIndex - 1) {
        str += ",";
      }
    }
    str += "]";
    return str;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.dequeue();

console.log(queue.printQueue());

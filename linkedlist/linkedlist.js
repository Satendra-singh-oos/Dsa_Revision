class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// insert at beginning/head [it is possible only if linkedList is empty]

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

LinkedList.prototype.inserAtEnd = function (data) {
  const newNode = new Node(data);
  // this.head==null
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;

  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

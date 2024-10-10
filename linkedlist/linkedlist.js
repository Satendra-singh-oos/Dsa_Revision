// a node in linkedlist consist of two thing data and one thing which well tell us about the that there is some thing to the next of linkedlist is called as next

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// empty box of linkedlist
class LinkedList {
  constructor() {
    // the first object of linked list is called as head and last object is called as tail
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
  // if(this.head==null){}
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

// insert at given node
LinkedList.prototype.insertAfterGivenNode = function (prevNode, data) {
  if (!prevNode) {
    console.log(`PrevNode Cannot be null`);
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// delete first node

LinkedList.prototype.deleteFisrtNode = function () {
  if (!this.head) {
    console.log("Head Is Already Null");
    return;
  }

  this.head = this.head.next;
};

// delete last node
LinkedList.prototype.deleteLastNode = function () {
  // first case: what if the head is null
  if (!this.head) {
    console.log("Head is Already Null");
    return;
  }
  // second case: what if the head.next ==null

  if (!this.head.next) {
    this.head = null;
    return;
  }

  // [6,next]->[7,next]->[8,next]->null

  // let secondLast = this.head;
  let currentLast = this.head;

  while (currentLast.next.next) {
    currentLast = currentLast.next;
  }

  currentLast.next = null;
};

// delete node at given point
// [6->7->8]
// [6->8]

LinkedList.prototype.deleteNodeAtGivenKey = function (key) {
  if (!this.head) {
    console.log("LinkedList IS Already Empty");
  }

  // data found at head
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let currentNode = this.head;

  while (currentNode.next !== null) {
    if (currentNode.next.data === key) {
      currentNode.next = currentNode.next.next;
      return;
    }
    currentNode = currentNode.next;
  }

  console.log(`Key Not Found in linkdlist:${key}`);
};

// Search return (true false)

LinkedList.prototype.search = function (key) {
  if (!this.head) {
    console.log("LinkedList Is Empty");
    return;
  }

  if (this.head.data === key) {
    console.log("Data found at the head node ");
    return;
  }

  let currentNode = this.head;
  let count = 0;

  while (currentNode) {
    if (currentNode.data === key) {
      console.log(`Data found at the ${count} node`);
      return true;
    }
    currentNode = currentNode.next;
    count++;
  }

  console.log(`Give Data not found in the linkedlist`);
  return false;
};

// search return node

LinkedList.prototype.searchNode = function (key) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.data === key) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }

  console.log(`Data not found in the linked list: ${key}`);
  return null;
};

// Travesel

LinkedList.prototype.printList = function () {
  let listValue = [];
  let current = this.head;

  while (current) {
    listValue.push(current.data);
    current = current.next;
  }

  if (listValue.length === 0) {
    console.log("LinkedList is Empty");
    return;
  }

  console.log(listValue.join(" -> "));
};

// Reverse A linkedList

// [3->4->6->7]
LinkedList.prototype.reverse = function () {
  let next = null;
  let prev = null;
  let curr = this.head;

  while (curr) {
    next = curr.next;
    curr.next = prev; // changing the direction of pointer of 3<-4 to null null<-3 at this moment i only have prev as null
    prev = curr;
    curr = next;
  }

  this.head = prev;
};

const linkedList = new LinkedList();

linkedList.inserAtEnd(1);
linkedList.inserAtEnd(2);
linkedList.inserAtEnd(3);
linkedList.inserAtEnd(4);
linkedList.inserAtEnd(5);

console.log("Before Delete");
linkedList.printList();

linkedList.deleteFisrtNode();
linkedList.deleteLastNode();
linkedList.deleteNodeAtGivenKey(3);

// linkdlist.search(55);

console.log("After Delete");

linkedList.printList();

console.log("Insert");

const node = linkedList.searchNode(4);
if (node) {
  linkedList.insertAfterGivenNode(node, 20);
}
linkedList.printList();

console.log("Reverse");
linkedList.reverse();
linkedList.printList();

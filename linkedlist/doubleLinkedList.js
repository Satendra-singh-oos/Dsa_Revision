/*
   null<=>[ prevAddress,DATA,nextAddress]<=>[ prevAddress,DATA,nextAddress]<=>null

   - In Double linkedlist will take care about the head and tail unlike the single linkedlist we only have to take care for the head
   - 
 */

class Node {
  constructor(prev = null, data, next = null) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

class dblinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  inserAtBegining(data) {
    const newNode = new Node(null, data, this.head);
    if (this.head != null) {
      this.head.prev = newNode;
    }
    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }
  }
}

dblinkedlist.prototype.inserAtEnd = function (data) {
  const newNode = new Node(this.tail, data, null);

  if (this.tail !== null) {
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (this.head === null) {
    this.head = newNode;
  }
};

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
    // there will be 2 case if head is not null and other one is  tail can be null
    if (this.head != null) {
      this.head.prev = newNode;
      // this.head = newNode;
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
    //this.tail = newNode;
  }

  this.tail = newNode;

  if (this.head === null) {
    this.head = newNode;
  }
};

// next=pre.next
// prev=prev

/*
 If prev.next ==null
 node.next==null
 prev.next=node
*/

dblinkedlist.prototype.insertAfterGivenNode = function (prevNode, data) {
  // what if prevNode is null given
  if (prevNode === null) {
    return "Invalid prev node can't be null";
  }

  const newNode = new Node(prevNode, data, prevNode.next);

  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;

    //prevNode.next = newNode;
  }

  prevNode.next = newNode;
  //tail if last node hai to this.tail = newNode
  if (newNode.next === null) {
    this.tail = newNode;
  }
};

// delete the firstNode

dblinkedlist.prototype.delteFirstNode = function () {
  if (this.head === null) {
    return "Head is null";
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    // this.head = this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};

dblinkedlist.prototype.delteLastNode = function () {
  if (this.tail === null) {
    return "Tail is null";
  }
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    // this.head = this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

dblinkedlist.prototype.reverse = function () {
  let current = this.head;
  let temp = null;

  while (current != null) {
    // Swap prev and next for each node
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // Move to the next node (which is previous due to the swap)
    current = current.prev;
  }

  // After the loop, temp is pointing to the old head (which is now the new tail)
  // We need to update the head and tail pointers
  if (temp != null) {
    this.tail = this.head;
    this.head = temp.prev; // temp.prev is the new head
  }
};

dblinkedlist.prototype.printList = function () {
  let current = this.head;
  let result = [];

  while (current !== null) {
    let prevData = current.prev ? current.prev.data : "null";
    let nextData = current.next ? current.next.data : "null";
    result.push(`[${prevData}<-${current.data}->${nextData}]`);
    current = current.next;
  }

  console.log(result.join(" "));
};

const list = new dblinkedlist();
list.inserAtBegining(1);
list.inserAtEnd(2);
list.inserAtEnd(3);
list.insertAfterGivenNode(list.head, 4);
list.printList();
console;
list.reverse();

list.printList();

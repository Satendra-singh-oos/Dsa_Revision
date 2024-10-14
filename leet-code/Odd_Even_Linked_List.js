/*
328. Odd Even Linked List

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:


Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var oddEvenList = function (head) {
  /*
     -> edge case what if head is null and head.next=null return head
     
     -> now we will form two linkedlist simetanisly and at the end of the odd linkend list we will add  the even linked list

     -> first point will always be odd not depends on value so we can solve this issue using the index as 1 base
     
     */

  if (head === null || head.next === null) {
    return head;
  }

  let evenLinkedListHead = new ListNode(0);
  let oddLinkedListHead = new ListNode(0);
  let even_ptr = evenLinkedListHead;
  let odd_ptr = oddLinkedListHead;
  let curr = head;
  let index = 1;

  while (curr != null) {
    if (index % 2 == 0) {
      // even linkedlist
      even_ptr.next = curr;
      even_ptr = even_ptr.next;
    } else {
      // odd linkedlist
      odd_ptr.next = curr;
      odd_ptr = odd_ptr.next;
    }
    curr = curr.next;
    index++;
  }

  even_ptr.next = null;
  odd_ptr.next = evenLinkedListHead.next;
  return oddLinkedListHead.next;
};

/*

LC->2095. 

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]


Input: head = [1,2,3,4]
Output: [1,2,4]

Input: head = [2,1]
Output: [2]

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
var deleteMiddle = function (head) {
  /*
    edge case if head = null and head.next =null the update head=null
    we will take 3 pointer 
    fast=head , slow=head and prev =null
    
     */

  let prev = null;
  let slow = head;
  let fast = head;

  if (head === null || head.next === null) {
    return null;
  }

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  // update the linklist
  prev.next = slow.next;
  return head;
};

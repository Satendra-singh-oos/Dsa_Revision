/*

LC. 112. Path Sum

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

 

Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There are two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  /*
    
    --ALGO
    -So question state that we need to travese the whole tree and then we can say our result exist ot not
    - so what we can do traverse the node if the node is null then return false;
    - now if node is not null add the current node value in currentSum 
    - now check if node.left===null && node.right===null
    - if that the case then check the targetSum === currentSum if they equal return true else fasle
    - if not then traver the left and right 
     */

  return dfs(root, targetSum, 0);
};

function dfs(node, targetSum, currentSum = 0) {
  if (node === null) {
    return false;
  }

  currentSum = currentSum + node.val;

  if (node.left === null && node.right === null) {
    return targetSum === currentSum ? true : false;
  }

  return (
    dfs(node.left, targetSum, currentSum) ||
    dfs(node.right, targetSum, currentSum)
  );
}

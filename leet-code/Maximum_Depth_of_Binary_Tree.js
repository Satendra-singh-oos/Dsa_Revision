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
 * @return {number}
 */
var maxDepth = function (root) {
  /*
     -- ALGO
     -Check if the root is None. If it is, return 0.
     - Recursively call maxDepth on the left child to find the depth of the left subtree.
     - Recursively call maxDepth on the right child to find the depth of the right subtree.
 - The depth of the current node is the maximum of the depths of the left and right subtrees plus one
    */

  if (root === null) {
    return 0;
  }
  const leftTravesel = maxDepth(root.left);
  const rightTravesel = maxDepth(root.right);

  let maxCount = Math.max(leftTravesel, rightTravesel) + 1;
  return maxCount;
};

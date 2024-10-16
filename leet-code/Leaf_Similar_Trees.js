/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  /*
    --ALGO
    - Get the leaf nodes of root1 and root2 
    - Compare the arrays; if they are identical, return true, else false.
    */

  const leaveValueOfRoot1 = pickLeaveNode(root1, []);
  const leaveValueOfRoot2 = pickLeaveNode(root2, []);

  return leaveValueOfRoot1.join(",") === leaveValueOfRoot2.join(",");
};

function pickLeaveNode(root, values = []) {
  if (root === null) {
    return values;
  }
  if (root.left === null && root.right === null) {
    values.push(root.val);
  }

  pickLeaveNode(root.left, values);
  pickLeaveNode(root.right, values);

  return values;
}

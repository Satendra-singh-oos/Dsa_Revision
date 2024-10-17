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
var goodNodes = function(root) {

    /*
    --ALGO

    - initial we know root node is the good node
    - first base case - if node it is null then we will reutrn 0
    - now we perfom traversal , we reached a node now we  will evaluate the node which we current standing dose this node is greater then max if greater then max then we can add in result and update our max value
    - then we will traverse the left side of the tree  
    - then we will traverse the right side of the tree  
    - and sum up with the result and return the final

     */
  
   return dfs(root, root.val);


};

function dfs(node,maxVal){
    if(node === null){
        return 0
    }

    let result = node.val >=maxVal ? 1 :0 ;
    maxVal = Math.max(maxVal, node.val);

    let leftGoodNodeCount = dfs(node.left,maxVal);
    let rightGoodNodeCount = dfs(node.right,maxVal);

    result = result + leftGoodNodeCount +rightGoodNodeCount
    return result;
}
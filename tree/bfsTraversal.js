/*
Breadth First Traversal 
for search just check that it match before putting in the Queue

*/

// class treeNode {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

const breadthFirstTraversal = (root) => {
  if (root === null) {
    console.log("root is null");
    return values; // depend on you problem statemnet some want null some want empty array[]
  }

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift(); //point of optimization
    values.push(node.data);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return values;
};

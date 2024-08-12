/*
Depth First Traversal 
for search just check that it match before putting in the stack

*/

// class treeNode {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

const depthFirstTraversal = (root) => {
  const values = [];
  const stack = [root];
  if (root === null) {
    console.log("root is null");
    return null; // depend on you problem statemnet some want null some want empty array[]
  }

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.data);
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== nulll) {
      stack.push(node.left);
    }
  }
  return values;
};

const rescursiveDFSTraversal = (root) => {
  if (root === null) {
    console.log("root is null");
    return values; // depend on you problem statemnet some want null some want empty array[]
  }
  const leftValues = rescursiveDFSTraversal(root.left);
  const rightValues = rescursiveDFSTraversal(root.right);
  // return [root.key, leftValues, rightValues];
  return [root.key, ...leftValues, ...rightValues];
};

class BSTNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new BSTNode(data);

    if (this.root === null) {
      this.root = newNode; // Corrected the reference to newNode
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    // if data of newNode is small or equal to the root node
    if (newNode.data <= root.data) {
      // move to the left side of the root node and check if the left node exists
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data);
    } else {
      // Case 1: Node with no children (leaf node)
      if (node.left === null && node.right === null) {
        return null;
      }
      // Case 2: Node with only one child
      else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      // Case 3: Node with two children
      else {
        // Find the minimum node in the right subtree
        let tempNode = this.findMinNode(node.right);
        node.data = tempNode.data;
        node.right = this.deleteNode(node.right, tempNode.data);
      }
    }
    return node;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inorderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }

  inOrder(node, result) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.data);
      this.inOrder(node.right, result);
    }
  }

  preorderTraversal() {
    const result = [];
    this.preOrder(this.root, result);
    return result;
  }

  preOrder(node, result) {
    if (node !== null) {
      result.push(node.data);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  postorderTraversal() {
    const result = [];
    this.postOrder(this.root, result);
    return result;
  }

  postOrder(node, result) {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.preOrder(node.right, result);
      result.push(node.data);
    }
  }

  bfsTreesum(root) {
    // ask interviewer which traversal to use bfs or dfs

    // as of know bfs will use

    if (root === null) {
      return 0;
    }

    const queue = [root];
    let sum = 0;

    while (queue.length > 0) {
      const node = queue.shift();
      sum += node.data;

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    return sum;
  }

  dfsTreesum(root) {
    // ask interviewer which traversal to use bfs or dfs

    // as of know dfs will use

    if (root === null) {
      return 0;
    }

    return root.data + this.dfsTreesum(root.left) + this.dfsTreesum(root.right);
  }
}

const tree = new BinarySearchTree();

tree.insert(15);
tree.insert(9);
tree.insert(19);
tree.insert(4);
tree.insert(12);
tree.insert(18);
tree.insert(30);
console.log(tree.inorderTraversal());

tree.delete(30);
console.log("After Deleteion");
console.log(tree.inorderTraversal());
// console.log(tree.preorderTraversal());
// console.log(tree.postorderTraversal());

console.log("Sum of tree values using BFS =", tree.bfsTreesum(tree.root));
console.log("Sum of tree values using DFS =", tree.dfsTreesum(tree.root));

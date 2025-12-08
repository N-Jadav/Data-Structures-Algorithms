// Inorder traversal visits nodes in the order: Left -> Root -> Right
// This results in a sorted list for a Binary Search Tree.
// 1. Recursively traverse the left subtree.
// 2. Visit the current node (add its data to the result).
// 3. Recursively traverse the right subtree.


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }
    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  inorderTraversal() {
    const result = [];

    if (this.left) {
      result.push(...this.left.inorderTraversal());
    }
    result.push(this.data);

    if (this.right) {
      result.push(...this.right.inorderTraversal());
    }

    return result;
  }
}
module.exports = Node;

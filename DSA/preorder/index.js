// Preorder traversal visits nodes in the order: Root -> Left -> Right
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

  preorderTraversal() {
    const result = [this.data];

    if (this.left) {
      result.push(...this.left.preorderTraversal());
    }

    if (this.right) {
      result.push(...this.right.preorderTraversal());
    }

    return result;
  }
}
module.exports = Node;

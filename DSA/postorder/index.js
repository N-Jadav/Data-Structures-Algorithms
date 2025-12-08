// Postorder traversal visits nodes in the order: Left -> Right -> Root

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

  postorderTraversal() {
    const result = [];

    if (this.left) {
      result.push(...this.left.postorderTraversal());
    }

    if (this.right) {
      result.push(...this.right.postorderTraversal());
    }

    result.push(this.data);

    return result;
  }

}
module.exports = Node;

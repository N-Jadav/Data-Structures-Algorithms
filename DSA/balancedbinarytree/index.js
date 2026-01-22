class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    height(node) {
        if (node == null) {
            return 0;
        }
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    isBalanced(node) {
        if (node == null) {
            return true;
        }
        const lHeight = this.height(node.left);
        const rHeight = this.height(node.right);

        if (Math.abs(lHeight - rHeight) > 1) {
            return false;
        }
        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }
}

module.exports = Node;
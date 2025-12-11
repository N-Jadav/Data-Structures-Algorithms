class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data)
        }
        else if (data < this.data) {
            this.left = new Node(data)
        }
        if (data > this.data && this.right) {
            this.right.insert(data)
        }
        else if (data > this.data) {
            this.right = new Node(data)
        }
    }

    maxHeight(root) {
        if (root == null) {
            return -1
        }

        let queue = [root];
        let height = 0;

        while (queue.length) {
            let leversize = queue.length;

            for (let i = 0; i < leversize; i++) {
                let curr = queue.shift();
                if (curr.left) {
                    queue.push(curr.left)
                }
                if (curr.right) {
                    queue.push(curr.right)
                }

            }
            height++;
        }
        return height - 1;
    }

    maxHeightRecursion(root) {
        if (root == null) {
            return -1;
        }

        let lHeight = this.maxHeightRecursion(root.left);
        let rHeight = this.maxHeightRecursion(root.right);

        return Math.max(lHeight, rHeight) + 1;
    }
}

module.exports = Node;

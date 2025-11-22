// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null
        }
        let node = this.head;
        while (node.next) {
            node = node.next
        }
        return node;
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return
        }
        if (!this.head.next) {
            return this.head = null
        }
        let prev = this.head;
        let next = this.head.next;
        while (next.next) {
            prev = next;
            next = next.next
        }
        prev.next = null
    }

    insertLast(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next
        }
        lastNode.next = newNode
        return
    }

    getAt(index) {
        if (!this.head) {
            return null
        }
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node
            }
            counter++;
            node = node.next
        }
        return null
    }

    removeAt(index) {
        if (!this.head) {
            return
        }
        if (index == 0) {
            return this.head = this.head.next
        }
        let node = this.head;
        let counter = 0;
        while (node && counter < index - 1) {
            node = node.next;
            counter++;
        }
        if (!node || !node.next) {
            return;
        }
        node.next = node.next.next;

    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }
        if (index == 0) {
            this.head = new Node(data, this.head)
            return
        }
        let prev = this.head;
        let counter = 0
        while (prev && prev.next && counter < index - 1) {
            prev = prev.next;
            counter++;
        }
        prev.next = new Node(data, prev.next)
    }

    forEach(fn) {
        let node = this.head;
        while (node) {
            fn(node)
            node = node.next
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

    reverse() {
        if (!this.head || !this.head.next) {
            return
        }
        let temp = this.head;
        let stack = []
        while (temp != null) {
            stack.push(temp)
            temp = temp.next
        }

        if (stack.length) {
            this.head = stack.pop()
            temp = this.head
            while (stack.length > 0) {
                temp.next = stack.pop()
                temp = temp.next
            }
            temp.next = null
        }
        return this.head

    }

    reverse1() {
        if (!this.head || !this.head.next) {
            return
        }
        let curr = this.head;
        let prev = null;
        let next
        while (curr != null) {
            next = curr.next;
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
        return

    }
}

module.exports = { Node, LinkedList };

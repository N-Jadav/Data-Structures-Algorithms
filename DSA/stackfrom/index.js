// Implement a stack using a linkedList and an array

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackFrom {
    top = null
    constructor() {
        this.data = [];
    }

    push(data) {
        let temp = new Node(data);
        temp.next = this.top;
        this.top = temp;
    }

    pop() {
        if (this.top === null) {
            return null;
        }
        let temp = this.top;
        this.top = this.top.next;
        return temp.data;
    }

    peek() {
        return this.top.data;
    }
}

module.exports = StackFrom;

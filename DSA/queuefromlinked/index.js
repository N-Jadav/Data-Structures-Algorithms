class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class myQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (!this.front) {
            return null;
        }
        const value = this.front.value;
        this.front = this.front.next;
        return value;
    }
}

module.exports = myQueue;
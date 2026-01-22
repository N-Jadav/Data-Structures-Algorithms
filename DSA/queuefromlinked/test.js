const Queue = require('./index');

test('Queue is a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to the queue', () => {
    const q = new Queue();
    expect(() => {
        q.enqueue(1);
    }).not.toThrow();
});

test('can remove elements from the queue', () => {
    const q = new Queue();
    expect(() => {
        q.enqueue(1);
        q.dequeue();
    }).not.toThrow();
});

test('Order of elements is maintained', () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
});

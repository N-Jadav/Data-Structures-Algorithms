const Node = require('./index');

test('Node is a class', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can check if it is balanced', () => {
    const n = new Node(10);
    expect(n.isBalanced(n)).toEqual(true);
});

test('Balanced tree returns true', () => {
    const n = new Node(10);
    n.left = new Node(5);
    n.right = new Node(15);
    n.left.left = new Node(2);
    n.left.right = new Node(7);
    n.right.left = new Node(12);
    n.right.right = new Node(17);
    expect(n.isBalanced(n)).toEqual(true);
});

test('Unbalanced tree returns false', () => {
    const n = new Node(10);
    n.left = new Node(5);
    n.left.left = new Node(2);
    n.left.left.left = new Node(1);
    expect(n.isBalanced(n)).toEqual(false);
});

test('Another unbalanced tree returns false', () => {
    const n = new Node(10);
    n.right = new Node(15);
    n.right.right = new Node(20);
    n.right.right.right = new Node(25);
    expect(n.isBalanced(n)).toEqual(false);
});

const Node = require('./index');

test('Node is a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
});

test('maxHeight function exists', () => {
    expect(typeof Node.prototype.maxHeight).toEqual('function');
});

test('returns 0 for single node (edge count)', () => {
    const node = new Node(10);
    expect(node.maxHeight(node)).toEqual(0);
});

test('returns correct height for balanced tree', () => {
    const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    //       10
    //      /  \
    //     5    15
    //    /      \
    //   0        20
    expect(node.maxHeight(node)).toEqual(2);
});

test('returns correct height for unbalanced tree', () => {
    const node = new Node(10);
    node.insert(15);
    node.insert(20);
    node.insert(25);
    // 10
    //   \
    //    15
    //      \
    //       20
    //         \
    //          25
    expect(node.maxHeight(node)).toEqual(3);
});

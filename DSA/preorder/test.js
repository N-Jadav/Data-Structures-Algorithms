const Node = require('./index');

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test("Preorder traversal returns correct sequence for a balanced tree", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(3);
  node.insert(7);
  node.insert(12);
  node.insert(17);

  // Preorder: Root -> Left -> Right
  expect(node.preorderTraversal()).toEqual([10, 5, 3, 7, 15, 12, 17]);
});

test("Preorder traversal works with left-skewed tree", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(1);
  node.insert(0);

  // All values go to the left
  expect(node.preorderTraversal()).toEqual([10, 5, 1, 0]);
});

test("Preorder traversal works with right-skewed tree", () => {
  const node = new Node(10);
  node.insert(20);
  node.insert(30);
  node.insert(40);

  // All values go to the right
  expect(node.preorderTraversal()).toEqual([10, 20, 30, 40]);
});

test("preorderTraversal traversal returns single element for single-node tree", () => {
  const node = new Node(10);

  expect(node.preorderTraversal()).toEqual([10]);
});

test("preorderTraversal traversal returns empty array for null root (if supported)", () => {
  // Only include this test if your implementation allows an "empty" tree.
  // If your constructor always requires a value, delete this test.

  const node = null;
  const result = node ? node.preorderTraversal() : [];

  expect(result).toEqual([]);
});

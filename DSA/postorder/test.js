const Node = require('./index');

test("Postorder traversal returns correct sequence for a balanced tree", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(3);
  node.insert(7);
  node.insert(12);
  node.insert(17);

  // Postorder: Left -> Right -> Root
  expect(node.postorderTraversal()).toEqual([3, 7, 5, 12, 17, 15, 10]);
});

test("Postorder traversal works for left-skewed tree", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(1);
  node.insert(0);

  // All nodes are on the left: Postorder = bottom → up → root
  expect(node.postorderTraversal()).toEqual([0, 1, 5, 10]);
});

test("Postorder traversal works for right-skewed tree", () => {
  const node = new Node(10);
  node.insert(20);
  node.insert(30);
  node.insert(40);

  expect(node.postorderTraversal()).toEqual([40, 30, 20, 10]);
});

test("Postorder traversal returns single element for a single-node tree", () => {
  const node = new Node(10);

  expect(node.postorderTraversal()).toEqual([10]);
});

const Node = require('./index');

test("Inorder traversal returns correct sequence for a balanced tree", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(3);
  node.insert(7);
  node.insert(12);
  node.insert(17);

  // Inorder: Left -> Root -> Right
  expect(node.inorderTraversal()).toEqual([3, 5, 7, 10, 12, 15, 17]);
});

test("Inorder traversal works for left-skewed tree", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(1);
  node.insert(0);

  // Sorted in ascending order
  expect(node.inorderTraversal()).toEqual([0, 1, 5, 10]);
});

test("Inorder traversal works for right-skewed tree", () => {
  const node = new Node(10);
  node.insert(20);
  node.insert(30);
  node.insert(40);

  expect(node.inorderTraversal()).toEqual([10, 20, 30, 40]);
});

test("Inorder traversal returns single element for single-node tree", () => {
  const node = new Node(10);

  expect(node.inorderTraversal()).toEqual([10]);
});

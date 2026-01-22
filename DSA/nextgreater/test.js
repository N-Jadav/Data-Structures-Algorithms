const nextGreaterElement = require("./index");

test("nextGreaterElement function exists", () => {
  expect(typeof nextGreaterElement).toEqual("function");
});

test("next greater elements for [4,5,2,10,8]", () => {
  expect(nextGreaterElement([4, 5, 2, 10, 8])).toEqual([5, 10, 10, -1, -1]);
});

test("next greater elements for [2,7,3,5,4,6,8]", () => {
  expect(nextGreaterElement([2, 7, 3, 5, 4, 6, 8])).toEqual([
    7, 8, 5, 6, 6, 8, -1,
  ]);
});

test("next greater elements for [1,1,1,1]", () => {
  expect(nextGreaterElement([1, 1, 1, 1])).toEqual([-1, -1, -1, -1]);
});

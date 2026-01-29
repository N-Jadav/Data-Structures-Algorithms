const threeSum = require("./index");

test("threeSum", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
});

test("threeSum", () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
});

test("threeSum", () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});

test("threeSum", () => {
    expect(threeSum([-2, 0, 1, 1, 2])).toEqual([[-2, 0, 2], [-2, 1, 1]]);
});
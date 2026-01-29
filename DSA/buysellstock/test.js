const buySellStock = require("./index");

test("buySellStock", () => {
    expect(buySellStock([7, 1, 5, 3, 6, 4])).toBe(5);
});

test("buySellStock", () => {
    expect(buySellStock([7, 6, 4, 3, 1])).toBe(0);
});

test("buySellStock", () => {
    expect(buySellStock([1, 2, 3, 4, 5])).toBe(4);
});


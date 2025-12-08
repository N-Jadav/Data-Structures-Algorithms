const missingNumber = require('./index');

test('missingNumber function exists', () => {
    expect(missingNumber).toBeDefined();
});

test('finds missing number in sorted array', () => {
    expect(missingNumber([1, 2, 4, 5])).toEqual(3);
});

test('finds missing number in unsorted array', () => {
    expect(missingNumber([5, 2, 4, 1])).toEqual(3);
});

test('finds missing number when it is the first number', () => {
    expect(missingNumber([2, 3, 4, 5])).toEqual(1);
});

test('finds missing number when it is the last number', () => {
    expect(missingNumber([1, 2, 3, 4])).toEqual(5);
});

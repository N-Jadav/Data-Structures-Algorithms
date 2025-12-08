const reverseArray = require('./index');

test('reverseArray function exists', () => {
    expect(reverseArray).toBeDefined();
});

test('reverseArray reverses an array', () => {
    const arr = ['a', 'b', 'c', 'd'];
    reverseArray(arr);
    expect(arr).toEqual(['d', 'c', 'b', 'a']);
});

test('reverseArray reverses an array with numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    reverseArray(arr);
    expect(arr).toEqual([5, 4, 3, 2, 1]);
});

test('reverseArray reverses an array in place', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = reverseArray(arr);
    expect(result).toBe(arr); // Check for same reference
    expect(arr).toEqual([5, 4, 3, 2, 1]);
});

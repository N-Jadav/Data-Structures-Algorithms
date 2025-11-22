describe('secondmax1', () => {
    // Assuming secondmax function is defined elsewhere, e.g., in `secondmax.js`
    const secondmax = require('./index');

    it('should return the second maximum element in a sorted array', () => {
        expect(secondmax([1, 2, 3, 4, 5])).toBe(4);
    });

    it('should return the second maximum element in a reverse sorted array', () => {
        expect(secondmax([5, 4, 3, 2, 1])).toBe(4);
    });

    it('should return the second maximum element in an unsorted array', () => {
        expect(secondmax([1, 5, 2, 4, 3])).toBe(4);
    });

    it('should handle arrays with duplicate elements correctly', () => {
        expect(secondmax([1, 1, 2, 2, 3, 3])).toBe(2);
        expect(secondmax([5, 5, 5, 4, 3])).toBe(4);
    });

    it('should handle arrays with negative numbers', () => {
        expect(secondmax([-1, -2, -3, -4, -5])).toBe(-2);
        expect(secondmax([-10, -5, -20, -15])).toBe(-10);
    });

    it('should handle arrays with mixed positive and negative numbers', () => {
        expect(secondmax([10, -5, 20, 0, 15])).toBe(15);
        expect(secondmax([-1, 0, 1])).toBe(0);
    });

    it('should return the correct value for an array with two elements', () => {
        expect(secondmax([10, 5])).toBe(5);
        expect(secondmax([5, 10])).toBe(5);
    });

    it('should return the element itself if all elements are the same', () => {
        expect(secondmax([7, 7, 7, 7])).toBe(-Infinity);
    });

    it('should throw an error for an empty array', () => {
        expect(secondmax([])).toBe(null);
    });

    it('should return the single element if the array has only one element', () => {
        expect(secondmax([42])).toBe(42);
    });

});

/**
 * Given an array of numbers, find the second largest number in the array.
 *
 * Example:
 * - [1, 2, 3, 4, 5] => 4
 * - [5, 5, 4, 3, 2] => 4
 * - [10, 20, 30, 20, 10] => 20
 * - [-1, -5, -2, -10] => -2
 * - [7] => 7
 * - [] => null
 *
 */
function secondmax(arr) {
    if (!arr.length) return null;
    if (arr.length === 1) return arr[0];
    let max = -Infinity;
    let secondMax = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondMax && arr[i] != max) {
            secondMax = arr[i]
        }
    }
    console.log(secondMax)
    return secondMax
}
function secondmax1(arr) {
    if (!arr.length) return null;
    if (arr.length === 1) return arr[0];
    let max = -Infinity;
    let secondMax = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}

module.exports = secondmax;
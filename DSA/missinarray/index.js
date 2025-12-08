function missingNumber1(arr) {

    let n = arr.length + 1;
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - arraySum;
}

function missingNumber(arr) {
    let xor1 = 0; // XOR of 1..n
    let xor2 = 0; // XOR of array elements
    for (let i = 0; i < arr.length; i++) {
        xor2 ^= arr[i];
    }
    for (let i = 1; i <= arr.length + 1; i++) {

        xor1 ^= i;
    }
    return xor1 ^ xor2;
}


module.exports = missingNumber;
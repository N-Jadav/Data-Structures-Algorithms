function reversearray(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return;
    }
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

module.exports = reversearray;
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt2(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

function reverseInt(n) {
    let reversed = 0;
    let abs = Math.abs(n);
    while (abs !== 0) {
        reversed = reversed * 10 + abs % 10;
        console.log(reversed);
        abs = Math.floor(abs / 10);
        console.log(abs);
    }
    return reversed * Math.sign(n);
}

module.exports = reverseInt;

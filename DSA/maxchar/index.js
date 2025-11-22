// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max = 0;
    let charmax = ''
    let maxChar = {};
    for (let char of str) {
        maxChar[char] ? maxChar[char]++ : maxChar[char] = 1;
    }
    for (let char in maxChar) {
        if (maxChar[char] > max) {
            max = maxChar[char];
            charmax = char;
        }
    }
    return charmax;
}

module.exports = maxChar;

function firstUniqueChar1(str) {
    let n = str.length;
    for (let i = 0; i < n; i++) {
        let found = false;
        for (let j = 0; j < n; j++) {
            if (i !== j && str[i] === str[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            return str[i];
        }
    }
    return null;
}

function firstUniqueChar(str) {
    const MAX_CHAR = 26;
    let vis = new Array(MAX_CHAR).fill(-1);

    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        if (vis[index] === -1) {
            // Store the index when character is first seen
            vis[index] = i;
        } else {
            // Mark character as repeated
            vis[index] = -2;
        }
    }

    let idx = -1;

    // Find the smallest index of the non-repeating characters
    for (let i = 0; i < MAX_CHAR; i++) {
        if (vis[i] >= 0 && (idx === -1 || vis[i] < vis[idx])) {
            idx = i;
        }
    }

    return idx === -1 ? null : str[vis[idx]];
}

function firstUniqueChar2(str) {
    const charMap = {};

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char of str) {
        if (charMap[char] === 1) {
            return char;
        }
    }

    return null;
}

module.exports = firstUniqueChar;

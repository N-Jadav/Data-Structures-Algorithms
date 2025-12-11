const firstUniqueChar = require('./index');

test('firstUniqueChar function exists', () => {
    expect(typeof firstUniqueChar).toEqual('function');
});

test('returns the first unique character', () => {
    expect(firstUniqueChar('dddeeefggghhh')).toEqual('f');
});

test('returns the first unique character when it is at the end', () => {
    expect(firstUniqueChar('aabbc')).toEqual('c');
});

test('returns the first unique character when it is at the start', () => {
    expect(firstUniqueChar('abbcc')).toEqual('a');
});

test('returns null if no unique character exists', () => {
    expect(firstUniqueChar('aabbcc')).toEqual(null);
});

test('returns null for empty string', () => {
    expect(firstUniqueChar('')).toEqual(null);
});

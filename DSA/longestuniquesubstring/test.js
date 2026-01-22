const longestUniqueSubString = require('./index');

test('longestUniqueSubString function exists', () => {
    expect(typeof longestUniqueSubString).toEqual('function');
});

test('"abcabcbb" is the longest unique substring', () => {
    expect(longestUniqueSubString('abcabcbb')).toEqual(3);
});

test('"bbbbb" is the longest unique substring', () => {
    expect(longestUniqueSubString('bbbbb')).toEqual(1);
});

test('"pwwkew" is the longest unique substring', () => {
    expect(longestUniqueSubString('pwwkew')).toEqual(3);
});
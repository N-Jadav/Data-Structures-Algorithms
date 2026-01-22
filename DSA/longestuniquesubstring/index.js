function longestUniqueSubstring1(s) {
  let n = s.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let vis = new Array(26).fill(false);
    for (let j = i; j < n; j++) {
      if (vis[s.charCodeAt(j) - "a".charCodeAt(0)] == true) {
        break;
      } else {
        res = Math.max(res, j - i + 1);
        vis[s.charCodeAt(j) - "a".charCodeAt(0)] = true;
      }
    }
  }
  return res;
}

function longestUniqueSubstring2(s) {
  if (s.length == 0 || s.length == 1) return s.length;
  let res = 0;
  let vis = new Array(26).fill(false);

  let left = 0;
  let right = 0;
  while (right < s.length) {
    while (vis[s.charCodeAt(right) - "a".charCodeAt(0)] == true) {
      vis[s[left].charCodeAt(0) - "a".charCodeAt(0)] = false;
      left++;
    }

    vis[s[right].charCodeAt(0) - "a".charCodeAt(0)] = true;
    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;
}

function longestUniqueSubstring(s) {
  const n =s.length;
  let res = 0;
  const lastIndex = new Array(26).fill(-1);

  let start = 0;
  for(let end =0; end < n; end++) {
    start = Math.max(start, lastIndex[s[end].charCodeAt(0) - 'a'.charCodeAt(0)] + 1);
    res = Math.max(res, end - start + 1);
    lastIndex[s[end].charCodeAt(0) - 'a'.charCodeAt(0)] = end;
  }
  return res;
}

module.exports = longestUniqueSubstring;

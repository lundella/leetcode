/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let store = new Array(n);

  function nCount (m) {
    if (store[m] > 0) { return store[m]; }

    if (m < 2) { return store[m] = 1; }

    return store[m] = nCount(m - 1) + nCount(m - 2);
  }

  return nCount(n);
};

module.exports = climbStairs; 
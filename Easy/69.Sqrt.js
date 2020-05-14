/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // return Math.floor(Math.sqrt(x));
  if (x < 2) {
    return x;
  }

  let start = 1;
  let end = x;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    let testAnswer = mid * mid;

    if (testAnswer == x) {
      return mid;
    } else if (testAnswer < x) {
      start = mid + 1;
    } else if (testAnswer > x) {
      end = mid;
    }
  }

  return start - 1;
};

module.exports = mySqrt;
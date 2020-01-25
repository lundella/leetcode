/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  function findIncreasePosition(digits, position) {
    if ((digits[position] === 9) && (position)) {
      digits[position] = 0;
      findIncreasePosition(digits, position - 1);
    } else {
      digits[position] += 1;
    }
  }

  findIncreasePosition(digits, (digits.length-1));
  let figure = digits.join('');
  let result = figure.toString().split('');

  return result;
};

module.exports = plusOne;
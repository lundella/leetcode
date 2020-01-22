/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let lastOne = digits[digits.length-1] + 1;

  if(lastOne >= 10) {
    let addElements = lastOne.toString().split("");

    digits.splice(digits.length-1, 1);
    digits = digits.concat(addElements);
  } else {
    digits[digits.length - 1] = lastOne;
  }

  return digits;
};

module.exports = plusOne;
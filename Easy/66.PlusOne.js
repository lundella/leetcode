/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let figure = digits.join('');
  console.log(figure);

  // figure = figure + 1;

  let result = figure.toString().split('');
  console.log(figure);

  return result;
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);

module.exports = plusOne;
// 6145390195186705543
// 6145390195186705000
// 9007199254740991
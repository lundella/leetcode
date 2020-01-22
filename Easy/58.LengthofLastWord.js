/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let wordArray = s.trim().split(" ");
  let lastWordPoint = 0;

  lastWordPoint = wordArray[wordArray.length-1].length;

  return lastWordPoint;
};

module.exports = lengthOfLastWord;
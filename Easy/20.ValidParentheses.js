/**
 * @param {string} s
 * @return {boolean}
 */

// ** RESULT **
// Runtime: 60 ms, faster than 39.03% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 34.1 MB, less than 51.67 % of JavaScript online submissions for Valid Parentheses.
var isValid = function (s) {
  const Brackets = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  let inputArray = s.split("");
  let stackBrackets = [];
  let interruption = false;
  let result = false;

  if(!s) {
    return true;
  }

  for(let i = 0; i < inputArray.length; i++) {
    if (stackBrackets.length && (inputArray[i] === Brackets[stackBrackets[stackBrackets.length - 1]])) {
      stackBrackets.pop();
    } else if (Brackets[inputArray[i]]) {
      stackBrackets.push(inputArray[i]);
    } else {
      interruption = true;
      break;
    }
  }

  if(interruption) {
    result = false;
  } else {
    result = stackBrackets.length ? false: true;
  }

  return result;
};

module.exports = isValid;
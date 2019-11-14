/**
 * @param {string} s
 * @return {boolean}
 */
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
    }

    if (Brackets[inputArray[i]]) {
      stackBrackets.push(inputArray[i]);
    }

    if ((i === 0) && !stackBrackets.length) {
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
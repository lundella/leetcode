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
  let result = false;

  if(!s) {
    return true;
  }

  // for(let i = 0; i < inputArray.length; i++) {
  //   let bracket = inputArray[i];

  //   if (stackBrackets.length && (bracket === Brackets[stackBrackets[stackBrackets.length - 1]])) {
  //     stackBrackets.pop();
  //   }

  //   console.log(i);
  //   if (Brackets[bracket]) {
  //     stackBrackets.push(bracket);
  //   }
  // }
  inputArray.forEach((bracket, index)=>{
    if (stackBrackets.length && (bracket === Brackets[stackBrackets[stackBrackets.length - 1]])) { 
      stackBrackets.pop();
    }

    if(Brackets[bracket]) {
      stackBrackets.push(bracket);
    }
  });
  result = stackBrackets.length? false: true;

  return result;
};

console.log(isValid("]()"));
module.exports = isValid;
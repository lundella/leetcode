/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let previousResult = "11";
  let sayResult = "";

  if(n == 1) {
    return "1";
  } else if(n == 2) {
    return "11";
  }

  for(var index = 2; index < n; index++) {
    let temp = previousResult[0];
    let count = 1;


    for (var order = 1; order < (previousResult.length + 1); order++) {
      if (previousResult[order] == temp) {
        count++;
      } else {
        sayResult += count;
        sayResult += temp;
        temp = previousResult[order];
        count = 1;
      }
    }
    previousResult = sayResult;
    sayResult = "";
    console.log(previousResult);
  }
  return previousResult;
};

module.exports = countAndSay;
/**
 * @param {string} s
 * @return {number}
 */

// ** RESULT **
// Runtime: 168 ms, faster than 14.01% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.8 MB, less than 51.06% of JavaScript online submissions for Roman to Integer.
var romanToInt = function(s) {
    const RomanSet = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    let result = 0;
    
    for(let i=0; i < s.length; i++) {
      if((i === 0) || (RomanSet[s[i]] <= RomanSet[s[i-1]])) {
        result += RomanSet[s[i]];
      } else {
        result += (RomanSet[s[i]] - 2 * RomanSet[s[i-1]]);
      }
    }

    return result;
};
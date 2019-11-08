/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let minStringLength = Number.MAX_VALUE;
  let shortestWord = "";
  let sameCharCount = 0;
  let removePoint = 0;

  if(!strs.length) {
    return "";
  }
  
  for (const [index, word] of strs.entries()) {
    if (!word) {
      return "";
    }

    if (word.length < minStringLength) {
      minStringLength = word.length;
      shortestWord = word;
      removePoint = index;
    }
  }
  strs.splice(removePoint, 1);

  for(let index=0; index < shortestWord.length; index++) {
    let count = 0;

    for(let i=0; i< strs.length; i++){
      if (strs[i][index] === shortestWord[index]) { 
        count++;
      } else {
        return shortestWord.substring(0, sameCharCount);;
      }
    }

    if(count == strs.length) {
      sameCharCount++;
    } 

    if (sameCharCount === shortestWord.length) {
      return shortestWord.substring(0, sameCharCount);
    }
  };
};

module.exports = longestCommonPrefix

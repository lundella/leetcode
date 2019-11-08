/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let minStringLength = Number.MAX_VALUE;
  let shortestWord = "";
  let sameCharCount = 0;

  if(!strs.length) {
    return "";
  }
  
  strs.forEach((word, index)=>{
    if(word.length < minStringLength) {
      minStringLength = word.length;
      shortestWord = word;
      removePoint = index;
    }
  })
  strs.splice(removePoint, 1);

  for(let index=0; index < shortestWord.length; index++) {
    let count = 0;
    strs.forEach((word) => {
      if (word[index] === shortestWord[index]) { 
        count++; 
      }
    })
    if (count == strs.length) {
      sameCharCount++;
    } else if(count < strs.length) {
      return shortestWord.substring(0, sameCharCount);
    } else {
      return "";
    };
  };

};

module.exports = longestCommonPrefix
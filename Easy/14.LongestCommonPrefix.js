/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let minStringLength = Number.MAX_VALUE;
  let shortestWord = "";
  
  strs.forEach((word, index)=>{
    if(word.length < minStringLength) {
      minStringLength = word.length;
      shortestWord = word;
      removePoint = index;
    }
  })
  strs.splice(removePoint, 1);

  

  
  // Array.prototype.forEach.call(shortestWord, (char)=>{
    
  // })

  return strs;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
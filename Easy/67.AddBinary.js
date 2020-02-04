/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let firstBinary = a.split('');
  let secondBinary = b.split('');
  let plusNextCount = 0;
  let result = [];

  let indexCount = (firstBinary.length > secondBinary.length) ? firstBinary.length: secondBinary.length;
  
  for(var index = indexCount-1; 0 <= index; index--) {
    console.log(parseInt(firstBinary[index]), secondBinary[index]);
    let firstAttr = parseInt(firstBinary[index]);
    let secondAttr = parseInt(secondBinary[index]);

    if(firstAttr && secondAttr) {
      console.log('all case : ', plusNextCount);
      if(plusNextCount) {
        result.unshift(1);
      } else {
        result.unshift(0);
      }
      plusNextCount = 1;
    } else if(firstAttr || secondAttr) {
      console.log('or case : ', plusNextCount);
      if(plusNextCount) {
        result.unshift(0);
        plusNextCount = 1;
      } else {
        result.unshift(1);
      }
    } else if(!firstAttr && !secondAttr) {
      console.log('empty case : ', plusNextCount);
      if(plusNextCount) {
        result.unshift(1);
      } else {
        result.unshift(0);
      }
    }
    console.log(result);
  }
  // result = result.join(',');

  
};

addBinary("1010", "1011");
module.exports = addBinary;
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function (a, b) {
//   let pointCount = (a.length > b.length) ? a.length : b.length;
//   let first = a.split('').reverse();
//   let second = b.split('').reverse();
//   let result = [];
  
//   for (let index = 0; index < pointCount; index++) {
//     if(!result[index]) {
//       if(first[index] || second[index]) {
//         result.push(1);
//       } else {
//         result.push(0);
//       }
//     } else {
//       if (first[index] || second[index]) {
//         result.push(0);
//       } else {
//         result.push(1);
//       }
//     }
//   }
// };

function addBinary (a, b) {
  let pointCount = (a.length > b.length) ? a.length : b.length;
  let result = [];
  let temp = 0;
  
  for(let index = 1; index <= pointCount ; index++) {
    let add = ((a[a.length - index]) ? parseInt(a[a.length - index]) : 0)
              + ((b[b.length - index]) ? parseInt(b[b.length - index]) : 0)
              + temp;

    if(add == 3) {
      temp = 1;
      result.splice(0, 0, 1);
    } else if(add == 2){
      temp = 1;
      result.splice(0, 0, 0);
    } else if (add == 1) {
      temp = 0;
      result.splice(0, 0, 1);
    } else {
      temp = 0;
      result.splice(0, 0, 0);
    }
  }
  if (temp) { result.splice(0, 0, 1);}

  return result.join('');
}
module.exports = addBinary;
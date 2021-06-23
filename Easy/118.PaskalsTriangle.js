/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  // 시간복잡도 n log n
  // 공간복잡도 배열 5개 n log n
  let pascal = [];
  // numRows 만큼 반복하며 배열 생성 O(n)
  for(let index = 0; index < numRows; index++) {
    if(!index) {
      // 첫번째 열은 1 생성
      pascal.push([1]);
    } else {
      // 두번째 열부터 
      let row = [];
        // 앞/뒤로 1 붙이기
      row.push(1);
      // 이전 열이 길이 2이상이면 순회하며 current + next 값 합산하여 배열 만들기 
      if(pascal.length > 1) {
        const prevRow = pascal[index-1];
        for(let factor = 0; factor < prevRow.length-1; factor++) {
          row.push((prevRow[factor] + prevRow[factor+1]));
        }
      }
      row.push(1);
      pascal.push(row);
    }
  }
  return pascal;
};

module.exports = generate;
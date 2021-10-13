/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // DP 문제
    // 저장된 배열에서 현재 인덱스+1,-1 요소 합 저장
    // O(n)
    let previusLayer = [];
    
    for(let layerIndex = 0; layerIndex <= rowIndex; layerIndex++) {
        if(!layerIndex) previusLayer = [1];
        let currentLayer = [];
        
        for(let index = 0; index <= layerIndex; index++) {
            if(!previusLayer[index-1] || !previusLayer[index]) {
                currentLayer.push(1);
            } else {
                currentLayer.push(previusLayer[index-1] + previusLayer[index]);
            }
        }
        previusLayer = currentLayer;
    }
    return previusLayer;
};
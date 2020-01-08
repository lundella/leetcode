/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let resultIndex = 0;
    for(var index = nums.length-1; index >= 0; index--) {
      if(nums[index] < target) {
        resultIndex = (index+1);
        break;
      }
    }
    return resultIndex;
};

module.exports = searchInsert;
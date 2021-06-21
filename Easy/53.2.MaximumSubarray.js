/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let target = 0;
    let currentMax = 0;
    
    nums.forEach((value, index) => {
      const max = (target)? Math.max((target + value), value): value

      if(!index) {
        currentMax = max;
      } else {
        currentMax = (max > currentMax)? max: currentMax;
      }
      target = max;
    })

    return currentMax;
};

module.exports = maxSubArray;
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let cur = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[cur]) {
      cur = cur + 1
      nums[cur] = nums[i]
    }
  }

  nums.splice(cur + 1);

  return nums;
};

module.exports = removeDuplicates
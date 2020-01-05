/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const recursiveRemoveElement = (index) => {
      if(nums[index] === val) {
        nums.splice(index, 1);
        recursiveRemoveElement(index);
      }
    }

    nums.forEach((value, index) => {
      recursiveRemoveElement(index);
    })
    return nums.length;
};

module.exports = removeElement;
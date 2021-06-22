/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) { 
  nums1.splice(m, nums1.length-m);
  nums1.splice(m, 0, ...nums2);

  nums1.sort((prev, next) => prev - next);

  return nums1;
};

module.exports = merge;
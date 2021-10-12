
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return convertToBST(nums, 0, nums.length - 1);
};

const convertToBST = (nums, left, right) => {
  if (left <= right) {
    let middle = Math.ceil((left + right) / 2);

    const node = new TreeNode(nums[middle]);

    node.left = convertToBST(nums, left, middle - 1);
    node.right = convertToBST(nums, middle + 1, right);

    return node;
  }

  return null;
}
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
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
  // 시간복잡도 O(n)
  const dfs = (start, end) => {
    if (start > end) return null;

    const mid = start + Math.floor((end - start) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = dfs(start, mid - 1);
    node.right = dfs(mid + 1, end);

    return node;
  }

  return dfs(0, nums.length-1);
};

console.log(sortedArrayToBST([-15, -10, -3, 0, 5, 9, 17]));
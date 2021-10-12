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
  // 0, 1, 2, 3, 4, 
  //       2          build (0, 2) : build (2, 4)
  //    1     3       build(0, 1) : build ()  
  //
  // left of 2 is 0 or 1


  const build = (curr, l, r) => {
    // base cases
    if (l > r || l < 0 || r >= nums.length || curr === null) return;

    // calculate mid 
    let mid = Math.floor((l + r) / 2);
    let newNode = new TreeNode(nums[mid]);

    // where does the new node go
    if (nums[mid] < curr.val) {
      curr.left = newNode;
      curr = curr.left;
    } else {
      curr.right = newNode;
      curr = curr.right;
    }
    // build on right side (mid + 1-> r)
    build(curr, mid + 1, r);

    // build on left side (l -> mid - 1)
    build(curr, l, mid - 1);



  }

  let start = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[start]);
  build(root, 0, start - 1);
  build(root, start + 1, nums.length - 1);

  return root;
};
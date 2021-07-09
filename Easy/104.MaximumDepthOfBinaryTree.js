/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Time Complexity O(n)
// Space Complexity O(n)
 function depthSearch(node) {
  let rightDepth = 0;
  let leftDepth = 0;
  let count = 0;
  
  if(node && node.val !== null) {
      count++
  }
  
  if(node && node.right) {
      rightDepth = depthSearch(node.right);
  }
  if(node && node.left) {
      leftDepth = depthSearch(node.left)
  }
  
  return count += rightDepth > leftDepth ? rightDepth: leftDepth;
}


var maxDepth = function(root) {
  return depthSearch(root);
};
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
 * @return {number[]}
 */
 function inorder(node) {
  let data = [];
  
  if(!node || !node.val) {
      return data;
  } else {
      node.left && (data = data.concat(inorder(node.left)));
      node.val && (data.push(node.val));
      node.right && (data = data.concat(inorder(node.right)));
      
      return data;
  }
}

var inorderTraversal = function(root) {  
  return inorder(root);
};
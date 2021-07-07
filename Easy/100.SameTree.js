/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 function inorder(first, second) {
    let leftResult = false;
    let rightResult = false;

    if(!first && !second) {
        return true;
    }

    if(first && second && first.val === second.val) {
        if(!first.left && !second.left) {
            leftResult = true;
        } else {
            leftResult = inorder(first.left, second.left); 
        }
        if(!first.right && !second.right) {
            rightResult = true;
        } else {
            rightResult = inorder(first.right, second.right); 
        }

        return (leftResult && rightResult);
    } else {
        return false;
    }
}

var isSameTree = function(p, q) {
  return inorder(p, q);
};
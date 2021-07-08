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
 * @return {boolean}
 */
 function ordering(node, reverse = false) {
  let list = [];
  let rightOrder = [];
  let leftOrder = [];

  if (!node) {
      list.push(node);
  } else {
      node.val && (list.push(node.val));
  }

  if (!node || node.right === null) {
      rightOrder.push(null);
  } else {
      rightOrder = ordering(node.right, reverse);
  }
  if (!node || node.left === null) {
      leftOrder.push(null);
  } else {
      leftOrder = ordering(node.left, reverse);
  }
  
  if(reverse) {
      list = [...list, ...rightOrder, ...leftOrder];
  } else {
      list = [...list, ...leftOrder, ...rightOrder];
  }

  return list;
}

var isSymmetric = function (root) {
const orderList = ordering(root.left);
const reverseList = ordering(root.right, true)
let result = true;
  
if(orderList.length !== reverseList.length) {
    result = false;
    return result;
}
  
for(let index=0; index < orderList.length; index++) {
  if (orderList[index] !== reverseList[index]) {
    result = false;
    break;
  }      
}

return result;
};
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
function preOrder(node) {
  let list = [];
  let rightOrder = [];
  let leftOrder = [];

  if (!node) {
    list.push(node);
  } else {
    node.val && (list.push(node.val));
  }
  if (node.right === null) {
    rightOrder.push(null);
  } else {
    rightOrder = preOrder(node.right);
  }
  if (node.left === null) {
    leftOrder.push(null);
  } else {
    leftOrder = preOrder(node.left);
  }

  return [...list, ...leftOrder, ...rightOrder];
}
function reversePreOrder(node) {
  let list = [];
  let rightOrder = [];
  let leftOrder = [];

  console.log('node is null', node);
  if (node === null) {
    console.log('node is null');
    list.push(node);
  } else {
    node.val && (list.push(node.val));
  }

  if (node.right === null) {
    rightOrder.push(null);
  } else {
    rightOrder = reversePreOrder(node.right);
  }
  if (node.left === null) {
    leftOrder.push(null);
  } else {
    leftOrder = reversePreOrder(node.left);
  }

  return [...list, ...rightOrder, ...leftOrder];
}
var isSymmetric = function (root) {
  const orderList = preOrder(root.left);
  const reverseList = reversePreOrder(root.right)

  let result = true;
  orderList.forEach((value, index) => {
    if (value !== reverseList[index]) {
      result = false;
    }
  })
  return result;
};
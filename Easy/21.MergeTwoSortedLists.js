/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let index1 = 0;
    let index2 = 0;
    let iterator = true;
    let result = [];

    while (iterator) {
      if (l2[index2] <= l1[index1] || l1[index1] === undefined) {
        result.push(l2[index2]);
        index2++;
      } else {
        result.push(l1[index1]);
        index1++;
      }
      iterator = ((index1+index2) < (l1.length+l2.length)) ? true : false;
    }

    return result;
};

module.exports = mergeTwoLists
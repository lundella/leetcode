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
  let value1 = l1;
  let value2 = l2;
  let iterator = true;
  let iterated = 0;
  let result = [];
  let returnformat = {};

  if(!value1 && !value2) {
    return returnformat;
  }

  while (iterator) {
    if (value2 && (value1 === null || value2.val <= value1.val)) {
      result.push(value2.val);

      value2 = value2.next;
    } else {
      result.push(value1.val);
      value1 = value1.next;
    }
    iterator = ((value1 === null) && (value2 === null)) ? false : true;
    iterated += 1;
  }

  for (let index = iterated-1; 0 <= index ; index--) {
    let tempObjectFormat = {
      val: result[index],
      next: null
    }

    if (!returnformat) {
      returnformat = tempObjectFormat;
    } else {
      tempObjectFormat.next = returnformat;
      returnformat = tempObjectFormat;
    }
  }
  return returnformat;
};

// console.log(mergeTwoLists({ val: 1, next: { val: 2, next: { val: 4, next: null } } },  { val: 1, next: { val: 3, next: { val: 4, next: null } } }))
module.exports = mergeTwoLists
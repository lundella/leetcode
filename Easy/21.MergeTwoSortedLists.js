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
    let iterated = 1;
    let result = [];
    let returneformat = {}

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

    for(let index = 0; index < iterated; index++) {
      let tempObjectFormat = {
        val: result[index],
        next: null
      }
      if(!returneformat.val) {
        returneformat = {
          val: result[index],
          next: null
        }
      } else if(returneformat.next === null){
        returneformat.next = {
          val: result[index],
          next: null
        }
      }
    }
    return result;
};

module.exports = mergeTwoLists

// Definition for singly-linked list.
function ListNode(val, next) {
 this.val = (val === undefined ? 0 : val)
 this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if(!head) {
    return head;
  }
  let currentNode = head;
  let nextNode = (head.next) ? head.next: null;
  let next = currentNode.next;

  while (next) {
    if (nextNode == null || currentNode == null) { break; }

    if (currentNode.value == nextNode.value) {
      currentNode.next = nextNode.next;
      nextNode = currentNode.next;
    } else {
      currentNode = nextNode;
    }
    next = (currentNode.next == null) ? false : true;
  }
  return head;
};

module.exports = deleteDuplicates;
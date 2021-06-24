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

 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function Tree() {
  this.root = null;

  this.insert = function(data) {
    let node = new TreeNode(data);
    
    if(!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while(current) {
      console.log("current ", current);
      if(current.left === null || current.left.val === undefined) {
        current.left = node;
        console.log('left current: ', current); 
        break;
      }
      current = current.left;
  
      if(current.right === null || current.right.val === undefined) {
        current.right = node;
        console.log("right current: ", current)
        break;
      }
      current = current.right;
    };
  };
}

 var inorderTraversal = function(root) {
  let tree = new Tree();

  tree.insert(1)
  tree.insert(null)
  tree.insert(2)
  tree.insert(3)

  console.log(tree);
};


inorderTraversal(1, null, 2)
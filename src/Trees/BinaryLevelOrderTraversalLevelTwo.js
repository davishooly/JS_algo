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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {

    //  traverse top level nodes
    const queue = [root];
    const output = [];

    if( !root){
        return [];
    }

//  adding level nodes to queue

    while(queue.length) {
        const temp = [];
        const size = queue.length;

        for( let i = 0; i < size; i++ ){
            const node = queue.shift();
            if(node.left){queue.push(node.left)}
            if(node.right){ queue.push(node.right)}
            temp.push(node.val);
        }

        // update node values
        if(temp.length ) {
            output.push(temp)
        }

    }

    return output.reverse();

};
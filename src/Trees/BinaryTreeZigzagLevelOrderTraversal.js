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
var zigzagLevelOrder = function(root) {

    const queue = [root];
    const output = [];
    let zigzagLevel = false;


    if(!root){ return []}

    while(queue.length) {
        // store temporary values on the same level
        const temp = [];
        const size = queue.length;

        for(let i = 0; i < size; i++) {
            const node = queue.shift();
            if(node.left){ queue.push(node.left)}
            if(node.right){ queue.push(node.right)}

            temp.push(node.val);

        }

        if(temp.length) {
            output.push(zigzagLevel ? temp.reverse() : temp);
        }

        // update zigzag  after level traversal.
        zigzagLevel = !zigzagLevel

    }

    return output;

};
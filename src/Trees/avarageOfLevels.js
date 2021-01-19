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
var averageOfLevels = function(root) {


    const queue = [root];

    const output = [];

    while(queue.length){
        //  store all node values in the current level
        const temp = [];
        const size = queue.length;

        //  iterate through all nodes in a level
        for(let i = 0; i < size ;i++){
            const node = queue.shift();
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
            temp.push(node.val);
        }

        const average = temp.reduce((curr,next) => curr + next) / temp.length;
        output.push(average)
    }

    return output;


};
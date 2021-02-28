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
 * @return {number}
 */
var rob = function(root) {

    if(!root) return 0;

    const levelsAmaount = [root.val];
    const queue = [root];

    const maxAmount = [];

    while(queue.length){
        let levelAmount = 0;
        const size = queue.length;

        for(let i = 0; i < size; i++){
            const node = queue.shift();
            if(node.left) {
                levelAmount+=node.left.val;
                queue.push(node.left)
            }
            if(node.right) {
                levelAmount+=node.right.val;
                queue.push(node.right)
            }
        }
        if(levelAmount) {
            levelsAmaount.push(levelAmount);
        }
    }

    maxAmount[0] = levelsAmaount[0];
    maxAmount[1] = Math.max(levelsAmaount[0], levelsAmaount[1]);

    for(let i = 2; i< levelsAmaount.length; i++){
        maxAmount[i]  = Math.max(levelsAmaount[i] + maxAmount[i - 2], maxAmount[i - 1]);
    }

    return maxAmount[maxAmount.length - 1];
};
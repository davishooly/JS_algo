//  find the length of a binary tree
const binaryTreeLength = (tree) => {

    const queue = [tree];
    let levelCounter = 0;

    while(queue.length){
        const size = queue.length;

        for(let i = 0; i < size; i++){
            const node = queue.shift();
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }

        levelCounter++;

    }

    return levelCounter;
};


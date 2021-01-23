class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
/**
 * @param {Node} head
 */
const copyRandomList = (head) => {
    if(head === null){
        return null;
    }
    let current = head;
    while(current !== null){
        let clone = new Node(current.val);
        clone.next = current.next;
        current.next = clone;
        current = current.next.next;
    }
    current = head;
    let cloned = current.next;
    let clonedNext = cloned;
    while(current !== null){
        if(current.random !== null){
            clonedNext.random = current.random.next;
        }
        current = current.next !== null ? current.next.next : null;
        clonedNext = clonedNext.next !== null ? clonedNext.next.next : null;
    }
    clonedNext = cloned;
    current = head;
    while(current !== null && clonedNext !== null){
        current.next = current.next !== null ? current.next.next : null;
        clonedNext.next = clonedNext.next !== null ? clonedNext.next.next : null;
        current = current.next;
        clonedNext = clonedNext.next;
    }
    return cloned;
};
/**
 *
 * @param {Node} head
 */
const print = (head) => {
    if(head === null){
        return;
    }
    console.log("["+head.val + ","+(head.random !== null ? head.random.val : 'null')+','+","+(head.next !== null ? head.next.val : 'null')+']');
    print(head.next);
}
let header = new Node(7);
header.next = new Node(13);
header.next.next = new Node(11);
header.next.next.next = new Node(10);
header.next.next.next.next = new Node(1);
header.next.random = header;
header.next.next.random = header.next.next.next.next;
header.next.next.next.random = header.next.next;
const answer = copyRandomList(header);
console.log("\n\n\n\n");
print(header);
// Implementing a singly linked list


// node constructor
class Node {
    constructor(data, next = null) {
        this.value = data
        this.next = next
    }
}

// singly linked list constructor
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertAtHead(data){
        const node = new Node(data, this.head)
        this.head = node;
        this.size++
    }

    insertAtTail(data) {
        if (!this.head) {
            this.insertAtHead(data)
        } else {
            const node = new Node(data, this.head)
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next
            }
            tail.next = node;
            this.size++
        }

    }

    insertAtRandomPosition(data, position){
        if (!this.head || position === 0) {
            this.insertAtHead(data)
        }
        else {
            const node = new Node(data, this.head)
            let count = 0;
            let prev, curr = this.head;

        //update count update the current position to get the insertion point
            while( count < position){
                prev = curr;
                count++
                curr = curr.next
            }
            // update the prev and curr node references
            //point to our current node
            prev.next = node
            // node point to the next node
            node.next = curr
            this.size++
        }

    }
}


const linkedList = new LinkedList()
linkedList.insertAtHead(300)
linkedList.insertAtHead(200)
linkedList.insertAtHead(100)
linkedList.insertAtTail(50)
linkedList.insertAtRandomPosition(400, 1)


// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//     Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class Node {
    constructor(data, next = null){
        this.value = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    insertTohead(data){
        this.head = new Node(data, this.head)
    }
}

const l1 = new LinkedList()
l1.insertTohead(2)
l1.insertTohead(4);
l1.insertTohead(3);


const l2 = new LinkedList()

l2.insertTohead(5)
l2.insertTohead(6);
l2.insertTohead(4);


const extractNumbers = (linkedList) => {
    let numbers = []
    let tail = linkedList.head
    numbers.push(tail.value)
    while(tail.next) {
        tail = tail.next
        numbers.push(tail.value)
    }
    return numbers;
}


const addTwoNumbers = function(l1, l2) {
    const list1 = Number(extractNumbers(l1).join(''));
    const list2 = Number(extractNumbers(l2).join(''))
    const result = (list1 + list2).toString().split('');
    const linkedList = new LinkedList()
    result.forEach(num => {
        linkedList.insertTohead(Number(num))
    })

    return linkedList

};


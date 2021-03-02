function Node(data) {
    this.data = data;
    this.next = null;
}

// recursion approach
function append(listA, listB) {
    // Your code goes here.
    // Remember to return the head of the list.

    if(!listA && !listB) return null;
    if(!listA || !listB) return  listA || listB;

    let head = listA;
    head.next= append(head.next,listB);
    return head;
}

// iteration approach

function appendIteration(listA, listB) {
    // Your code goes here.
    // Remember to return the head of the list.

    if(!listA && !listB) return null;
    if(!listA || !listB) return  listA || listB;

    let head = listA;
     while(head.next) {
         head = head.next
     }

     head.next = listB;

    return listA;
}



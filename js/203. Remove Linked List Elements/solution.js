class Node{
    constructor(val){
        this.val =  val
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    add(val){
        const node =  new Node(val)

        if(this.head == null){
            this.head = node
        }else{
            let current = this.head

            while(current.next != null){
                current = current.next
            }
            current.next = node
        }
    }

    getValues(){
        let current = this.head

        while(current != null){
            console.log(current.val)
            current = current.next
        }
    }
}


/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) { 
    if (head == null) {
        return null;
    }

    while(head != null && head.val == val){
        head = head.next
    }

    let current = head
    // console.log(current)
    
    while (current!= null && current.next !== null) {
        if(current.next.val === val){
            current.next = current.next.next
        }else{
            current = current.next
        }
    }
    
    
    return head;
};

const list = new LinkedList()
// list.add(2)
list.add(1)
list.add(1)
list.add(1)
list.add(2)

// list.add()
// list.getValues()

removeElements(list.head,1)
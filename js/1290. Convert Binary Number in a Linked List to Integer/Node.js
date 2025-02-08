export class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

export class LinkedList{
    constructor(){
        this.head = null
    }

    add(val){
        let node = new Node(val) 

        if(this.head === null){
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
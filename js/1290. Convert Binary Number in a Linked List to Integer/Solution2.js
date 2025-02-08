import {LinkedList} from './Node.js'

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let current = head

    let answ = ''
    while(current != null){
        answ  += String(current.val) 

        current = current.next
    }

    // console.log(answ)
    return parseInt(answ,2)
};



let head = new LinkedList()
head.add(0)
head.add(0)
head.add(1)


let result = getDecimalValue(head.head)

console.log(result)
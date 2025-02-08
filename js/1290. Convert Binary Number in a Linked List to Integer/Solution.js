import {LinkedList, Node} from './Node.js'


/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let current = head

    let answ = 0
    while(current != null){
        answ  = answ * 2
        answ += current.val

        current = current.next
    }

    return answ
};



let head = new LinkedList()
head.add(0)
head.add(1)
head.add(0)


getDecimalValue(head.head)

head.getValues()
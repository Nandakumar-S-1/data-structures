class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head =null
    }

    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            return 
        }
        let curr=this.head
        while(curr.next){
            curr=curr.next
        }
        curr.next=node
    }
}
console.log(list.append(10));

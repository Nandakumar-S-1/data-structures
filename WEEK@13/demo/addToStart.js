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

    prepend(value){
        let node=new Node(value)
        this.next=this.head
        this.head=node
    }
}


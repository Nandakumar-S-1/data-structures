class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }
    
    getSize(){
        return this.size
    }

}

let list=new LinkedList()
console.log(list.getSize());

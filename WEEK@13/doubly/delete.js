class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }

    delete(value){
        if(this.isEmpty()){
            return "list is empty"
        }
        let curr=this.head
        while(curr){
            if(curr.value==value){
                if(curr==this.head){
                    this.head=this.head.next
                    if(this.head){
                        this.head.prev=null
                    }
                }else if(curr==this.tail){
                    this.tail=this.tail.prev
                    this.tail.next=null;
                }else{
                    curr.prev.next=curr.next
                    curr.next.prev=curr.prev
                }
                this.size--
                return `The value ${value} has been deleted`
            }
            curr=curr.next
        }
        return "value not found"
    }

    print(){
        if(this.isEmpty()){
            return "list is empty"
        }
        let curr=this.head
        let listVals=''
        while(curr){
            listVals += `${curr.value} `
            curr=curr.next
        }
        return listVals
    }


    reverse(){
       let curr=this.head
       let temp=null

       while(curr){
        temp=curr.prev
        curr.prev=curr.next
        curr.next=temp
        curr=curr.prev
       }
       if(temp){
        this.tail=this.head
        this.head=temp.prev
       }
    }

}

let list =new DoublyLinkedList()

list.prepend(5)
// console.log(list.getSize());
// list.delete(5)
list.prepend(9)

// console.log(list.getSize());
console.log(list.print());
list.reverse()
console.log(list.print());

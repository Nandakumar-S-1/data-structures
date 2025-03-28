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
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            return "list is Empty"
        }else{
            let curr=this.head
            let listValues=""
            while(curr){
                listValues +=`${curr.value} `
                curr=curr.next
            }
            return listValues
        }
    }
    reverse(){
        let prev=null
        let curr=this.head
        this.tail=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
}
let list=new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
for(let i=0;i<10;i++){
    list.prepend(i)
}
console.log(list.print())
list.reverse()
console.log(list.print())





class Node{
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null
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

    print(){
        if(this.isEmpty()){
            console.log('list is empty');
            return
        }
        let curr=this.head
        let listValues=""

        while(curr){
            listValues+=`${curr.value} `
            curr=curr.next
        }
        console.log(listValues);
    }

    printReverse(){
        if(this.isEmpty()){
            console.log('list is empty');
            return
        }
        let curr=this.tail
        let listValues=""

        while(curr){
            listValues+=`${curr.value} `
            curr=curr.prev
        }
        console.log(listValues);
        
    }

    prepend(value){
        let node = new Node(value)
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
        let node= new Node(value)
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

    insertAt(value,index){
        if(index<0||index>this.size){
            console.log("Invalid index");
            return 
        }

        if(index==0){
            this.prepend(value)
            return
        }

        if(index==this.size){
            this.append(value)
            return
        }

        const node=new Node(value)
        let curr=this.head
        for(let i=0;i<index-1;i++){
            curr=curr.next
        }
        node.next=curr.next
        node.prev=curr
        curr.next.prev=node
        curr.next=node

        this.size++
    }
   
}



let list=new DoublyLinkedList()

list.append(10)
list.prepend(100)
list.insertAt(40,1)
list.print()

list.printReverse()
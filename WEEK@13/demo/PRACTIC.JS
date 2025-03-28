class Node{
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null
    }
}
class LinkedList{
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
        const node=new Node(value);
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
            this.prev=this.tail
            this.tail=node 
        
        }this.size++
    }

    removeFront(){
        if(this.isEmpty()){
            return null
        }
        const value=this.head.value
        this.head=this.head.next
        this.size--
        return value
    }

    removeBack(){
        if(this.isEmpty()){
            return null
        }
        const value=this.tail.value
        if(this.size==1){
            this.head=null
            this.tail=null
        }else{
            this.tail=this.tail.prev
            this.tail.next=null
        }
        this.size--
        return value
    }

    print(){
        if(this.isEmpty()){
            console.log('listis empty');
            
        }else{
            let curr=this.head
            let val=""
            while(curr){
                val+=`${curr.value} `
                curr=curr.next
            }
            console.log(val);
            
        }
    }
    reverse(){
        
    }
}
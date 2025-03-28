class Node{
    constructor(value){
        this.value=value
        this.Next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    
    isEmpty(){
        return this.size == 0
    }
    
    getSize(){
        return this.size
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr=this.head
            let listValues=''
            while(curr){
                listValues += `${curr.value} `
                curr=curr.next
            }
            console.log(listValues);
            
        }
    }
// constant o(1)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    // constant o(1)
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }else{
            const value=this.head.value
            this.head=this.head.next
            this.size--
            return value
        }
    }
    //liniar o(n)
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }else{
            let value=this.tail.value
            if(this.size==1){
                this.head=null
                this.tail=null
            }else{
                let prev= this.head
                while(prev.next !==this.tail){
                    prev=prev.next
                }
                prev.next=null
                this.tail=prev
            }
            this.size--
            return value
        }
    }
}

let list = new LinkedList()

list.print()
list.append(50)
list.append(10)
list.append(20)
list.append(30)
list.print()
console.log(list.removeFromFront());
list.print()
console.log(list.removeFromEnd());
list.print()
class Node{
    constructor(value){
        this.value=value
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
        return this.size ==0
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
}

let list=new LinkedList()
list.append(10)
list.append(12)
list.print()
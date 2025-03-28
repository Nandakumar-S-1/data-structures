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

    print(){
        if(this.isEmpty()){
            return "List is empty"
        }
        let curr=this.head
        let listVals =''

        while(curr){
            listVals += `${curr.value}`
            curr=curr.next
        }
        return listVals
    }

    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
            
        }
        this.size++
    }
    
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    
    insertIndex(value,index){
        let node=new Node(value)
        if(index<0 || index >this.size){
            return "invalid index"
        }
        if(index == 0){
            return this.prepend(value)
        }
        else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }

    insertVal(value,target){
        let node=new Node(value)
        if(this.isEmpty()){
            return "list is empty"
        }
        let curr=this.head
        while(curr){
            if(curr.value ==target){
                node.next=curr.next
                curr.next=node
                this.size++
                return
            }
            curr=curr.next
        }
        return "value not found"
    }


}

let list=new LinkedList()

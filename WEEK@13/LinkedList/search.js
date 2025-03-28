class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(value){
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

    search(value){
        if(this.isEmpty()){
            return "list is empty"
        }
        else{
            let curr=this.head
            let index=0
            while(curr){
                if(curr.value==value){
                    return index
                }
                curr=curr.next
                index++
            }
            return "value not found"
        }
    }

}
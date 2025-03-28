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
    
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    
    insert(value,index){
        let node=new Node(value)
        if(index<0 || index>this.size){
            return "invalid index"
        }
        if(index==0){
            return this.prepend(value)
        }else{
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
        }else{
            let curr=this.head
            while(curr){
                if(curr.value == target){
                    node.next=curr.next
                    curr.next= node
                    this.size++
                    return 
                }
                curr=curr.next
            }
            return "value not found"
        }
    }
    
    search(value){
        if(this.isEmpty()){
            return "list is empty"
        }else{
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
    
    reverse(){
        if(this.isEmpty()){
            return "list is empty"
        }else{
            let curr=this.head
            let prev=null
            while(curr){
                let temp=curr.next
                curr.next=prev
                prev=curr
                curr=temp
            }
            this.head=prev
        }
    }
    
    print(){
        if(this.isEmpty()){
            console.log('The list is empty')
        }else{
            let curr=this.head
            let vals=''
            while(curr){
                vals += `${curr.value} `
                curr=curr.next
            }
            return vals
        }
    }
   
    
}

function arrayToLL(array){
    let list=new LinkedList()
    array.forEach((value)=>list.append(value))
    return list
}

let list=new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize())

for(let i=0;i<5;i++){
    list.insert(i+5,i)
}

console.log(arrayToLL([2,5,4]))

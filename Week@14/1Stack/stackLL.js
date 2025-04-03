class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.head=null
    }
    isEmpty(){
        return this.head==null
    }
    push(value){
        let node=new Node(value)
        node.next=this.head
        this.head=node
    }
    pop(){
        if(!this.isEmpty()){
            let temp=this.head
            this.head=this.head.next
            return temp.value
        }else{
            return "underflow"
        }
    }
    peek(){
        if(!this.isEmpty()){
            return this.head.value
        }else{
            return "stack is empty"
        }
    }
    print(){
        let curr=this.head
        while(curr !==null){
            console.log(curr.value);
            
            curr=curr.next
        }
    }
}

let stack=new Stack()
let i=0
while(i<=5){

    stack.push(i)
    i++
}
console.log("stack values are ");
stack.print()
console.log( "popped value is "+ stack.pop())

console.log("value in the top is ", stack.peek());



stack.print()

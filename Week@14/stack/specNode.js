class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return  this.items.pop()
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1]
        }
        return null
    }
    print(){
        console.log(this.items.toString());
        
    }
}

function deleteNode(stack,target){
    let temp=new Stack()
    let found=false
    // Move all elements to tempStack except the one to delete
    while(!stack.isEmpty()){
        let curr=stack.pop()
        if(curr!=="stack is empty"){
            if(curr !== target){
                temp.push(curr)
            }else{
                // Mark that we found and deleted the value
                found=true
            }
        }
    }
    // Move elements back to original stack
    while(!temp.isEmpty()){
        let curr=temp.pop()
        if(curr!="stack is empty"){
            stack.push(curr)
        }
    }
    return found
}


let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Original stack:");
stack.print();

let deleted = deleteNode(stack, 3);
console.log("After deleting 3:");
stack.print();
console.log("Value was found and deleted:", deleted);

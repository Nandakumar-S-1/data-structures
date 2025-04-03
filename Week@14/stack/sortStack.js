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


function sortStack(stack){
    let tempStack=new Stack()

    //while the input stack is not empty
    while(!stack.isEmpty()){
        let curr=stack.pop()

        if (curr === "stack is empty") break;

        while(!tempStack.isEmpty() && tempStack.peek() >curr){
            stack.push(tempStack.pop())
        }
        tempStack.push(curr)
    }
    return tempStack
}

let stack = new Stack();
stack.push(34);
stack.push(3);
stack.push(31);
stack.push(98);
stack.push(92);
stack.push(23);

console.log(sortStack(stack));

// function sortStack(realStack){
//     let tempStack=new Stack()
//     while(!realStack.isEmpty()){
//         let temp=realStack.pop()
//         while(!tempStack.isEmpty() && temp <tempStack.peek()){
//             realStack.push(tempStack.pop())
//         }
//         tempStack.push(temp)
//     }
//     while (!tempStack.isEmpty()) {
//         originalStack.push(tempStack.pop());
//     }
// }
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
        return "popped item is " + this.items.pop()
    }
    peek(){
        if(!this.isEmpty()){
            return "top item is "+this.items[this.items.length-1]
        }
        return null
    }
    print(){
        console.log(this.items.toString());
        
    }
}


let stack=new Stack()
console.log(stack.isEmpty());

for (let i = 1; i <= 5; i++) {
    stack.push(i);
}
console.log(stack.isEmpty());
stack.print()
console.log(stack.peek());

stack.pop()
stack.print()
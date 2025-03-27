class Stack{
    constructor(){
        this.items= new Array()
    }
    isEmpty(){
        return this.items.size===0
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return "under flow"
        }
        return this.items.pop()
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1]
        }return null
    }
    display(){
        console.log(this.items);
        
    }
}
let stack =new Stack()
let i=0
while(i<6){
    stack.push(i * i)
    i++
}


console.log(stack.peek());


stack.display()


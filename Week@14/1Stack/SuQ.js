
// stack using  Queue //

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        if (!this.isEmpty()) {
        return  this.items[0];
        }
        return null;
    }
    getSize() {
        return  this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
}

class Stack{
    constructor(){
        this.queue1=new Queue()
        this.queue2=new Queue()
    }
    push(value){

          // Move all elements from queue1 to queue2
        while(!this.queue1.isEmpty()){
            this.queue2.enqueue(this.queue1.dequeue())
        }
        // Push the new element into queue1
        this.queue1.enqueue(value)

         // Move all elements back from queue2 to queue1
        while(!this.queue2.isEmpty()){
            this.queue1.enqueue(this.queue2.dequeue())
        }
    }
    pop(){
        if(this.queue1.isEmpty()){
            return "underflow"
        }
        return this.queue1.dequeue()
    }
    front(){
        return this.queue1.peek()
    }
    display(){
        console.log("elements are ", this.queue1.items.toString());
        
    }
}


let stack =new Stack()
stack.push(5)
stack.push(66)
stack.push(2)
console.log(stack.display())


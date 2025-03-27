class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return "No elements";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}


class queueUsingStack{
    constructor(){
        this.stack1 =new Stack()
        this.stack2 =new Stack()
    }
    enqueue(element){
        while(!this.stack1.isEmpty()){
            this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(element)
        
        while(!this.stack2.isEmpty()){
            this.stack1.push(this.stack2.pop())
        }
    }

    dequeue(){
        if(this.stack1.isEmpty()){
            return "queue is empty"
        }
        return this.stack1.pop()
    }
    front(){
        if(this.stack1.isEmpty()){
            return "queue is empty"
        }
        return this.stack1.peek()
    }
    isEmpty() {
        return this.stack1.isEmpty();
    }
    size() {
        return this.stack1.size();
    }
    
}


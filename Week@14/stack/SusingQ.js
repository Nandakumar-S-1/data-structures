class Queue{
    constructor(){
        this.items=[]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(!this.isEmpty()){
            return this.items.shift()
        }return null
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    display(){
        console.log(this.items.toString())
    }
    size() {
        return this.items.length;
    }
    front(){
        if(this.isEmpty()){
            return "empty"
        }
        return this.items[0]
    }
}

class stackUsingQueue{
    constructor(){
        this.queue =new Queue()
    }
    push(element){
        this.queue.enqueue(element)
        for(let i=0;i<this.queue.size()-1;i++){
            
            // Rotate the queue to make the new element at the front
            this.queue.enqueue(this.queue.dequeue())
        }
    }
    pop(){
        if(this.queue.isEmpty()){
            return "empty"
        }
        return this.queue.dequeue()
    }
    peek(){
        if(this.queue.isEmpty()){
            return "empty"
        }
        return this.queue.front()
    }
    display(){
        console.log(this.queue.toString());
    }
}

let stack = new stackUsingQueue()
for(let i=0;i<6;i++){
    stack.push(i)
}
console.log("top element ", stack.peek());
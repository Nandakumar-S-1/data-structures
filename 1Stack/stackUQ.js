class Queue{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length == 0
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.items.shift()
    }
    peek(){
        if(this.isEmpty()){
            return "empty"
        }
        return this.items[0]
    }
    print(){
        console.log(this.items.toString());
    }
}

class Stack{
    constructor(){
        this.queue = new Queue()

    }
}
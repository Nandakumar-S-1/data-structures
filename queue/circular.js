class Circular{
    constructor(capacity){
        let items = new Array(capacity)
        this.capacity=capacity
        this.currLen=0
        this.front=-1
        this.rear=-1
    }
    isEmpty(){
        return this.currLen ==0
    }
    isFull(){
        return this.currLen==this.capacity
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear=(this.rear+1) % this.capacity
            this.items[this.rear]=element
            this.currLen++
            if(this.front==-1){
                this.front=this.rear    
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let items=this.items[this.front]
        this.items[this.front]=null
        this.front=(this.front+1) % this.capacity
        this.currLen--
        if(this.isEmpty()){
            this.front =-1
            this.rear=-1
        }
        return items
    }
    peek(){
        if(!this.isEmpty){
            return this.items[this.front]
        }
        return null
    }

}
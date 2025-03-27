class queueUsingStack{
    constructor(){
        this.stack1 =[]
        this.stack2 =[]
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if(this.stack1.length===0 && this.stack2.length===0){
            return null
        }
        if(this.stack2.length===0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    front(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }
        if(this.stack2.length==0 ){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
    display(){
        return this.stack2.toString()
    }
}

let queue=new queueUsingStack()
queue.enqueue(9)
queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(7)
console.log("front "+queue.front());
console.log(queue.display());
console.log("removed "+queue.dequeue());
console.log(queue.display());

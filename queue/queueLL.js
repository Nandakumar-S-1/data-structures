class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    isEmpty(){
        if(this.front==null && this.rear==null){
            return "queue is empty"
        }
    }
    enqueue(value){
        let node=new Node(value)
        if(this.rear==null){
            this.front=this.rear=node
            return 
        }
        this.rear.next=node
        this.rear=node
    }
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.front.value
    }
    peek(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.rear.value
    }
}

let queue =new Queue()
queue.enqueue(50)
queue.enqueue(4)

queue.enqueue(5)

console.log("rear element is ",queue.peek());

console.log("removing ",queue.dequeue());

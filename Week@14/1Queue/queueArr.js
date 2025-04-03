class Queue{
    constructor(){
        this.items=new Array()
    }
    isEmpty(){
        return this.items.length==0
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        if(!this.isEmpty()){
            return this.items.shift()
        }return "underflow"
    }
    front(){
        if(!this.isEmpty()){
            return this.items[0]
        }return "list is empty"
    }
    display(){
        console.log(this.items.toString());
        
    }
}
let queue = new Queue()
let i=0
while(i<6){
    queue.enqueue(3*i -i)
    i++    
}
console.log("items in the queue  are ");
queue.display()

console.log("item in the front is ",queue.front());
console.log("removed item is " ,queue.dequeue());


queue.display()

class stackUsingQueue{
    constructor(){
        this.queue1=[]
        this.queue2=[]
    }
    push(value){
        this.queue1.push(value)
    }
    pop(){
        if(this.queue1.length===0){
            return null
        }
        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift())
        }
        let popped=this.queue1.shift()
        let temp=this.queue1
        this.queue1=this.queue2
        this.queue2=temp
        return popped
    }
    top(){
        if(this.queue1.length===0){
            return null
        }
        let topElement=this.queue1[this.queue1.length-1]
        return topElement
    }
}
let stack=new stackUsingQueue()
stack.push(9)
stack.push(2)
stack.push(4)
console.log("popped element is: ",stack.pop());
console.log("element at the top is ",stack.top());


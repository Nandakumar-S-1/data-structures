class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return  this.items.pop()
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1]
        }
        return null
    }
    print(){
        console.log(this.items.toString());
        
    }
}

function reverseString(str){
    let stack=new Stack()

    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }

    let rev=''
    while(!stack.isEmpty()){
        let rem=stack.pop()
        if(rem !== "stack is empty"){
            rev += rem
        }
    }
    return rev
}

console.log(reverseString("Ashika Sivan"));
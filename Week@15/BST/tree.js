class Node{
    constructor(value){
        this.value=value
        this.child=[]
    }
}
class Tree{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root===null
    }
    add(value,parent=null){
        let node=new Node(value)
        if(parent===null){
            if(this.isEmpty()){
                this.root=node
            }else{
                
            }
        }
    }
}
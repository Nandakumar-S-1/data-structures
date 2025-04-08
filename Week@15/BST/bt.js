class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class Tree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        let node=new Node(value)
        if(!this.root){
            this.root=node
            return
        }
        let queue = [this.root]
        while(queue.length){
            let curr=queue.shift()
            if(!curr.left){
                curr.left=node
                return
            } else{
                queue.push(curr.left)
            }
            if(!curr.right){
                curr.right=node
                return
            } else {
                queue.push(curr.right)
            }
        }
    }
    preorder(node=this.root){
        if(node){
            console.log(node.value);
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    inOrder(node=this.root){
        if(node){
            this.inOrder(node.left)
            console.log(node.value);
            this.inOrder(node.right)
        }
    }

    postOrder(node=this.root){
        if(node){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.value);
        }
    }

    BFS(){
        let queue =[this.root]
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}

let tree=new Tree()

tree.insert(50)
tree.insert(7)
tree.insert(3)
tree.insert(1)
tree.insert(9)
tree.insert(12)

console.log("BFS ");
tree.BFS()



















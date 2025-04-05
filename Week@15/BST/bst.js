class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root =null
    }
    isEmpty(){
        return this.root==null
    }
    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(value === root.value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    //first the root , then its left side full ,then its right 
    //for this list 10 5 3 7 15
    //10 5 3 7 15
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    //first the lowest means left then its parent then its right 
    //10 5 3 7 15
    //3,5,7,10,15 also in increasing order
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)            
        }
    }
    //first the left then its right then it
    //10 5 3 7 15
    //3,7,5,15,10
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
            
        }
    }
    BFS(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}

let bst=new BST()

bst.insert(10)
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(15)
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,7));

bst.postOrder(bst.root)
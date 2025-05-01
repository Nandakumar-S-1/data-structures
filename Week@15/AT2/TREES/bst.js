class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.isEmpty===null
    }
    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(node,this.root)
        }
    }
    insertNode(node,root){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(node,root.left)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(node,root.right)
            }
        }
    }
    search(root,value){
        if(root){
            if(root.value===value){
                return true
            }else if(value<root.value){
                this.search(root.left,value)
            }else{
                this.search(root.right,value)
            }
        }
        return false
    }
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)            
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)            
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
            
        }
    }
    bfs(){
        let queue=[this.root]
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
    min(root){
        if(!root.left){
            return root.value
        }return this.min(root.left)
    }
    max(root){
        if(!root.right){
            return root.value
        }return this.max(root.right)
    }
    kthsmallest(root,k){
        let count=0
        let res=null
    
    }
}
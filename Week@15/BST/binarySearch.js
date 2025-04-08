class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        } else {
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            } else{
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
        if(root){
            if(value==root.value){
                return true
            } else if(value <root.value){
                this.search(root.left,value)
            } else{
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

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
            
        }
    }

    BFS(){
        let queue=[this.root]
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left) {
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
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else {
            return this.max(root.right)
        }
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(18);

console.log("InOrder Traversal:");
bst.inorder(bst.root);  // Output: 3, 5, 7, 10, 13, 15, 18

console.log("PreOrder Traversal:");
bst.preorder(bst.root); // Output: 10, 5, 3, 7, 15, 13, 18

console.log("PostOrder Traversal:");
bst.postOrder(bst.root); // Output: 3, 7, 5, 13, 18, 15, 10

console.log("BFS"); //10 ,5, 15,3,7,13,18
bst.BFS()

console.log("max",bst.max(bst.root));

console.log("min",bst.min(bst.root));

console.log("Search 20:", bst.search(bst.root, 20)); // false

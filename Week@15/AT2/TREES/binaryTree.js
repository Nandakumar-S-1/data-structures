class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null;
    }
    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node
            return
        }
        let queue=[this.root]
        while(queue.length){
            let curr=queue.shift()
            if(!curr.left){
                curr.left=node
                return
            }else{
                queue.push(curr.left)
            }
            if(!curr.right){
                curr.right=node
                return
            }else{
                queue.push(curr.right)
            }
        }
    }

    preOrder(node=this.root){
        if(node){
            console.log(node.value);
            this.preOrder(node.left)
            this.preOrder(node.right)
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

}


let tree=new BinaryTree()

tree.insert(50)
tree.insert(7)
tree.insert(3)
tree.insert(1)
tree.insert(9)
tree.insert(12)

console.log("BFS ");
tree.BFS()



// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         let node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//             return
//         }else{
//             let queue =[this.root]
//             while(queue.length){
//                 let curr=queue.shift()
//                 if(!curr.left){
//                     curr.left=node
//                     return
//                 }else{
//                     queue.push(curr.left)
//                 }
//                 if(!curr.right){
//                     curr.right=node
//                     return
//                 }else{
//                     queue.push(curr.right)
//                 }
//             }
//         }
//     }
//     search(value,node=this.root){
//         if(!node){
//             return false
//         }else{
//             if(node.value===value){
//                 return true
//             }else{
//                 return this.search(value,node.left) || this.search(value,node.right)
//             }
//         }
//     }
//     preorder(root){
//         if(root){
//             console.log(root.value)
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }
//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
//         }
//     }
//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value)
//         }
//     }
//     BFS(){
//         let queue =[this.root]
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
// }


// let tree= new BinaryTree()
// tree.insert(10)
// tree.insert(15)
// tree.insert(19)
// tree.insert(1)
// tree.insert(5)

// console.log("preorder")
// tree.preorder(tree.root)
// console.log("inorder")
// tree.inorder(tree.root)
// console.log("postorder")
// tree.postorder(tree.root)


// console.log("bfs -------------------")
// tree.BFS()
// console.log(tree.search(6))





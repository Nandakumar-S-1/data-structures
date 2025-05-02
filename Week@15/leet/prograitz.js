// function TreeNode(val, left, right) {
//  this.val = (val===undefined ? 0 : val)
//  this.left = (left===undefined ? null : left)
//  this.right = (right===undefined ? null : right)
// }

// var levelOrder = function(root){
//     if(!root){
//         return []
//     }
//     let queue=[root]
//     let res=[]
//     while(queue.length){
//         let size=queue.length
//         let level=[]
//         for(let i=0;i<size;i++){
//             let node=queue.shift()
//             level.push(node.val)
//             if(node.left){
//                 queue.push(node.left)
//             }
//             if(node.right){
//                 queue.push(node.right)
//             }
//         }
//         res.push(level)
//     }
//     return res
// }

// let root = new TreeNode(1, new TreeNode(2),new TreeNode(3,new TreeNode(7),new TreeNode(10)))
// console.log(levelOrder(root))




















// function Node(val, neighbors) {
//     this.val = val === undefined ? 0 : val;
//     this.neighbors = neighbors === undefined ? [] : neighbors;
// };

// var cloneGraph = function(node){
//     if(!node){
//         return null
//     }
//     let visited = new Map()
//     let dfs = (original)=>{
//         if(visited.has(original)){
//           return  visited.get(original)
//         }
//         let clone = new Node(original.val,[])
//         visited.set(original,clone)
        
//         for(let neighbors of original.neighbors){
//             clone.neighbors.push(dfs(neighbors))
//         }
//         return clone
//     }
//     return dfs(node)
// }


// let node1=new Node(1)
// let node2=new Node(2)
// let node3=new Node(3)
// let node4=new Node(4)
// let node5=new Node(5)
// let node6=new Node(6)

// node1.neighbors = [node2, node4];
// node2.neighbors = [node1, node3,node4];
// node3.neighbors = [node2, node4,node6];
// node4.neighbors = [node1, node3 ,node5];

// let clonedGraph = cloneGraph(node1);
// console.log(clonedGraph);

















function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 
 var kthSmallest =function(root,k){
     let stack=[]
     let count=0
     let curr=root
     
     while(curr || stack.length){
         while(curr){
             stack.push(curr)
             curr=curr.left
         }
         curr=stack.pop()
         count++
         
         if(count===k){
             return curr.val
         }
         curr=curr.right
     }
     return -1
 }
 
 
let root = new TreeNode(5);
root.left = new TreeNode(3, new TreeNode(2), new TreeNode(4));
root.right = new TreeNode(7, null, new TreeNode(8));
 

 
console.log(kthSmallest(root, 3)); 
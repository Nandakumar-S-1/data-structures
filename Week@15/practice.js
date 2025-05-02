// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BST{
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
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(!root.left){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(!root.right){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if(value==root.value){
//             return true
//         } else if(value<root.value){
//             this.search(root.left,value)
//         }else{
//             this.search(root.right,value)
//         }
//     return false
//     }

//     preorder(root){
//         if(root){
//             console.log(root.value);
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }
//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value);
//             this.inorder(root.right)
//         }
//     }
//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value);
//         }
//     }
//     BFS(root){
//         let queue=[this.root]
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }
//         this.min(root.left)
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }
//         this.max(root.right)
//     }
// }


class maxHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(index){
        while(index>0){
            let parentIndex= Math.floor((index-1)/2)
            if(this.heap[parentIndex]>=this.heap[index]){
                break
            }else{
                [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
                index=parentIndex
            }
        }
    }
    deleteRoot(){
        if(this.heap.length===0){
            return null
        }if(this.heap.length===1){
            return this.heap.pop()
        }
        let root=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        return root
    }
    heapifyDown(index){
        while(true){
            let largest = index
            let left = (2*index)+1
            let right =(2* index)+2

            if(left < this.heap.length && this.heap[left]>this.heap[largest]){
                largest=left
            }
            if(right < this.heap.length && this.heap[right] > this.heap[largest]){
                largest=right
            }

            if(largest==index){
                break
            }
            this.swap(index,largest)
            index=largest
        }
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    printHeap(){
        console.log(this.heap);
        
    }

}

let h = new maxHeap()
h.insert(10)
h.insert(16)
h.insert(2)
h.insert(8)
h.insert(18)

console.log("max heap",h.heap);
console.log("deleted ", h.deleteRoot());
console.log("after",h.heap);


class minHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }
    bubbleUp(index){
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[parentIndex]<=this.heap[index]){
                break
            }else{
                [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
                index=parentIndex
            }
        }
    }
    deleteRoot(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length==1){
            return this.heap.pop()
        }else{
            let root =this.heap[0]
            this.heap[0]=this.heap.pop()
            this.heapifyDown(0)
            return root
        }
    }
    heapifyDown(index){
        while(true){
            let smallest=index
            let left=(2*index)+1
            let right=(2*index)+2
            if(left<this.heap.length && this.heap[left]<this.heap[smallest]){
                smallest=left
            }
            if(right<this.heap.length && this.heap[right]<this.heap[smallest]){
                smallest=right
            }
            if(smallest==index){
             break
            }
            this.swap(smallest,index)
            index=smallest
        }
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
}
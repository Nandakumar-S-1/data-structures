// class Heap{
//     constructor(){
//         this.data=[]
//     }
//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }
//     getLeftChild(i){
//         return (i*2)+1
//     }
//     getRightChild(i){
//         return (i*2)+2
//     }
//     swap(i1,i2){
//         let temp=this.data[i1]
//         this.data[i1]=this.data[i2]
//         this.data[i2]=temp
//     }
//     push(key){
//         this.data[this.data.length]=key
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let curr=this.data.length-1

//         while(this.data[curr]>this.data[this.getParentIndex(curr)]){
//             this.swap(curr,this.getParentIndex(curr))
//             curr=this.getParentIndex(curr)
//         }
//     }
// }

class Heap{
    
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
            if(this.heap[parentIndex] >= this.heap[index]){
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
        }
        let root=this.heap[0]  // Max element (root)
        this.heap[0]=this.heap.pop() // Replace root with last element
        this.heapifyDown(0) // Restore Max Heap
        return root
    }

    heapifyDown(index){
        while(true){
            let largest =index
            let left=2*index+1
            let right=2*index+2

            if(left<this.heap.length && this.heap[left] >this.heap[largest]){
                largest=left
            }
            if(right< this.heap.length && this.heap[right]>this.heap[largest]){
                largest=right
            }

            if(largest==index){
                return
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

const maxHeap = new Heap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(2); 
maxHeap.insert(6);

console.log("Max Heap:", maxHeap.heap);
console.log("Deleted Root:", maxHeap.deleteRoot());
console.log("Heap After Deletion:", maxHeap.heap);
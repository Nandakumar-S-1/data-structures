// // //        BST
        class Node{
            constructor(value){
                this.value = value
                this.left = null
                this.right = null
            }
        }

        class BST{
            constructor(){
                this.root = null
            }
            insert(value){
                const newNode = new Node(value)
                if(!this.root){
                    this.root = newNode
                    return
                }
                let current = this.root
                while(current){
                    if(value < current.value){
                        if(!current.left){
                            current.left = newNode
                            return
                        }
                        current = current.left
                    }else{
                        if(!current.right){
                            current.right = newNode
                            return
                        }
                        current = current.right
                    }
                }
            }
            search(value){
                let current = this.root
                while(current){
                    if(value === current.value) return true
                    if(value < current.left){
                        current = current.left
                    }else{
                        current = current.right
                    }
                }
            }
            thirdLargest(){
                let count = 0
                let result = null
                function reverseInorder(node){
                    if(!node || count >= 3) return
                    reverseInorder(node.right)
                    count++
                    if(count === 3){
                        result = node.value
                        return
                    }
                    reverseInorder(node.left)
                }
                reverseInorder(this.root)
                return result
            }
            findClosest(target){
                let current = this.root
                let closest = current.value
                while(current){
                    if(Math.abs(target - current.value) < Math.abs(target - closest)){
                    closest = current.value
                }
                if(target < current.value){
                    current = current.left
                }else if(target > current.value){
                    current = current.right
                }else{
                    break;
                }
                
            }
            return closest
                }
                isBST(node = this.root,min = -Infinity, max = Infinity){
                    if(!node) return true
                    if(node.value <= min || node.value >= max) return false
                    return this.isBST(node.left,min,node.value) && this.isBST(node.right,node.value,max)
                }
                delete(value, node = this.root){
                    if(!node) return false
                    if(value < node.value){
                        node.left = this.delete(value,node.left)
                    }
                    else if(value > node.value){
                        node.right = this.delete(value,node.right)
                    }else{
                        if(!node.right) return node.left
                        if(!node.left) return node.right
                        let min = this.findMin(node.right)
                        node.value = min.value
                        node.right = this.delete(min.value,node.right)
                    }
                    return node
                }
                findMin(node){
                    while(node.left) node = node.left
                    return node
                }
            
                
            printInorder(node = this.root){
        
                if(!node) return null
                if(node){
                    this.printInorder(node.left)
                    console.log(node.value)
                    this.printInorder(node.right)
                }
            }
        }
        const b = new BST()
        b.insert(5)
        b.insert(6)
        b.insert(1)
        b.insert(8)
        b.printInorder()
        console.log('after deleting')
        b.delete(1)
        b.printInorder()
        console.log(b.thirdLargest())
        console.log(b.findClosest(7))
        console.log(b.isBST())
        console.log(b.search(5))

        // // // // //------------------Graph--------------------------------------------------------------------------------------


        class Graph {
            constructor() {
            this.Graph = {};
            }
        
            addVertex(vertex) {
            if (!this.Graph[vertex]) {
                this.Graph[vertex] = [];
            }
            }
        
            addEdge(vertex1, vertex2) {
            if (!this.Graph[vertex1]) this.addVertex(vertex1);
            if (!this.Graph[vertex2]) this.addVertex(vertex2);
            this.Graph[vertex1].push(vertex2);
            this.Graph[vertex2].push(vertex1);
            }
        
            removeVertex(vertex) {
            if (this.Graph[vertex]) {
                delete this.Graph[vertex];
            }
            for (let key in this.Graph) {
                this.Graph[key] = this.Graph[key].filter((v) => v !== vertex);
            }
            }
        
            removeEdge(vertex1, vertex2) {
            if (this.Graph[vertex1]) {
                this.Graph[vertex1] = this.Graph[vertex1].filter((v) => v !== vertex2);
            }
            if (this.Graph[vertex2]) {
                this.Graph[vertex2] = this.Graph[vertex2].filter((v) => v !== vertex1);
            }
            }
        
            display() {
            console.log(this.Graph);
            }
        }
        
        // Example usage
        const g = new Graph();
        g.addVertex("A");
        g.addVertex("B");
        g.addEdge("A", "B");
        g.addEdge("A", "C");
        g.display();
        g.removeEdge("A", "B");
        g.display();
        g.removeVertex("C");
        g.display();


    // // // // ----------------Heap----------------------------------

    
    class Heap{
        constructor(){
            this.heap = []
        }
        leftChild(index){
            return 2*index+1
        }
        rightChild(index){
            return 2*index+2
        }
        parent(index){
            return Math.floor((index-1)/2)
        }
        insert(value){
            this.heap.push(value)
            this.heapifyUp()
        }
        swap(index1,index2){
            [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
        }
        heapifyUp(){
            let index = this.heap.length -1
            while(index > 0 && this.heap[index] < this.heap[this.parent(index)]){
                this.swap(index,this.parent(index));
                index = this.parent(index)
            }
        }
        extractMin(){
            if(this.heap.length === 0) return null;
            if(this.heap.length == 1) return this.heap.pop();
            let min = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.heapifyDown(0)
            return min
        }
        heapifyDown(index){
            let smallest = index;
            let left = this.leftChild(index)
            let right = this.rightChild(index)
            if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
                smallest = left
            }
            if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
                smallest = right
            }
            if(smallest !== index){
                this.swap(index,smallest)
                this.heapifyDown(smallest)
            }
        }
        // sort(){
        //     let heapCopy = new Heap();
        //      for (let val of this.heap) {
        //       heapCopy.insert(val); 
        //   }
    
        //     let sortedArr = []
            
        //     while(heapCopy.heap.length > 0){
        //         sortedArr.push(heapCopy.extractMin())
        //     }
        //     return sortedArr
        // }
        
    }
    const minHeap = new Heap();
    minHeap.insert(5);
    minHeap.insert(3);
    minHeap.insert(8);
    minHeap.insert(1);
    
    console.log(minHeap.extractMin()); 
    console.log(minHeap.extractMin()); 
    console.log(minHeap.extractMin()); 
    console.log(minHeap.extractMin()); 
    minHeap.insert(5);
    minHeap.insert(3);
    minHeap.insert(8);
    minHeap.insert(1);
    console.log(minHeap.sort());

// // // //----------------heapSort-----------------------------

function heapSort(arr){
    let n = arr.length
    for(let i = Math.floor(n/2)-1; i>=0 ; i--){
        heapify(arr,n,i)
    }
    for(let i = n-1; i>=0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}
function heapify(arr,n,i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2
    if(left < n && arr[left] > arr[largest]){
        largest = left
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right
    }
    if(largest !== i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}
const arr = [6,9,2,0,6,4]
console.log(heapSort(arr))

// // // // //----------------trie-------------------------------------

class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(words){
        let node = this.root
        for(let char of words){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.endOfWord = true
    }
    search(words){
        let node = this.root
        for(let char of words){
            if(!node.children[char]) return false
                
                node = node.children[char]
        }
        return node.endOfWord === true
    }
    longestPrefix(words){
        let node = this.root
        let prefix = ''
        for(let char of words){
            if(node.children[char]){
                prefix+=char
                node = node.children[char]
            }else{
                break
            }
        }
        return prefix
    }
    collectWords(node,prefix,result){
        if(node.endOfWord) result.push(prefix)
        for(let char in node.children){
        
        this.collectWords(node.children[char],prefix+char,result)
        }
    }
    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return[]
            node = node.children[char]
        }
        let result = []
        this.collectWords(node,prefix,result)
        return result
    }
}
const t = new Trie()
t.insert('apple')
t.insert('app')
t.insert('devan')
t.insert('danush')
console.log(t.autoComplete('d'))
console.log(t.search('apple'))
console.log(t.longestPrefix('application'))
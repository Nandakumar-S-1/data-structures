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
            let parentIndex=Math.floor((index-1)/2)
        if(this.heap[parentIndex]>this.heap[index]){
            break
        }
        [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
        index=parentIndex
        }
    }
    print(){
        console.log(this.heap)
    }
}

let h = new Heap()
h.insert(3)
h.insert(9)
h.insert(5)
h.insert(1)

h.print()

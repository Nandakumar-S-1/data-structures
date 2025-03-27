// bubbleSort

// function bubbleSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([3,7,1,5,8,5,6]))
// --------------------------------------------------------

// insertionSort

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let num=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j] >num){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=num
//     }
//     return arr
// }
// console.log(insertionSort([3,6,1,7,4,8,3,2]))

// -------------------------------------------------------

// selectionSort

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//         if(min !==i){
//             [arr[i],arr[min]]=[arr[min],arr[i]]
//         }
//     }
//     return arr
// }
// console.log(selectionSort([3,5,1,7,4,8,2]))

// -----------------------------------------------------------

// quickSort

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort([4,6,1,8,9,6,3]))

// ----------------------------------------------------------

// mergeSort

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let sorted=[]
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }
// console.log(mergeSort([3,5,8,2,4,72]))

// ---------------------------------------------------------

// stack using  Queue

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        if (!this.isEmpty()) {
        return  this.items[0];
        }
        return null;
    }
    getSize() {
        return  this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
}

class Stack{
    constructor(){
        this.queue1=new Queue()
        this.queue2=new Queue()
    }
    push(value){

          // Move all elements from queue1 to queue2
        while(!this.queue1.isEmpty()){
            this.queue2.enqueue(this.queue1.dequeue())
        }
        // Push the new element into queue1
        this.queue1.enqueue(value)

         // Move all elements back from queue2 to queue1
        while(!this.queue2.isEmpty()){
            this.queue1.enqueue(this.queue2.dequeue())
        }
    }
    pop(){
        if(this.queue1.isEmpty()){
            return "underflow"
        }
        return this.queue1.dequeue()
    }
    front(){
        return this.queue1.peek()
    }
    display(){
        console.log("elements are ", this.queue1.items.toString());
        
    }
}


let stack =new Stack()
stack.push(5)
stack.push(66)
stack.push(2)
console.log(stack.display())

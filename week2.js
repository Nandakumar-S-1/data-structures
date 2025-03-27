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
// console.log(bubbleSort([4,21,5,75,23,7,45,8,2,12]))

// -------------------------


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let num=arr[i]
//         let j=i-1
//         while(j >= 0 && arr[j]>num){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=num
//     }
//     return arr
// }
// console.log(insertionSort([4,21,5,75,23,7,45,8,2,12]))


// ----------------------------------------

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//         if(min != i){
//             [arr[min],arr[i]]=[arr[i],arr[min]]
//         }
//     }    
//     return arr
// }
// console.log(selectionSort([4,21,5,75,23,7,45,8,2,12]))


// ------------------------------------------------

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
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

// console.log(quickSort([4,21,5,75,23,7,45,8,2,12]))

// // -----------------------------------------

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

// console.log(mergeSort([4,21,5,75,23,7,45,8,2,12]))

// --------------------------------------------

// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     isEmpty(){
//         return this.items.length==0
//     }
//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return "underflow"
//         }
//         return this.items.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "It is empty"
//         }return this.items[this.items.length-1]
//     }
//     print(){
//         return this.items.toString()
//     }
// }

// let stack=new Stack()
// stack.push(4)
// stack.push(8)
// stack.push(9)
// console.log(stack.peek())
// console.log(stack.print())

// ----------------------------------------
// class Queue{
//     constructor(){
//         this.items =[]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return "underflow"
//         }return this.items.shift()
//     }
//     front(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }return null
//     }
//     display(){
//         return this.items.toString()
//     }
// }

// let queue = new Queue()
// queue.enqueue(6)
// queue.enqueue(9)
// queue.enqueue(1)
// console.log(queue.dequeue())
// console.log(queue.display())


// -----------------------------------------------------------














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


// -----------stack using LL------------------------------------------------



// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.head=null
//     }
//     isEmpty(){
//         return this.head===null
//     }
//     push(value){
//         let node=new Node(value)
//         node.next=this.head
//         this.head=node
//     }
//     pop(){
//         if(!this.isEmpty()){
//             let temp=this.head
//             this.head=this.head.next
//             return temp.value
//         }else{
//             return "underflow"
//         }
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return  this.head.value
//         }return "empty"
//     }
//     print(){
//         let curr=this.head
//         while(curr !==null){
//             console.log(curr.value)
//             curr=curr.next
//         }
//     }
// }

// let stack=new Stack()
// stack.push(50)
// stack.push(54)
// stack.push(20)
// stack.push(42)

// console.log("front",stack.peek())
// stack.print()
// console.log("popped element",stack.pop())


// stack.print()


// -------------------queue using LL--------------------------------------------------------
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class Queue{
//     constructor(){
//         this.head=null
//         this.rear=null
//     }
//     isEmpty(){
//         return this.head==null
//     }
//     enqueue(value){
//         let node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.rear=node
//         }else{
//             this.rear.next=node
//             this.rear=node
//         }
//     }
//     dequeue(){
//         if(!this.isEmpty()){
//             let temp=this.head
//             this.head=this.head.next
//             if(this.head==null){
//                 this.rear=null
//             }
//             return temp.value
//         }else{
//             return "underflow"
//         }
//     }
//     front(){
//         if(!this.isEmpty()){
//             return this.head.value
//         }else{
//             return "empty"
//         }
//     }
//     display(){
//         let curr=this.head
//         while(curr!=null){
//             console.log(curr.value)
//             curr=curr.next
//         }
//     }
// }
// let queue=new Queue()
// queue.enqueue(12)
// queue.enqueue(8)
// queue.enqueue(9)


// queue.display()
// console.log(queue.front());

// --------------------------------------------------------------

// Queue using Stack 

// class Stack{
//     constructor(){
//         this.items=new Array()
//     }
//     isEmpty(){
//         return this.items.length==0
//     }
//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//         if(!this.isEmpty()){
//             return this.items.pop()
//         }return "underflow"
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.items.length-1]
//         }
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }

// class Queue{
//     constructor(){
//         this.stack1=new Stack()
//         this.stack2=new Stack()
//     }
//     enqueue(value){
//         while(!this.stack1.isEmpty()){
//             this.stack2.push(this.stack1.pop())
//         }
//         this.stack1.push(value)
//         while(!this.stack2.isEmpty()){
//             this.stack1.push(this.stack2.pop())
//         }
//     }
//     dequeue(){
//         if(!this.stack1.isEmpty()){
//             return this.stack1.pop()
//         }return "underflow"
//     }
//     front(){
//         if(!this.stack1.isEmpty()){
//             return this.stack1.peek()
//         }return null
//     }
//     display(){
//         return this.stack1.print()
//     }
// }

// let queue=new Queue()
// queue.enqueue(5)
// queue.enqueue(7)
// queue.enqueue(8)
// queue.enqueue(12)
// queue.dequeue()
// console.log(queue.front());

// queue.display()

// ----------------------------------------------------------------------------

// stack using queue 

// class Queue{
//     constructor(){
//         this.items=new Array()
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     getSize(){
//         return this.items.length
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         if(!this.isEmpty()){
//             return this.items.shift()
//         }return "underflow"
//     }
//     front(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }return null
//     }
//     display(){
//         console.log(this.items.toString());
//     }
// }

// class Stack{
//     constructor(){
//         this.queue1=new Queue()
//         this.queue2=new Queue()
//     }
//     push(value){
//         while(!this.queue1.isEmpty()){
//             this.queue2.enqueue(this.queue1.dequeue())
//         }
//         this.queue1.enqueue(value)
//         while(!this.queue2.isEmpty()){
//             this.queue1.enqueue(this.queue2.dequeue())
//         }
//     }
//     pop(){
//         if(!this.queue1.isEmpty()){
//             return this.queue1.dequeue()
//         }return "underflow"
//     }
//     peek(){
//         if(!this.queue1.isEmpty()){
//             return this.queue1.front()
//         }
//     }
//     print(){
//         this.queue1.display()
//     }
// }

// let stack=new Stack()

// stack.push(9)
// stack.push(5)
// stack.push(1)
// console.log(stack.peek())
// stack.pop()

// stack.print()

// ---------------------------------------

// basic hash table 

// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         let index=this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }
// }

// let table=new HashTable(10)
// table.set("name","ashika")
// table.set("age",22)
// table.set("place","moovattupuzha")

// table.display()
// // console.log(table.get("age"));

// // table.remove("place")
// // table.display()

// ------------------------------------
// chaining in hashtable 

// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             this.table[index]=[]
//         }
//         for(let pair of this.table[index]){
//             if(pair[0]===key){
//                 pair[1]=value
//                 return
//             }
//         }
//         this.table[index].push([key,value])
//     }
//     get(key){
//         let index=this.hash(key)
//         if( !this.table[index]){
//             return undefined
//         }
//         for(let pair of this.table[index]){
//             if(pair[0]==key){
//                 return pair[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             return
//         }
//         this.table[index]=this.table[index].filter(pair=>pair[0]!=key)
//         if(this.table[index].length==0){
//             this.table[index]=undefined
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }

// }

// let table=new HashTable(10)
// table.set("name","ashika")
// table.set("age",22)
// table.set("mane","unknown")

// console.log(table.get("name"));


// table.display()
// table.remove("mane")
// table.display()

// ------------------------------------------


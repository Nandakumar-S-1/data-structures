// valid anagram
// function anagram(a,b){
//     if(a.length != b.length){
//         return false
//     }
//     let freq={}
//     for(let i of a){
//         freq[i]=(freq[i] || 0) +1
//     }
//     for(let i of b){
//         if(!freq[i]){
//             return false
//         }
//         freq[i]--
//     }
//     return true
// }
// console.log(anagram("ashika","akisha"));


// ---------------------------------------------

// find second least occured number using hashtable 

// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         return key % this.size
//     }
//     set(key,value){
//         let index=this.table(key)
//         if(!this.table[index]){
//             this.table[index]=[]
//         }
//         for(let pair of this.table[index]){
//             if(pair[0]==key){
//                 pair[1]=value
//                 return
//             }
//         }
//         this.table[index].push([key,value])
//     }
//     get(key){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             return undefined
//         }
//         for(let pair of this.table[index]){
//             if(pair[0]==key){
//                 return pair[1]
//             }
//         }
//         return undefined
//     }

// }

// ==========================================

//sort stack into  even stack using temporarty stack

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

// function sortStack(mainStack){
//     let tempStack = new Stack()
//     while(!mainStack.isEmpty()){
//         let temp=mainStack.pop()
//         if(temp%2==0){
//             while(!tempStack.isEmpty() && tempStack.peek() > temp){
//                 mainStack.push(tempStack.pop())
//             }
//             tempStack.push(temp)
//         }
//     }
//     return mainStack
// }

// let stack = new Stack();
// stack.push(5);
// stack.push(8);
// stack.push(3);
// stack.push(2);
// stack.push(10);
// stack.push(7);
// stack.push(6);

// console.log("Original Stack:", stack.print());
// let sortedEvenStack = sortStack(stack);
// console.log("Sorted Even Stack:", sortedEvenStack.print());

// ------------------------------------------------------------------
// merge 2 sorted array 

// function merge(arr1,arr2){
//     let merged=[]
//     let i=0
//     let j=0

//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<=arr2[j]){
//             merged.push(arr1[i])
//             i++
//         }else{
//             merged.push(arr2[j])
//             j++
//         }
//     }
//     while(i<arr1.length){
//         merged.push(arr1[i])
//         i++
//     }
//     while(j<arr2.length){
//         merged.push(arr2[j])
//         j++
//     }

//     return merged
// }
// console.log(merge([2,4,6],[1,3,5]));

// --------------------------------------------------------
// reverse a string using a stack

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

// function reverse(str){
//     let stack=new Stack()
//     for(let i of str){
//         stack.push(i)
//     }
//     let rev = ""

//     while(!stack.isEmpty()){
//         rev+= stack.pop()
//     }
//     return rev
// }

// console.log(reverse("belwin"));

// --------------------------------------------------


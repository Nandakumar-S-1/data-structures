// class HashTable{
//     constructor(size=50){
//         this.table=new Array(size).fill(null).map(()=>[])
//     }
//     hash(key){
//         return key % this.table.length
//     }
//     set(key,value){
//         let index=this.hash(key)
//         this.table[index].push([key,value])
//     }
    
//     get(key){
//         let index=this.hash(key)
//         for(let [k,v] of this.table[index]){
//             if(k===key)return v
//         }
//         return undefined
//     }
// remove(key){
//     let index=this.hash(key)
//     let bucket=this.table[index]
//     for(let i=0;i<bucket.length;i++){
//         if(bucket[i][0]===key){
//             bucket.splice(i,1)
//             return true
//         }
//     }
//     return false
// }
// search(key) {
//     const index = this.hash(key);
//     if (this.table[index] !== undefined) {
        
//         return `key:${key}  value  :${this.table[index]}`
//     } else {
//         return` Key: "${key}" not found`;
//     }
// }
//     display(){
//         this.table.forEach((bucket,index)=>{
//             console.log(`Bucket ${index}`,bucket)
//         })
//     }
// }
// let ht=new HashTable()
// ht.set(10,"apple")
// ht.set(10,"orange")
// ht.set(10,"oran")
// ht.display()

// -------------------------------------------------

// function isvalid(s){
//     const stack=[]
//     let map={")":"(","}":"{","]":"["}
//     for(let char of s){
//         if(map[char]){
//             if(stack.pop()!==map[char])return false
//         }else{
//             stack.push(char)
//         }
//     }
//     return stack.length===0
// }
// console.log(isvalid("()"))

// ======================================================

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.top=null
//     }
//     push(value){
//         let newNode=new Node(value)
//         newNode.next=this.top
//         this.top=newNode
//     }
//     pop(){
//         if(!this.top)return null
//         let poppendvalue=this.top.value
//         this.top=this.top.next
//         return poppendvalue
//     }
//     print(){
//         let current=this.top
//         while(current){
//             console.log(current.value)
//             current=current.next
//         }
//     }
// }
// const stack=new Stack
// stack.push(10)
// stack.push(20)
// stack.pop()
// stack.print

// =============================================================

    // class Node{
    //     constructor(value){
    //         this.value=value
    //         this.next=null
    //     }
    // }
    // class Queue{
    //     constructor(){
    //         this.front=this.rear=null
    //     }
    //     enqueue(value){
    //         let newNode=new Node(value)
    //         if(!this.rear){
    //             this.front=this.rear=newNode
    //             return
    //         }
    //         this.rear.next=newNode
    //         this.rear=newNode
    //     }
    //     dequeue(){
    //         if(!this.front)return null
    //         let removed=this.front.value
    //         this.front=this.front.next
    //         return removed
    //     }
    //     print(){
    //         let current=this.front
    //         while(current){
    //             console.log(current.value)
    //             current=current.next
    //         }
    //     }
    // }
    // const queue=new Queue()
    // queue.enqueue(3)
    // queue.enqueue(4)
    // queue.dequeue(3)
    // queue.print()


    // =========================================

        // class HashTable{
        //     constructor(size=50){
        //         this.table=new Array(size).fill(null).map(()=>[])
        //     }
        //  hash(key){
        //     let total=0
        //     for(let i=0;i<key.length;i++){
        //         total+=key.charCodeAt(i)
        //     }
        //     return total % this.table.length
        // }
        //     set(key,value){
        //         let index=this.hash(key)
        //        let bucket= this.table[index]
        //        for(let pair of bucket){
        //            if(pair[0]===key){
        //                pair[1]=value
        //                return
        //            }
        //        }
        //        bucket.push([key,value])
        //     }
        //     get(key){
        //         let index=this.hash(key)
        //         for(let [k,v] of this.table[index]){
        //             if(k===key){
        //                 return v
        //             }
        //             return undefined
        //         }
                
        //     }
        //     remove(key){
        //         let index=this.hash(key)
        //         let bucket=this.table[index]
        //         for(let i=0;i<bucket.length;i++){
        //             if(bucket[i][0]===key){
        //                 bucket.splice(i,1)
        //                 return true
        //             }
        //         }
        //         return false
        //     }
        //     search(key){
        //         const index=this.hash(key)
        //         if(this.table[index] !==undefined){
        //             return ${key}   ${this.table[index]}
        //         }
        //         return ${key} not found
        //     }
        //     display(){
        //         this.table.forEach((b,i)=>{
        //             console.log(${i},b)
        //         })
        //     }
        // }
        // let h=new HashTable()
        // h.set(3,"ds")
        // h.set(3,"ds")
        // console.log(h.search(3))
        // h.display()'
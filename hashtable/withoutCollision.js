// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+= key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]

//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let sameKey = bucket.find((item)=>item[0]==key)
//             if(sameKey){
//                 sameKey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         let index=this.hash(key)
//         let bucket= this.table[index]

//         if(bucket){
//             const sameKey=bucket.find((item)=>item[0]==key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         let index=this.hash(key)
//         let bucket= this.table[index]
//         if(bucket){
//             let keyIndex=bucket.findIndex((item)=>item[0]==key)
//             if(keyIndex !==-1){
//                 bucket.splice(keyIndex,1)
//                 if(bucket.length==0){
//                     this.table[index]=undefined
//                 }
//             }
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

// let hashTable=new HashTable(50)
// hashTable.set("a","ashika")
// hashTable.set("b","belwin")

// console.log(hashTable.get("a"));

// hashTable.remove("b")

// hashTable.display()



function twoSum(arr,target){
	let obj={}
	for(let i=0;i<arr.length;i++){
        let c=target-arr[i]
        if(obj[c] !== undefined){
            return [obj[c],i]
        }
        obj[arr[i]]=i
    }
    return null
}

console.log(twoSum([2,4,6,1,4,6,7,8,3],8));


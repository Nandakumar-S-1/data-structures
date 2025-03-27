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

function mergeSort(arr){
    let 
}
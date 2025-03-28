// function move(arr){
//     let zero=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==0){
//             [arr[i],arr[zero]]=[arr[zero],arr[i]]
//             zero++
//         }
//     }
//     return arr
// }
// console.log(move([4,0,6,0,0,7,0,87,0,6]));

// function move(arr){
//     let index=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==0){
//             arr[index]=arr[i]
//             index++
//         }
//     }
//     while(index<arr.length){
//         arr[index++]=0
//     }
//     return arr
// }

function elements(arr){
    let index=arr.length-1
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]!=0){
            arr[index]=arr[i]
            index--
        }
    }
    while(index>=0){
        arr[index--]=0
    }
    return arr
 }
 console.log(elements([1,2,0,3,4,5,0,0,1,0,3,4,0]));
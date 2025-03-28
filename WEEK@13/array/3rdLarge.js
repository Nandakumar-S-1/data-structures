// function third(arr){
//     if(arr.length<3){
//         return null
//     }
//     let sorted=[...new Set(arr)].sort((a,b)=>b-a)
//     return sorted[2]
// }
// console.log(third([2,4,6,8,3,1,5,9,7,55,88,44]))


function thirdLargest(arr){
    let fst=0
    let sec=0
    let trd=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>fst){
            trd=sec
            sec=fst
            fst=arr[i]
        }
        else if(arr[i]>sec && arr[i] !=fst){
            trd=sec
            sec=arr[i]
        }else if(arr[i]>trd && arr[i] !=sec){
            trd=arr[i]
        }
    }
    return trd
}
console.log(thirdLargest([5,7,3,9,5,4]));
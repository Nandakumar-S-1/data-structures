// let arr=[1,2,3,[4,5]]
// let nested=arr[3]
// let rev=new Array(nested.length)

// for(let i=0;i<nested.length;i++){
//     rev[i]=nested[nested.length-1-i]
// }
// arr[3]=rev
// console.log(arr)


function revNest(arr){
    if(!Array.isArray(arr)){
        return arr
    }
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let nested=arr[i]
            let rev=new Array(nested.length)
            
            for(let j=0;j<nested.length;j++){
                rev[j]=nested[nested.length-1-j]
            }
            arr[i]=rev
            break
        }
    }
    return arr
}
console.log(revNest([1,2,[3,4,5],6,7]))
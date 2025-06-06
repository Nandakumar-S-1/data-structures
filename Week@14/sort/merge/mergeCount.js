let count=0
function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left =arr.slice(0,mid)
    let right=arr.slice(mid)
    count++
        
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sorted=[]
    while(left.length && right.length){
        if(left[0]>=right[0]){
            sorted.push(right.shift())
        }else{
            sorted.push(left.shift())
        }
    }
    
    return [...sorted,...left,...right]
}
console.log(mergeSort([5,2,7,4,9,1]));
console.log("count",count);


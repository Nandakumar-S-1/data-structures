function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

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

function sortStr(str){
    let arr=str.split('')
    let res=mergeSort(arr)
    return res.join('')
}

console.log(sortStr("Chandler Bing"));

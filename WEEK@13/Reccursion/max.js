// Maximum Element in an Array Using Recursion

function maximum(arr,index=0,max=-Infinity){
    if(index==arr.length){
        return max
    }
    return maximum(arr,index+1,Math.max(max,arr[index]))
}
console.log(maximum([5,5,7,8,9,10,9]));

function sum(arr,index=0){
    if(index==arr.length){
        return 0
    }
    return arr[index]+sum(arr,index+1)
}
console.log(sum([5,7]));

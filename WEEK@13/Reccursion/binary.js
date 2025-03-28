function binary(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){
    if(left>right){
        return -1
    }
    let middle=Math.floor((left+right)/2)
    if(target==arr[middle]){
        return middle
    }
    if(arr[middle]>target){
        return search(arr,target,left,middle-1)
    }else{
        return  search(arr,target,left+1,right)
    }
}

console.log(binary([11,22,33,44,55,66],77));

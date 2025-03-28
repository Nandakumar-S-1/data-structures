function binary(array,target){
    let left=0
    let right=array.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(array[middle]==target){
            return middle
        }else if(array[middle]>target){
            right=middle-1
        }else{
            left=middle+1
        }
    }
    return -1
}
console.log(binary([2,4,6,8,9],8));

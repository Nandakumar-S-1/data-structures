function InputIndex(array,target){
    let left=0
    let right=array.length-1

    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(array[mid]==target){
            return mid
        }else if(array[mid]>target){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return left
}

console.log(InputIndex([2,5,7,8,8,12],6));

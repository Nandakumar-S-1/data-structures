function binary(array,target){
    let leftIndex=0
    let rightIndex=array.length-1

    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)

        if(target==array[middleIndex]){
            return middleIndex
        }else if(target<array[middleIndex]){
            rightIndex=middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
    }
    return -1
}

console.log(binary([1,2,4,5,9,10,15,36],11));

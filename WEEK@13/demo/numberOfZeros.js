function zeroCount(arr){
    let count =0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            count++
        }
    }
    return count
}

console.log(zeroCount([8,5,7,6,0,2,0]));

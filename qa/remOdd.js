function removeOdd(arr){
    let val=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr[val]=arr[i]
            val++
        }
    }
    arr.length=val
    return arr
}
console.log(removeOdd([4,6,3,7,2,1]));

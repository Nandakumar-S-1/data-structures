function average(arr){
    let sum=0
    let count=0
    let i=0
    while(i<arr.length){
        if(arr[i]%2==0){
            sum+=arr[i]
            count++
        }
        i++
    }
    return count > 0 ? sum/count : null
}
console.log(average([4,6,2,7,1,8,4]));

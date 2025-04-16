function largest(arr){
    let large=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i]
        }
    }
    return large
}
console.log(largest([4,7,2,8,9,2,7]))
function reverse(arr){
    let i=arr.length-1
    let rev=[]
    while(i>=0){
        rev.push(arr[i])
        i--
    }
    return rev
}
console.log(reverse([1,2,3,4,5]));
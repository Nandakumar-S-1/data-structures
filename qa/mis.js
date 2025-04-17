function missing(arr,n){
    let expected=(n*(n+1))/2
    let real=0
    for(let i=0;i<arr.length;i++){
        real+=arr[i]
    }
    return expected-real
}
console.log(missing([1,2,3,4,5,7],7));

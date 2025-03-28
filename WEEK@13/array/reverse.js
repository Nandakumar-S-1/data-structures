function reverse(arr){
    let rev=[]
    // return arr.reverse().map(val=> typeof val =="string" ? val.split('').reverse().join(''): val)
    for(let i=arr.length-1;i>=0;i--){
        rev.push(arr[i])
    }
    return rev
}
console.log(reverse([5,7,"nandu","dev",8,"ashika"]));

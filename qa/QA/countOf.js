function count(arr){
    let count=0
    let i=0
    while(i<arr.length){
        if(typeof(arr[i]) == "number"){
            count++
        }
        i++
    }
    return count
}
console.log(count([1,2,,"",null,[],3,4,{},"nandu"]));


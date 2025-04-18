function count(arr){
    let i=0
    let count=0
    while(i<arr.length){
        if(typeof arr[i]==='number'){
            count++   
        }
        i++
    }
    return count
}
console.log(count([1,'4',null,[],9,8,'3']));
function zeros(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            count++
        }
    }
    return count
}
console.log(zeros([1,0,5,2,6,0,4,0,5,0]));

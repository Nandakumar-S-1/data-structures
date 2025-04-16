function duplicate(arr){
    let freq={}
    for(let i of arr){
        freq[i] =( freq[i] || 0) +1
    }
    let dup=[]
    for(let i in freq){
        if(freq[i]==1){
            dup.push(parseInt(i))
        }
    }
    return dup
}
console.log(duplicate([2,4,1,4,3,5,2,7,9]))
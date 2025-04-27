function once(arr){
    let freq={}
    for(let i of arr){
        freq[i]=(freq[i] || 0) +1
    }
    let result=[]
    for(let j in freq){
        if(freq[j]==1){
            result.push(Number(j))
        }
    }
    return result
}
console.log(once([1,2,1,2,3,4]));
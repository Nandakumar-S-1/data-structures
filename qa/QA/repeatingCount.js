function repeatingCount(arr){
    let count=0
    let freq={}
    for(let i of arr){
       if(freq[i]){
        freq[i]++
        if(freq[i]==2){
            count++
        }
       }else{
        freq[i]=1
       }
    }
    return count

}
console.log(repeatingCount([1,2,3,4,3,4,3,3]));

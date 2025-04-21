function freq(arr){
    let freq={}
    for(let i of arr){
        if(freq[i]){
            freq[i]++
        }else{
            freq[i]=1
        }
    }
    return freq
}
console.log(freq([1,2,3,1,2,3,1,3,4,5,5,6,7]));

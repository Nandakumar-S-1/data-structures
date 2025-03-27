function  anagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    let freq={}
    for(let i of str1){
        freq[i]=(freq[i] || 0)+1
    }
    for(let i of str2){
        if(freq[i]){
            freq[i]++
        }
        else{
            return false
        }
    }
    return true
}
console.log(anagram("mane","name"));
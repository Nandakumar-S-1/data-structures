function counting(str){
    let freq={}
    for(let i=0;i<str.length;i++){
        let ch=str[i]
        freq[ch]=(freq[ch] || 0)+1
    }
    return freq
}

console.log(counting("ashika sivan"))
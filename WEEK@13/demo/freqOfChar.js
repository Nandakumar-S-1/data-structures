function frequency(str){
    let freq={}
    let char
    for(let i=0;i<str.length;i++){
        char=str[i]

        if(freq[char]){
            freq[char]++
        }else{
            freq[char]=1
        }
    }
    return freq
}

console.log(frequency("shahan"));

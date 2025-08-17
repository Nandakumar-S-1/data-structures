function vowelsCount(str){
    let count=0
    let vowels='aeiouAEIOU'
    
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count
}
console.log(vowelsCount("nandakumar s"));

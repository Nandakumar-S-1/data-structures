function removeCharacterr(string,character,index=0){
    if(index==string.length){
        return ""
    }
    let current=string[index]==character ? "" : string[index];
    return current + removeCharacterr(string,character,index+1)
}
console.log(removeCharacterr("nandakumar s","n"));
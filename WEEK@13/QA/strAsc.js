function strings(str){
    // for(let i=0;i<str.length/2;i++){
    //     let temp=str[i]
    //     str[i]=str[str.length-1-i]
    //     str[str.length-1-i]=temp
    // }
    // return str

    for(let i=0;i<str.length-1;i++){
        for(let j=0;j<str.length-1-i;j++){
            if(str[j]>str[j+1]){
                let temp=str[j]
                str[j]=str[j+1]
                str[j+1]=temp
            }
        }
    }
    return str
}
console.log(strings(["nandu","ashika","dev"]));

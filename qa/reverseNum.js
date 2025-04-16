
function rev(num){
    let str=num.toString()
    let rev=''
    for(let i=str.length-1;i>=0;i--){
        rev+= str[i]
    }
    return parseInt(rev)
}
console.log(rev(-502));

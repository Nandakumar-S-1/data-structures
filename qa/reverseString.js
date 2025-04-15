function reverse(str){
    let rev=''
    for(let i=str.length-1;i>=0;i--){
        rev+= str[i]
    }
    return rev
}
console.log(reverse("Belwin"));






function methRev(str){
    return str.split('').reverse().join('')
}
console.log(methRev("Aswathy"));

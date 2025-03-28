function palindrome(str){
    for(let i=0,j=str.length-1;i<j;i++,j--){
        if(str[i]==str[j]){
            return true
        }
    }
    return false
}

console.log(palindrome("Nandu"));
console.log(palindrome("malayalam"));
function palindrome(str){
    str=str.toLowerCase()
    return str === str.split('').reverse().join('')
}
console.log(palindrome("malayalam"));

function palindromeWithout(str){
    str=str.toLowerCase()
    let start=0
    let end=str.length-1

    while(start<end){
        if(str[start]!=str[end]){
            return false
        }
        start++
        end--    
    }
    return true
}
console.log(palindromeWithout("malayalam"));

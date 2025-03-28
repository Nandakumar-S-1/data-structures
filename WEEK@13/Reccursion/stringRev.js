// Reverse a String Using Recursion

function reverse(str,index=0){
    if(index==str.length){
        return ""
    }
    return reverse(str,index+1)+str[index]
}

console.log(reverse("Nandu"));

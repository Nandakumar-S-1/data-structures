function reverseWords(str) {
    let result = "";
    let word = "";
    
    for (let i = 0; i <= str.length; i++) {
        if (i < str.length && str[i] !== ' ') {
            word = str[i] + word; 
        } else {
            result += word;
            if (i < str.length) {
                result += " "; 
            }
            word = "";
        }
    }
    
    return result;
}

console.log(reverseWords("hello world")); 
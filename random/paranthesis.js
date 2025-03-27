// function isvalid(s){
//     const stack=[]
//     let map={")":"(","}":"{","]":"["}
//     for(let char of s){
//         if(map[char]){
//             if(stack.pop()!==map[char])return false
//         }else{
//             stack.push(char)
//         }
//     }
//     return stack.length===0
// }
// console.log(isvalid("()"))


function isvalid(str){
    let stack=[]
    let brackets={"}":"{","]":"[",")":"("}

    for (const char of str) {
        if(char==='('||char==='{'||char=='['){
            stack.push(char)
        }else{
            let top=stack.pop()
            if(top!==brackets[char]){
                return false
            }
        }
    }
    return stack.length==0
}
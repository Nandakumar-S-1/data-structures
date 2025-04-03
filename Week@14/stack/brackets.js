//brackets check usign stack

s1="({]}}){"
s2="[{[}"
s3="[({})]"

function valid(s){
    let stack=[]
    let  brackets={
        ']':'[',
        '}':'{',
        ')':'('
    }
    for(let i of s){
        if(i=='(' || i== '{' || i=='['){
            stack.push(i)
        }else{
            if(stack.length==0 || stack.pop() !=brackets[i]){
                return false
            }
        }
    }
    return true
}

console.log(valid(s3));
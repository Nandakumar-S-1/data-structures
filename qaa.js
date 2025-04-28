function hello(){
    let a=10
    let b=20
    let c=30
// return largest(a,b,c)
  console.log(largest(a,b,c))
}

function largest(a,b,c){
    let large=a
    if(b>large){
        large=b
    }
    if(c>large){
        large=c
    }
     return large
}
console.log(hello());


////////////////////

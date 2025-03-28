function recFibonacci(n){
    if(n<2){
        return n
    }
    return recFibonacci(n-1)+recFibonacci(n-2)
}

function calling(n){
    let res=[]
    for(let i=0;i<=n;i++){
     res.push(recFibonacci(i))
    }
    return res
}

console.log(calling(10));
// console.log(recFibonacci(0));
// console.log(recFibonacci(1));
// console.log(recFibonacci(2));
// console.log(recFibonacci(3));
// console.log(recFibonacci(4));
// console.log(recFibonacci(5));
// console.log(recFibonacci(6));


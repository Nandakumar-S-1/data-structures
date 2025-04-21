function Fibonacci(num){
    let a=0
    let b=1
    let res=[]
    while(num-- > 0){
        res.push(a)
        let temp=a+b
        a=b
        b=temp
    }
    return res
}
console.log(Fibonacci(5));
function factorial(num){
    let fact=1
    for(let i=2;i<=num;i++){
        fact = fact*i
    }
    return fact
}
console.log(factorial(5));



function fact(num){
    let i=1
    let j=1
    while(i<=num){
        j=i*j
        i++
    }
    return j
}
console.log(fact(5))

function factor(num){
    let i=1
    let j=1
    do{
        j=i*j
        i++
    }
    while(i<=num)
return j
}
console.log(factor(5))
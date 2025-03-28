// Greatest Common Divisor Using Recursion

function GCD(a,b){
    if(b==0){
        return a
    }

    return GCD(b,a%b)
}
console.log(GCD(60,20));

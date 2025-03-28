function recFactorial(n){
    if(n==0){
        return 1
    }
        return recFactorial(n-1)*n
}
console.log(recFactorial(5));

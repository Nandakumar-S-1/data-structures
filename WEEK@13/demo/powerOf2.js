function power(n){
    let rem=0
    if(n<1)return false
    
    while(n>1){
        if(n%2!==0){
            return false
        }else{
            n=n/2
        }
    }
    return true
}
console.log(power(32));

function countDigit(num){
    let count=0
    num=Math.abs(num)
    if(num==0){
        return 1
    }
    while(num>0){
        num=Math.floor(num/10)
        count++
    }
    return count
}
console.log(countDigit(-2356.5));

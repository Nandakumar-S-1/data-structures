function multiplesOfFifteen(count){
    let num=0
    let i=0
    let multiples=[]
    do{
        num += 15
        multiples.push(num)
        i++        
    }while(i<count)
        return multiples
}

console.log(multiplesOfFifteen(5));

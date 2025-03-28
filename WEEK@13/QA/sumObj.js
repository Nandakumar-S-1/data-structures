function sum(obj){
    let s=0
    for(let key in obj){
        if(typeof obj[key]== 'number'){
            s+=obj[key]
        }
    }
    return s
}
console.log(sum({a:'nandu',b:1,c:49,d:"ashika"}));

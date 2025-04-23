let obj = { a: 1, b: -4, c: 5, d: -2 };

let neg=[]
for(let i in obj){
    if(obj[i]<0){
        neg.push(obj[i])
    }
}
console.log(neg)
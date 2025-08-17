function freq(arr){
    let f={}
    for(let i of arr){
        f[i]=(f[i] || 0) +1
    }
    return  f
}
console.log(freq(["nan","nan",1,2,1,2,2,3,4,5]));

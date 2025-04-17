function merge(arr1,arr2){
    let res=[]
    for(let i=0;i<arr1.length;i++){
        res[res.length]=arr1[i]
    }
    for(let i=0;i<arr2.length;i++){
        res.push(arr2[i])
    }
    return res
}
console.log(merge([3,5,2,6],[9,1,6,0]));

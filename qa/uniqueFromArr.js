function unique(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        let exist=false
        for(let j=0;j<res.length;j++){
            if(arr[i]===res[i]){
                exist=true
                break
            }
        }
        if(!exist){
            res[res.length]=arr[i]
        }
    }
    return res
}
console.log(unique([5,4,1,7,6,8,1,8,9,6,3]));

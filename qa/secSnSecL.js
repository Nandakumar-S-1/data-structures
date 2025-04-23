function findInArr(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>=arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    let secS=arr[1]
    let secL=arr[arr.length-2]
    return `second small ${secS} second largest ${secL}`
}
console.log(findInArr([4,6,2,7,8,1,-83,-23,65]))
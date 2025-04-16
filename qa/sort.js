function sortArr(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<=arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}
console.log(sortArr([5,7,3,5,8,4]));

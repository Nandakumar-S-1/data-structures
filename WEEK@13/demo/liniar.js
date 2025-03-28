function liniar(arr,n){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==n){
            return i
        }
    }
    return -1
}
console.log(liniar([5,7,8,4,2,1],2));



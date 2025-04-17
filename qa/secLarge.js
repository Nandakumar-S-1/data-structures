function secLarge(arr){
    let large=0
    let sec=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            sec = large
            large=arr[i]
        } else if(arr[i]>sec && arr[i] != large){
            sec=arr[i]
        }
    }
    return sec
}
console.log(secLarge([4,6,2,3,7,8]));

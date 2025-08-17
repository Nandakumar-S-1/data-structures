function counting(arr){
    for(let i=0;i<arr.length/2;i++){
        let temp=arr[i]
        arr[i]=arr[arr.length-1- 7]
    }
}
// console.log(counting([1,2,3,1,3,4,6,7,6,8]));
console.log(counting(["ashika","devan","belwin"]));
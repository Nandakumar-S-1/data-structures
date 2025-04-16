function longest(arr){
    let long=arr[0]
    for(let i=1;i<arr.length;i++){
        if(long.length <arr[i].length){
            long=arr[i]
        }
    }
    return long
}
console.log(longest(["Devan","Ashika","Belwin","Nandu"]));

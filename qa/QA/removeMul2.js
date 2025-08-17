function removeEven(arr){
    // let pos=0
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]%2!==0){
    //         arr[pos]=arr[i]
    //         pos++
    //     }
    // }
    // arr.length=pos
    // return arr

    let pos=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr[pos]=arr[i]
            pos++
        }
    }
    arr.length=pos
    return arr
}

console.log(removeEven([3,6,5,1,3,6,4,3]));

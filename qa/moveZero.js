let arr=[2,0,5,0,0,1,0,3,7,0]

function moveToFront(arr){
    let j=arr.length-1
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]!==0){
            arr[j]=arr[i]
            j--
        }
    }
    for(let i=j;i>=0;i--){
        arr[i]=0
    }
    return arr
}

function moveToBack(arr){
    let j=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[j]=arr[i]
            j++
        }
    }
    for(let i=j;i<arr.length;i++){
        arr[i]=0
    }
    return arr
}

console.log(moveToFront(arr));
console.log(moveToBack(arr));

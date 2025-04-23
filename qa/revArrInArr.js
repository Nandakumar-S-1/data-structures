function reverse1(arr){
    if(!Array.isArray(arr)){
        return arr
    }
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let nested=arr[i]
            let rev=new Array(nested.length)
            for(let j=0;j<nested.length;j++){
                rev[j]=nested[nested.length-1-j]
            }
            arr[i]=rev
            break
        }
    }
    return arr
}
console.log(reverse1([2,5,7,[1,2,3,4],9,[5,6,7,8],6]));

// ------------------------

function reverse2(arr){
    if(!Array.isArray(arr)){
        return arr
    }
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let nested=arr[i]
            for(let j=0,k=nested.length-1;j<nested.length/2;j++,k--){
                [nested[j],nested[k]]=[nested[k],nested[j]]
            }
        }
    }
    return arr
}
console.log(reverse2([2,5,7,[1,2,3,4],9,[5,6,7,8],6]));


// ------------------------------

function reverse3(arr){
    if(!Array.isArray(arr)){
        return arr
    }
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for(let j=0,k=arr[i].length-1;j<arr[i].length/2;j++,k--){
                [arr[i][j],arr[i][k]]=[arr[i][k],arr[i][j]]

            }
        }
    }
    return arr
}
console.log(reverse3([2,5,7,[1,2,3,4],9,[5,6,7,8],6]));

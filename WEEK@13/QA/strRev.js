function rev(str){
    let res=""
    for(let i=str.length-1;i>=0;i--){
        res+=str[i]
    }
    return res
}

function once(arr){
    
    let left=0
    let right=arr.length-1
    
    while(left<right){
        let temp=rev(arr[left])
        arr[left]=rev(arr[right])
        arr[right]=temp
        left++
        right--
    }
    if(left==right){
        arr[left]=rev(arr[left])
    }
    return arr
}
console.log(once(["dev","ashika","belwin"]))

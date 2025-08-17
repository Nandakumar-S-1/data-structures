function counting(arr,k){
    let n=arr.length
    for(let i=0;i<n;i+=k){
        let left=i
        let right=Math.min(i+k-1,n-1)
        
        while(left<right){
            let temp=arr[left]
             arr[left]=arr[right]
            arr[right]=temp
            left++
            right--
        }
    }
    return arr
}
console.log(counting([1,2,3,4,1,2,4,5,6,7],2))
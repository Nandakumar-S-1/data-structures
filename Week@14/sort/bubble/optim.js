// Implement an optimized Bubble Sort that terminates early if the array is already sorted

function optimized(arr){
    let count=0
    let flag=false
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                count++
                flag=true
                [arr[i],arr[j]]=[arr[j],arr[i]]
                console.log(arr);
                
            }
        }
        if(flag){
            break
        }
    }
    return count
    
}
// console.log(optimized([2,4,1,5,6,3,5]));
console.log(optimized([1,2,3,4,5]));

//============ Find the length of an array without using .length.

function length(arr){
    let i=0
    let count=0
    while(arr[i]){
        count++
        i++
    }
    return count
}
console.log(length([1,2,3,4,5,6]));

// Add an element to an array without .push or .unshift.

function push(arr,num){
    arr[arr.length]=num
    return arr
}
console.log(push([1,2,3],4));

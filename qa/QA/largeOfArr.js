function large(arr){
    let large=arr[0]
    let even=-Infinity
    let odd=-Infinity

    for(let num of arr){
        if(num > large){
            large=num
        }if(num%2==0 && num>even){
            even=num
        }if(num%2!=0 && num>odd){
            odd=num
        }
    }
    return {large,even,odd}
}
console.log(large([1,2,3,4,5,6,7]));

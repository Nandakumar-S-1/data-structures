function fizzBuzz(arr){
    for(let i=1;i<arr.length;i++){
        if(i %3===0 && i%5===0){
            arr[i]="FizzBuzz"
        }else if(i%3===0){
            arr[i]="fizz"
        }else if(i%5==0){
            arr[i]='Buzz'
        }
    }
    return arr
}
console.log(fizzBuzz([2,5,3,6,8,1,3,7,9,0,5,3,7,3,9,3,2,6]));

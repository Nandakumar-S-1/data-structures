function thirdLargest(arr){
    if(arr.length<3){
        return "array had to have atleast three elements"
    }
    let first = -Infinity
    let second= -Infinity
    let third= -Infinity

    for(let num of arr){
        if(num>first){
            third=second
            second=first
            first=num
        }else if(num > second && num !=first){
            third =second
            second=num
        }else if(num>third && num!= second){
            third=num
        }
    }
    return third
}

console.log(thirdLargest([5,2,9,4,7,5,7]));

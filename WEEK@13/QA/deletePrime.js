// function primeOrNot(arr){
//     let res=[]
//     for(let i of arr){
//         if(!isPrime(i)){
//             res.push(i)
//         }
//     }
//     return res
// }
// function isPrime(num){
//     if(num<2){
//         return false
//     }
//     for(let i=2;i*i<=num;i++){
//         if(num %i==0){
//             return false
//         }
//     }
//     return true
// }


// console.log(primeOrNot([1,2,3,4,6,7]));


function once(arr){
    let j=0
    for(let i=0;i<arr.length;i++){
        if(!isPrime(arr[i])){
            arr[j]=arr[i]
            j++
        }
    }
    arr.length=j
    return arr
}
function isPrime(num){
    if(num<2){
        return false
    }else{
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%1==0){
                return false
            }
        }
    }
    return true
}

console.log(once([1,3,5,2,6,7,8,8,8,2,4,2]))
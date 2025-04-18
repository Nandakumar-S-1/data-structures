// function sumOfDight(num){
//     let sum=0
//     while(num>0){
//         sum += num%10
//         num=(num-(num%10))/10
//     }
//     return sum
// }
// console.log(sumOfDight(451));



//-----------------------

function sumOfDight(num){
    let sum=0
    if(num>0){
        do{
            sum+=num%10
            num=(num-(num%10))/10
        }while(num>0)
    }
    return sum
}
console.log(sumOfDight(4591));
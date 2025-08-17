function seperate(arr){
    let odd=new Array(arr.length)
    let even=new Array(arr.length)
    let oi=0
    let ei=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even[ei]=arr[i]
            ei++
        }else{
            odd[oi]=arr[i]
            oi++
        }
    }
    odd.length=oi
    even.length=ei
    return {odd,even}
}
console.log(seperate([1,3,4,5,6,7,8,68]))


// function seperate(arr){
//     let odd=[]
//     let even=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             even.push(arr[i])
//         }else{
//             odd.push(arr[i])
//         }
//     }
//     return {odd,even}
// }
// console.log(seperate([1,3,4,5,6,7,8,68]))
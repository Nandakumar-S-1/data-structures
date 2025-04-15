// // function rev(str){
// //     let res=''
// //     let word=''
// //     for(let i=str.length-1;i>=0;i--){
// //         if(str[i]==' '){
// //             res += word +' '
// //             word=''
// //         }else{
// //             word=word +str[i]
// //         }
// //     }
// //     return res+=word
// // }

// function rev(str){
//     let res=''
//     let stack=[]
//     for(let i=0;i<str.length;i++){
//         if(str[i]==' '){
//             while(stack.length>0){
//                 res+= stack.pop()
//             }
//             res+=' '
//         }else{
//             stack.push(str[i])
//         }
//     }
//     while(stack.length >0){
//         res += stack.pop()
//     }
//     return res
// }

// console.log(rev("Ashika Sivan"));

function rev(num){
    let str=num.toString()
    let rev=''
    for(let i=str.length-1;i>=0;i--){
        rev+= str[i]
    }
    return parseInt(rev)
}
console.log(rev(502));

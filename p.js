// -----------------------------------------------------------qns from aswathy---------------------------------------------------------
// -----------------moving zeros--------------------------------------
// let arr=[1,0,2,0,3,0,4,0,5,0,6,0,7]
// let j=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]!=0){
//         arr[j]=arr[i]
//         j++
//     }
// }for(i=j;i<arr.length;i++){
//     arr[i]=0
// }
// console.log(arr)
// --------------------------------------------------------------------------
// let arr=[1,0,2,0,3,0,4,0,5,0,6,0,7]
// let j=arr.length-1
// for(i=arr.length-1;i>=0;i--){
//     if(arr[i]!=0){
//         arr[j]=arr[i]
//         j--
//     }
// }for(i=j;i>=0;i--){
//     arr[i]=0
// }
// console.log(arr)
// --------------------------reverse array ---------------------------

// let arr=[1,2,3,4,5,6,7]
// for(i=0;i<arr.length/2;i++){
//     temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr)
// ------------------------largest between 3 -------------------------------

// let a=3
// let b=1
// let c=2

// if(a>b){
//     if(a>c){
//         console.log(a)
//     }else{
//         console.log(c)
//     }
// }else if (b>a){
//     if(b>c){
//         console.log(b)
//     }else{
//         console.log(c)
//     }
// }

// -------------------even and odd----------------------------------------
// let arr=[1,2,3,4,5,6,7]
// let arr2=[]
// let index=0
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//       arr2[index]=arr[i]
//       index++
//     }
// }
// console.log(arr2)

// -------------------------FizzBuzz---------------------------------------
// function fizzbuzz(n){
//     let arr=[]
//     let index=0
//     for(i=1;i<=n;i++){
//         if(i%3==0&&i%5==0){
//             arr[index]="FIzzBuzz"
//             index++
//         }else if(i%3==0){
//             arr[index]="fizz"
//             index++
//         }else if (i%5==0){
//             arr[index]="Buzz"
//             index++
//         }else{
//             arr[index]=i
//             index++
//         }
//     }
//     console.log(arr)
// }
// fizzbuzz(5)
// -------------------------Two Sum---------------------------------------

// function sum(arr,target){
//     let arr2=[]
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 return arr2=[i,j]
                
//             }
//         }
//     }
// }
// console.log(sum([1,2,3,4,5,6,7],9))

// ------------------string reverse--------------------------------------
// strng="hello"
// reverse=''
// for(i=strng.length-1;i>=0;i--){
//     reverse+=strng[i]
// }
// console.log(reverse)

// -------------------------remove multiples of two -----------------------
// let arr=[1,2,3,4,5,6,7]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         for(j=i;j<arr.length;j++){
//             arr[j]=arr[j+1]
//         }i--
//         arr.length--
//     }
// }
// console.log(arr)

// -----------------------------------

// function fact(num){
//     let i=1
//     let j=1
//     while(i<=num){
//         j=i*j
//         i++
//     }
//     return j
// }
// console.log(fact(5))
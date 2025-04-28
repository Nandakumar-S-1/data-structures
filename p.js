// //============ Find the length of an array without using .length.

// function length(arr){
//     let i=0
//     let count=0
//     while(arr[i]){
//         count++
//         i++
//     }
//     return count
// }
// console.log(length([1,2,3,4,5,6]));

// // Add an element to an array without .push or .unshift.

// function push(arr,num){
//     arr[arr.length]=num
//     return arr
// }
// console.log(push([1,2,3],4));

//======= deleting two values next to the multiples of 5.

// function del(arr){
//     let i=0
//     let res=[]
//     while(i<arr.length){
//         if(arr[i]===5){
//             res.push(arr[i])
//             i+=3
//         }else{
//             res.push(arr[i])
//             i++
//         }
//     }
//     return res
//  }
//  console.log(del([1,2,3,4,5,5,0,5,2,3,3]))

//===================== remove all the prime numbers and even numbers replace by1 in an array

// function del(arr){
//     for(let i=0;i<arr.length;i++){
//         if(isPrime(arr[i]) || arr[i]%2==0){
//             arr[i]=1
//         }
//     }
//     return arr
//  }
//  function isPrime(num){
//      if(num<2){
//          return false
//      }else{
//          for(let i=2;i<=Math.sqrt(num);i++){
//              if(num%i===0){
//                  return false
//              }
//          }
//      }
//      return true
//  }

// ===============remove odd numbers from the array and find the sum of the existing values in the array.

// function removeOddAndSum(arr){
//     let ind=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             arr[ind]=arr[i]
//             ind++
//         }
//     }
//     let sum=0
//     arr.length=ind
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return {arr , sum}
// }
// console.log(removeOddAndSum([2,4,1,6,4,6,3,9,7]))

//=============================Find the sum of unique prime numbers in an array.

// function unique(arr){
//     let freq={}
//     for(let i of arr){
//         freq[i]=(freq[i]||0)+1
//     }
//     let sum=0
//     for(let j in freq){
//         if(freq[j]===1 && isPrime(Number(j))){
//             sum+=Number(j)
//         }
//     }
//     return sum
// }
//  function isPrime(num){
//      if(num<2){
//          return false
//      }else{
//          for(let i=2;i<=Math.sqrt(num);i++){
//              if(num%i===0){
//                  return false
//              }
//          }
//      }
//      return true
//  }
 
//  console.log(unique([1,2,3,4,5,6,7,11,3,11]))

//==================// Find the sum of unique multiples of 3 in an array
// function unique(arr){
//     let sum=0
//     let freq={}
//     for(let i of arr){
//         freq[i]=(freq[i]||0)+1
//     }
//     for(let j in freq){
//         if(freq[j]===1 && Number(j)%3===0){
//             sum+=Number(j)
//         }
//     }
//     return sum
// }

//  console.log(unique([1,2,3,4,5,6,7,11,3,11]))

//replace all the prime numbers with ‘ * ‘ & remove all the even numbers

function isPrime(num){
    if(num<2){
        return false
    }else{
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i===0){
                return false
            }
        }
    }
    return true
}

// function replace(arr){
//     let temp=[]
//     for(let i=0;i<arr.length;i++){
//         if(isPrime(arr[i])){
//             temp.push('*')
//         }else if(arr[i]%2!==0){
//             temp.push(arr[i])
//         }
//     }
//     return temp
// }

// console.log(replace([1,2,3,4,5,6,7,8,9,10,11]))

// Write the code to reverse the array and remove all the multiples of ‘3’ from it

// function reverse(arr){
//     let num=0
//     for(let i=arr.length-1;i>=0;i--){
//         if(arr[i]%3!==0){
//             arr[num]=arr[i]
//             num++
//         }
//     }
//     arr.length=num
//     return arr
// }
// console.log(reverse([1,2,3,4,5,6,7,8]));


//Sort the array in ascending order and remove the next two array elements after the occurrence of a prime number

// function Sort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//     }
//     let res=[]
//     let i=0
//     while(i<arr.length){
//         if(isPrime(arr[i])){
//             i+=3
//         }else{
//             res.push(arr[i])
//             i++
//         }
//     }
//     return res
// }
// console.log(Sort([4,1,7,5,2,8,66,33,71,16,46]));



// Reverse the array elements and if the sum of array elements is greater than 100,then  remove the largest element from it

// function removeReverse(arr){
//     let sum=0
//     let max=-Infinity
//     let maxInd=0
//     let rev=[]
//     for(let i=arr.length-1;i>=0;i--){
//         rev.push(arr[i])
//         sum+=arr[i]
//         if(arr[i]>max){
//             max=arr[i]
//             maxInd=i
//         }
//     }
//     if(sum>100){
//         arr[maxInd]=a
//     }
//     return rev
// }
// console.log(removeReverse([12,44,65,23,98,1]));


// In an array remove all the prime numbers > 50 and remove all the non-prime numbers < 50.

// function remove(arr){
//     let num=0
//     for(let i=0;i<arr.length;i++){
//         if((!isPrime(arr[i]) && arr[i]>50) || (isPrime(arr[i]) && arr[i]<50)){
//             arr[num]=arr[i]
//             num++
//         }
//     }
//     arr.length=num
//     return arr
// }
// console.log(remove([111,54,67,3,45,76,23,8,59]));

//=================== In an array replace all the multiples of three by ‘0’ and multiples of five by ‘1’

// function replace(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%3===0){
//             arr[i]=0
//         }else if(arr[i]%5==0){
//             arr[i]=1
//         }
//     }
//     return arr
// }
// console.log(replace([2,3,6,5,10,15,33,20]));


//=========.Write a program to delete two elements after the occurrence of multiples of five
// function deletee(arr) {
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] % 5 === 0) {
//             // If current element is multiple of 5, remove the next two elements
//             for (let j = i + 1; j < arr.length - 2; j++) {
//                 arr[j] = arr[j + 2];  // Shift elements left
//             }
//             arr.length -= 2; // Decrease the array length by 2
//         } else {
//             i++; // Move to the next element
//         }
//     }
//     return arr;
// }

// console.log(deletee([1, 3, 5, 7, 10, 11, 15, 1, 9, 3]));

//===============Find the sum of unique multiples of 3 in an array

// function unique(arr){
//     let freq={}
//     let sum=0
//     for(let i of arr){
//         freq[i]=(freq[i]||0)+1
//     }
//     for(let j in freq){
//         if(freq[j]===1 && Number(j)%3===0){
//             sum+=Number(j)
//         }
//     }
//     return sum
// }
// console.log(unique([1,2,3,4,6,8,9,12,6,12]));

//========seperate elements that appear exactly once in the array
// function unique(arr) {
//     let res=[]
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }
//         if(count==1){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }

// console.log(unique([1, 2, 3, 4, 5, 6, 7, 1, 2, 4, 5]));




//===========Sort the array and replace elements in an odd position with  * and remove primenumber


// function replace(arr){
//     let ind=0
//     for(let i=0;i<arr.length;i++){
//         if(!isPrime(arr[i])){
//             arr[ind]=arr[i]
//             ind++
//         }
//     }
//     arr.length=ind


//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(i%2!==0){
//             arr[i]= '*'
//         }
//     }
//     return arr
// }

// console.log(replace([1,2,3,4,5,6,7,8,9,10]));


//============remove two element after occurence of multiple  of 3


function  remove(arr){
    let i=0
    let res=[]
     while(i<arr.length){
        if(arr[i]%3===0){
            i+=4
        }else{

        }
     }
}



//////////////////////////////////////


// function findUnique(arr) {
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
//         let isUnique = true;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] === arr[j]) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             newArr[newArr.length]=arr[i]
//         }
//     }
//     return newArr; 
// }
// console.log(findUnique([1,2,3,4,3,4]));


//////////////////////////////

// function one(){
//     let a=10
//     let b=20
//     let c=30

//     return {a,b,c}
// }
// function two(){
//     let {a,b,c}=one()

//     let sum=a+b+c
//     return sum/3
// }
// console.log((two()));

///////////////////////////////////
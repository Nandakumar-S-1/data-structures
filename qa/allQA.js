//length of an array

// function length(arr){
//     let i=0
//     let count=0
//     while(arr[i]){
//         count++
//         i++
//     }
//     return count
// }
// console.log(length([3,6,1,'l',7]));

// ============ Add an element to an array without .push or .unshift ==================

// function addElement(arr,num){
//     arr[arr.length]=num
//     return arr
// }
// console.log(addElement([1,2],3));

// ============ Remove the last element of an array without .pop.=================

// function removeElement(arr){
//     arr.length--
//     return arr
// }
// console.log(removeElement([2,3,6,1,9,7]));

// ================== Reverse an array without using built-in methods.==============

// function Reverse(arr){
//     for(let i=0;i<arr.length/2;i++){
//         let temp=arr[i]
//         arr[i]=arr[arr.length-1-i]
//         arr[arr.length-1-i]=temp
//     }
//     return arr
// }
// console.log(Reverse([1,2,3,4,5]));

// ================= Merge two arrays manually.=====================

// function mergeArrays(arr1,arr2){
//     let newArr= new Array(arr1.length+arr2.length)
//     let ind=0
//     for(let i=0;i<arr1.length;i++){
//         newArr[ind]=arr1[i]
//         ind++
//     }
//     for(let j=0;j<arr2.length;j++){
//         newArr[ind]=arr2[j]
//         ind++
//     }
//     return newArr
// }
// console.log(mergeArrays([3,6,8,1,2],[4,9,7,5]))

// ================ Find if a given element exists in an array ==============

// function includes(arr,tar){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==tar){
//             return true
//         }
//     }
//     return false
// }
// console.log(includes([2,4,7,1,9],8))

// ============= Find the first occurrence of a target value in an array.===========

// function firstIndexOf(arr,tar){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===tar){
//             return i
//         }
//     }
//     return -1
// }
// console.log(firstIndexOf([4,6,2,4,7,6,3,8],6));

//============= Sum all the elements in an array.==================

// function Sum(arr){
//     let i=0
//     let sum=0
//     while(i<arr.length){
//         sum+=arr[i]
//         i++
//     }
//     return sum
// }
// console.log(Sum([1,2,3,4,5]));

// ===========Find the average of numbers in an array.=================

// function average(arr){
//     let i=0
//     let sum=0
//     let count=0
//     while(i<arr.length){
//         sum+=arr[i]
//         count++
//         i++
//     }
//     return count>0 ? Math.floor(sum/count) : 0
// }
// console.log(average([1,2,3,4,5,6]));

//========= Count the number of even and odd numbers in an array.===========

// function countEvenOdd(arr){
//     let even=0
//     let odd=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             even++
//         }else{
//             odd++
//         }
//     }
//     return {odd,even}
// }
// console.log(countEvenOdd([2,3,6,1,7,5,3,8,9]));

// ======== Count how many times each element appears.=======

// function times(arr){
//     let freq={}
//     for(let i of arr){
//         freq[i]=(freq[i] || 0)+1
//     }
//     return freq
// }
// console.log(times([2,3,6,4,1,3,7,4,2]));

// ==========Find array has duplicates or not.================

// function duplicates(arr){
//         let freq={}
//     for(let i of arr){
//         freq[i]=(freq[i] || 0)+1
//         if (freq[i] > 1) {
//             return true;
//         }
//     }
//     return false
// }
// console.log(duplicates([3,2]));

// ======== Separate even and odd from an array.===============

// function Separate(arr){
//     let even=[]
//     let odd=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             even.push(arr[i])
//         }else{
//             odd.push(arr[i])
//         }
//     }
//     return {even , odd}
// }
// console.log(Separate([2,5,4,7,1,8,9]));

// ========== Frequency of each character in a string.==========

// function Frequency(str){
//     let freq={}
//     for(let i of str){
//         freq[i]=(freq[i] || 0)+1
//     }
//     return freq
// }
// console.log(Frequency("ashika"));

// ======= Find the largest, second largest , smallest & second smallest number.=========

// function largestNsmallest(arr){
//     let large=-Infinity;
//     let small=Infinity;
//     let secLarge=-Infinity;
//     let secSmall=Infinity;

//     for(let i=0;i<arr.length;i++){
//         let val = arr[i];
        
//         if(val>large){
//              secLarge=large
//             large=val
//         }else if(val > secLarge && val != large){
//             secLarge=val
//         }
        
//         if(val<small){
//              secSmall=small
//             small=val
//         }else if(val < secSmall && val != small){
//             secSmall=val
//         }
//     }
//     return {small , secSmall , large , secLarge}
// }
// console.log(largestNsmallest([2,4,1,5,3,11,33,5,7,97]));


// ======= Find the largest, second largest , smallest & second smallest number.=========

// function largestNsmallest(arr){
//     let large=-Infinity
//     let secLarge =-Infinity
//     let small=Infinity
//     let secSmall=Infinity

//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//     }
//     large=arr[arr.length-1]
//     secLarge=arr[arr.length-2]
//     small=arr[0]
//     secSmall=arr[1]

//     return {large,secLarge,small,secSmall}
// }
// console.log(largestNsmallest([6,5,1,7,4,8,2,9,3]));

// ======== Find the largest even number & Find the largest odd number.

// function largest(arr){
//     let largeEven=0
//     let largeOdd=0

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0 && arr[i]>largeEven){
//             largeEven=arr[i]
//         }else if(arr[i]%2!==0 && arr[i]>largeOdd){
//             largeOdd=arr[i]
//         }
//     }
//     return {largeEven,largeOdd}
// }
// console.log(largest([2,5,23,7,9,6,12]));


// ======Check if a number is prime or not.===========
// function isPrime(num){
//     if(num<2){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(4));

// // ===== Remove vowels from a string.=======

// function vowels(str){
//     let v='aeiouAEIOU'
//     let res=''
//     for(let i=0;i<str.length;i++){
//         if(v.includes(str[i])){
//             continue
//         }else{
//             res+=str[i]
//         }
//     }
// return res
// }
// console.log(vowels("Ashika"));

// // ============reverse a string.================

// function Reverse(str){
//     let rev=''
//     for(let i=str.length-1;i>=0;i--){
//         rev+= str[i]
//     }
//     return rev
// }
// console.log(Reverse('Aswathy'));

// //======== Move zeros to the end of an array.=============

// // function moveZeros(arr){
// //     let j=0
// //     for(let i=0;i<arr.length;i++){
// //         if(arr[i]!==0){
// //             arr[j]=arr[i]
// //             j++
// //         }
// //     }
// //     for(let i=j;i<arr.length;i++){
// //         arr[i]=0
// //     }
    
// //     return arr
// // }
// // console.log(moveZeros([1,2,0,4,0,0,4,2]));


// // =========== Move zeros to the start of an array.=============

// function moveZeros(arr){
//     let j=arr.length-1
//     for(let i=arr.length-1;i>=0;i--){
//         if(arr[i]!==0){
//             arr[j]=arr[i]
//             j--
//         }
//     }
//     for(let i=j;i>=0;i--){
//         arr[i]=0
//     }
//     return arr
// }
// console.log(moveZeros([2,0,5,0,0,7,1]));

// // ==========Print multiples of 3 using a do-while loop.==========

// // function multiples(){
// //     let i=1
// //     do{
// //         console.log(`${i} * 3 = ${i*3}`);
// //         i++
// //     }while(i<=10)
// //         return ''
// // }
// // console.log(multiples());

// // =========Shift array elements one position to the left.============

// function moveElements(arr){
//     let n=arr.length
//     if(n==0){
//         return arr
//     }
//     let first=arr[0]
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i+1]
//     }
//     arr[n-1]=first
//     return arr
// }
// console.log(moveElements([1,2,3,4,5]));

// // =========Shift array elements one position to the right.============

// function moveElements(arr){
//     let n=arr.length
//     if(n==0){
//         return arr
//     }
//     let last=arr[n-1]
//     for(let i=arr.length-1;i>=0;i--){
//         arr[i]=arr[i-1]
//     }
//     arr[0]=last
//     return arr
// }
// // console.log(moveElements([1,2,3,4,5]));

// // ==============Sort an array manually=========

// // function sortArray(arr){
// //     for(let i=0;i<arr.length-1;i++){
// //         for(let j=i+1;j<arr.length;j++){
// //             if(arr[i]>arr[j]){
// //                 [arr[i],arr[j]]=[arr[j],arr[i]]
// //             }
// //         }
// //     }
// //     return arr
// // }
// // console.log(sortArray([3,2,6,5,1]));

// // ========= Find all occurrences of a target value in an array.=========
// function occurrence(arr,tar){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===tar){
//             count++
//         }
//     }
//     return count
// }
// console.log(occurrence([3,4,1,6,4,3,6,2,3,4],4));


// =========Remove duplicates from an array without built-in methods.============

// function removeDup(arr){

//    for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             for(let k=j;k<arr.length-1;k++){
//                 arr[k]=arr[k+1]
//             }
//             arr.length--
//             j--
//         }
//     }
//    }
//    return arr
// }

// console.log(removeDup([2,2,3,5,1,2,4,1,6]));

//========Rotate an array n times to right

// function reverse(arr,n){

//     let length=arr.length
// // n=n%length
// for(let i=0;i<n;i++){
//     let first=arr[0]
//     for(let j=0;j<length-1;j++){
//         arr[j]=arr[j+1]
//     }
//     arr[length-1]=first
// }
//     return arr
// }

// console.log(reverse([1,2,3,4,5],2))

// ========= Find the difference between max and min values in an array.=========

// function difference(arr){
//     let max=-Infinity
//     let min=Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }else if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     return max-min
// }
// console.log(difference([4,10,7,2,3,6]));

// ======== Check if two arrays are equal.==========

// function isEqual(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i]!==arr2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(isEqual([1,2,3],[1,2,4]));

// ======Find common elements between two arrays==========

// function common(arr1,arr2){
//     let res=[]
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
//                 res[res.length]=arr1[i]
//             }
//         }
//     }
//     return res
// }
// console.log(common([1,2,3],[3,4,5]));

//====== Check if an array is a palindrome.=========

// function palindrome(arr){
//     let start=0
//     let end=arr.length-1
//     while(start<end){
//         if(arr[start]!==arr[end]){
//             return false
//         }
//         start++
//         end--
//     }
//     return true
// }
// console.log(palindrome([1,2,3,2,1]));

//============prime in array=============

// function primeOnly(arr) {
//     let i = 0;
//     while (i < arr.length) {
//         let num = arr[i];
//         let isPrime = true;

//         if (num < 2) {
//             isPrime = false;
//         } else {
//             for (let j = 2; j * j <= num; j++) {
//                 if (num % j === 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//         }

//         if (!isPrime) {
//             for (let k = i; k < arr.length - 1; k++) {
//                 arr[k] = arr[k + 1];
//             }
//             arr.length--;
//         } else {
//             i++; 
//         }
//     }
//     return arr
// }
// console.log(primeOnly([1,2,3,4,5,6,7,8]));

// ==============sample code using try catch================

// try{
//     let colors=['Red','Blue','Green']
//     let index=5
//     if(index>colors.length){
//         throw new Error("Index is out of range")
//     }
//     console.log(colors[index]);
    
// }catch(error){
//     console.log(error.message);
// }


// ===========find the length of the string===========

// function stringLength(str){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==' '){
//             count++
//         }
//     }
//     return count
// }
// console.log(stringLength("hi i'm nandakumar"));


// ========= find the square of prime numbers in an array and delete the even numbers=========

// function isPrime(num){
//     if(num<2){
//         return false
//     }
//     for(let i=2;i*i<num;i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true
// }

// function deleteAndSquare(arr){
//     for(let i=0;i<arr.length;i++){
//         if(isPrime(arr[i])){
//             arr[i]=arr[i]*arr[i]
//         }
//     }
//     let ind=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             arr[ind]=arr[i]
//             ind++
//         }
//     }
//     arr.length=ind
//     return arr
// }
// console.log(deleteAndSquare([1,2,3,4,5,6,7,8,9,10]));


// =====find the count of words in a string===============

// function count(str){
//     let count=0
//     let isWord=false

//     for(let i=0;i<str.length;i++){
//         let char=str[i]
//         if(char !=' ' && !isWord){
//             count++
//             isWord=true
//         }else if(char==' '){
//             isWord=false
//         }
//     }
//     return count
// }
// console.log(count("my name is nandakumar"));


//==============

// ==============sample code using async/await with try catch================

function getColor(index) {
    return new Promise((resolve, reject) => {
        let colors = ['Red', 'Blue', 'Green'];
        if (index >= colors.length) {
            reject(new Error("Index is out of range"));
        } else {
            resolve(colors[index]);
        }
    });
}

async function showColor() {
    try {
        let index = 5;
        let color = await getColor(index);
        console.log(color);
    } catch (error) {
        console.log(error.message);
    }
}

showColor();















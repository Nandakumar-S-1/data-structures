// function counting(str){
//     return str.replace(/[aeiou]/gi, '')
// }



// function counting(str){
//     let vowels=["a","e","i","o","u","A","E","/i","O","U"]
//     return str.split('').filter(ch=>!vowels.includes(ch)).join('')
//  }


// function counting(str){
//     let vowels=["a","e","i","o","u","A","E","/i","O","U"]
//     let res=''
    
//     for(let i=0;i<str.length;i++){
//         let isVowel=false
//         for(let j=0;j<vowels.length;j++){
//             if(str[i]==vowels[j]){
//                 isVowel=true
//                 break
//             }
//         }
//         if(!isVowel){
//             res+=str[i]
//         }
//     }
//     return res
//  }



// function counting(str){
//     const vowels = 'aeiouAEIOU';
//      let result = '';
 
//      for(let i of str){
//          let isVowel=false
//          for(let j of vowels){
//              if(i==j){
//                  isVowel=true
//                  break
//              }
//          }
//          if(!isVowel){
//              result+=i
//          }
//      }
//      return result
     
//  }

// console.log(counting("ashika sivan"))


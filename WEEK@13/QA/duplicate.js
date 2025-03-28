function dup(arr){
    let duplicates=false
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i]==arr[j]){
                console.log(arr[j])
                duplicates=true
                break
            }
        }
    }
    if(!duplicates){
        console.log(`no duplicates available`);
        
    }
}
console.log(dup([2,3,4,3,5,2,5,4,6]));

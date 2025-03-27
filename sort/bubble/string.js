function sortedString(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]= [arr[j],arr[i]]
            }
        }
    }
    return arr
}
console.log(sortedString(["Defender","G-wagon","Land Cruiser","Wrangler"]));

function sortByLength(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i].length > arr[j].length){
                [arr[i],arr[j]]= [arr[j],arr[i]]
            }
        }
    }
    return arr
}
console.log(sortByLength(["Audi","BMW","Mercedes","Volvo","Porsche"]));

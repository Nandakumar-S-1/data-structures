function Occurrences(arr,freq={},index=0){
    if(index==arr.length){
        return freq
    }
    let key=arr[index]
    freq[key]=(freq[key] || 0)+1
    return Occurrences(arr,freq,index+1)
}
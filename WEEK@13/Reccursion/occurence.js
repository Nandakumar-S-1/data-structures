// Count the Number of Occurrences of a Character in a String

function countOccurence(str,char,count=0,index=0){
    if(index==str.length){
        return count
    }
    return countOccurence(str,char,count + (str[index]==char ? 1 : 0),index+1)
}
console.log(countOccurence("ASHIKAA","A"));

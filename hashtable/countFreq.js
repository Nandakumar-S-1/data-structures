//javascript object



//custom hashtable
class HashTable{
    constructor(size=53){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index=this.hash(key);

        if(!this.table[index]){
            this.table[index]=[]
        }
        for(let i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]){
                
            }
        }
    }
}


function countFreq(str){
    let obj= new HashTable()
    for(let i of str){
        obj[i]=(obj[i] || 0)+1
    }
    return obj
}
console.log(countFreq("nandakumar s"));
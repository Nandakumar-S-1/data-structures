class Node{
    constructor(){
        this.child={}
        this.isEnd=false
    }

}

class TRIE{
    constructor(){
        this.root=new Node()
    }
    insert(word){ //O(n)
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char]=new Node()
            }else{
                node=node.child[char]
            }
        node.isEnd=true
        }
    }
    search(word){ //Time: O(n)
        let node = this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }else{
                node=node.child[char]
            }
            return node.isEnd
        }
    }
    startWith(prefix){  // Time: O(m) — m is length of prefix
        let node=this.root
        for(let char of prefix){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return true
    }
    autoCOmplete(prefix){
        let node=this.root
        let res=[]
        for(let char of prefix){
            if(!node.child[char]){
                return res
            }
            node=node.child[char]
        }
        this.collectingWords(node,prefix,res)
        return res
    }
    collectingWords(node,prefix,res){
        if(node.isEnd){
            res.push(prefix)
        }
        for(let char in node.child){
            this.collectingWords(node.child[char],prefix+char,res)
        }
    }
}
let trie = new TRIE()
trie.insert("apple");
trie.insert("app");
trie.insert("apps");
trie.insert("apex");
trie.insert("bat");
trie.insert("ball");


console.log(trie.autoCOmplete("ap"));
console.log(trie.autoCOmplete("b")); 
console.log(trie.autoCOmplete("c"));  // []
console.log(trie.search('pp'))//
// class Node {
//     constructor() {
//         this.child = {};       // Stores children characters (e.g., {a: Node, p: Node, ...})
//         this.isEnd = false;    // True if this node marks the end of a complete word
//     }
// }

// class TRIE {
//     constructor() {
//         this.root = new Node();  // Root node doesn't store any character itself
//     }

//     // ✅ Inserts a word into the trie
//     // Time Complexity: O(n) where n = length of the word
//     insert(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.child[char]) {
//                 node.child[char] = new Node();
//             }
//             node = node.child[char];
//         }
//         node.isEnd = true;  // Mark the end of the word
//     }

//     // ✅ Searches for a complete word in the trie
//     // Time Complexity: O(n) where n = length of the word
//     search(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.child[char]) {
//                 return false;
//             }
//             node = node.child[char];
//         }
//         return node.isEnd;  // Only return true if it's a complete word
//     }

//     // ✅ Checks if any word in the trie starts with the given prefix
//     // Time Complexity: O(m) where m = length of the prefix
//     startWith(prefix) {
//         let node = this.root;
//         for (let char of prefix) {
//             if (!node.child[char]) {
//                 return false;
//             }
//             node = node.child[char];
//         }
//         return true;
//     }

//     // ✅ Returns all words that start with the given prefix
//     // Time Complexity: O(m + k) where:
//     // m = length of prefix, k = total number of characters in suffix words found
//     autoCOmplete(prefix) {
//         let node = this.root;
//         let res = [];

//         for (let char of prefix) {
//             if (!node.child[char]) {
//                 return res;  // No such prefix
//             }
//             node = node.child[char];
//         }

//         // Start DFS from the last node of prefix
//         this.collectingWords(node, prefix, res);
//         return res;
//     }

//     // ✅ Recursive DFS helper to collect all words starting from a node
//     // Time Complexity: O(k) where k is number of suffix nodes visited
//     collectingWords(node, prefix, res) {
//         if (node.isEnd) {
//             res.push(prefix);  // Found a valid word
//         }

//         for (let char in node.child) {
//             this.collectingWords(node.child[char], prefix + char, res);
//         }
//     }
// }

// // --- Test the TRIE ---

// let trie = new TRIE();
// trie.insert("apple");
// trie.insert("app");
// trie.insert("apps");
// trie.insert("apex");
// trie.insert("bat");
// trie.insert("ball");

// console.log(trie.autoCOmplete("ap")); // ['apple', 'app', 'apps', 'apex']
// console.log(trie.autoCOmplete("b"));  // ['bat', 'ball']
// console.log(trie.autoCOmplete("c"));  // []
// console.log(trie.search('pp'));       // false (only 'app' exists, not 'pp')










class Node{
    constructor(){
        this.child={}
        this.isEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char]=new Node()
            }
            node=node.child[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return node.isEnd
    }
    starsWith(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return true
    }
    autoComplete(prefix){
        let node=this.root
        let res=[]
        for(let char of prefix){
            if(!node.child[char]){
                return res
            }
            node=node.child[char]
        }
        this.collect(node,prefix,res)
        return res
    }
    collect(node,prefix,res){
        if(node.isEnd){
            res.push(prefix)
        }
        for(let char in node.child){
            this.collect(node.child[char],prefix+char,res)
        }
    }
    longestPref(word){
        let node=this.root
        let prefix=''
        let longest = ''

        for(let char of word){
            if(!node.child[char]){
                break
            }
            node=node.child[char]
            prefix+=char
        }
        if(node.isEnd){
            longest=prefix
        }
        return longest
    }
}

let trie=new Trie()

trie.insert("ash")
trie.insert("ashika")
trie.insert("ashik")
trie.insert("bell")
trie.insert("belwin")
trie.insert("dev")
trie.insert("devan")


console.log(trie.autoComplete("as"))
console.log(trie.search("dev"))
console.log(trie.starsWith("de"))

console.log(trie.longestPref("ashikasivan"))
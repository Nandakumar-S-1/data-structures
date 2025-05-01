class Node {
    constructor(val, n) {
        this.val = val === undefined ? 0 : val;
        this.n = n === undefined ? [] : n;
    }
};

var cloneGraph = function(node){
    if(!node){
        return null
    }
    let visited = new Map()

    let dfs= (original)=>{
        if(visited.has(original)){
            return visited.get(original)
        }
        let clone=new Node(original.val)
        visited.set(original,clone)

        for(let n of original.n){
            clone.n.push(dfs(n))
        }
        return clone
    }
    return dfs(node)
}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.n = [node2, node4];
node2.n = [node1, node3];
node3.n = [node2, node4];
node4.n = [node1, node3];

let clonedGraph = cloneGraph(node1);

console.log(clonedGraph); 


class Graph{
    constructor(noOfVertices){
        this.noOfVertices=noOfVertices
        this.adjList= new Map()
    }
    addVertex(v){
        this.adjList.set(v,[])
    }
    addEdge(v,w){
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }
    DfsUtil(v,visited){
        visited[v]=true
        console.log(v);
        for(let neighbor of this.adjList.get(v)){
            if(!visited[neighbor]){
                this.DfsUtil(neighbor,visited)
            }
        }
    }
    DFS(start){
        let visited={}
        console.log("DFS ");
        this.DfsUtil(start,visited)
    }

    BFS(start){
        let visited={}
        let queue=[]
        visited[start]=true
        queue.push(start)

        console.log("BFS ");
        while(queue.length !==0){
            let v = queue.shift()
            console.log(v);
            for (const neighbor of this.adjList.get(v)) {
                if(!visited[neighbor]){
                    visited[neighbor]=true
                queue.push(neighbor)
                }
            }
        }
        
    }
    printGraph() {
        for (let [vertex, neighbors] of this.adjList) {
            console.log(vertex + " -> " + neighbors.join(", "));
        }
    }
}


function shortestPath(g, start, end) {
    let queue = [[start]];
    let visited = new Set([start]);

    while (queue.length) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (node === end) {
            return path;
        }

        for (let neighbor of g.adjList.get(node)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }
    return null;
}


let g= new Graph(5)
let vertices = ['A','B','C','D','E']

for(let i=0;i<vertices.length;i++){
    g.addVertex(vertices[i])
}

g.addEdge('A','C')
g.addEdge('A','D')
g.addEdge('A','E')
g.addEdge('B','D')
g.addEdge('B','E')
g.addEdge('C','E')
g.addEdge('D','E')

g.print()












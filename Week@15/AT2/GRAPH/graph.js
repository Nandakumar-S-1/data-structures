class Graph{
    constructor(){
        this.graph={}
    }
    addV(v){
        if(!this.graph[v]){
            this.graph[v]=[]
        }
    }
    addE(v,w){
        if(!this.graph[v]){
            this.addV(v)
        }
        if(!this.graph[w]){
            this.addV(w)
        }
        this.graph[v].push(w)
        this.graph[w].push(v)
    }
    bfs(start){
        let queue=[start]
        let visited=[start]
        let res=[]
        
        while(queue.length){
            let curr=queue.shift()
            res.push(curr)
            this.graph[curr].forEach(n=>{
                if(!visited.includes(n)){
                    queue.push(n)
                    visited.push(n)
                }
            })
        }
        return res
    }
    dfs(start){
        let stack=[start]
        let res=[]
        let visited=[start]
        
        while(stack.length){
            let curr=stack.pop()
            res.push(curr)
            this.graph[curr].forEach(n=>{
                if(!visited.includes(n)){
                    stack.push(n)
                    visited.push(n)
                }
            })
        }
        return res
    }
}

let g = new Graph();
g.addE("A", "B");
g.addE("A", "C");
g.addE("B", "D");
g.addE("C", "E");
g.addE("E", "F");


console.log(g.graph)

console.log(g.bfs("A"))

























// // create a graph class
// class Graph {
//     // defining vertex array and
//     // adjacent list
//     constructor(noOfVertices){
//         this.noOfVertices = noOfVertices;
//         this.AdjList = new Map();
//     }
//     // functions to be implemented
//     // addVertex(v)
//     // addEdge(v, w)
//     // printGraph()
//     // bfs(v)
//     // dfs(v)

//     // add vertex to the graph. 
//     // It adds the vertex v as key to adjList and initializes its values with an array. 
//     addVertex(v){
//     // initialize the adjacent list with a null array
//     this.AdjList.set(v, []);
//     }


//     // add edge to the graph
//     // It adds an edge between the src and dest. 
//     addEdge(v, w){
//         // get the list for vertex v and put the
//         // vertex w denoting edge between v and w
//         this.AdjList.get(v).push(w);
//         // Since graph is undirected,
//         // add an edge from w to v also
//         this.AdjList.get(w).push(v);
//     }


//     // Prints the vertex and adjacency list
//     printGraph(){
//         // get all the vertices
//         var get_keys = this.AdjList.keys();

//         // iterate over the vertices
//         for (var i of get_keys) {
//             // get the corresponding adjacency list
//             // for the vertex
//             var get_values = this.AdjList.get(i);
//             var conc = "";

//             // iterate over the adjacency list
//             // concatenate the values into a string
//             for (var j of get_values)
//                 conc += j + " ";

//             // print the vertex and its adjacency list
//             console.log(i + " -> " + conc);
//         }
//     }


    
// }




// // Using the above implemented graph class
// var g = new Graph(6);
// var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//     g.addVertex(vertices[i]);
// }

// // adding edges
// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');

// // prints all vertex and
// // its adjacency list
// // A -> B D E
// // B -> A C
// // C -> B E F
// // D -> A E
// // E -> A D F C
// // F -> E C
// g.printGraph();























// class Graph{
//     constructor(){
//         this.graph={}
//     }
//     addVertex(vertex){
//         if(!this.graph[vertex]){
//             this.graph[vertex]=[]
//         }
//     }
//     addEdge(v,w){
//         if(!this.graph[v]){
//             this.addVertex(v)
//         }
//         if(!this.graph[w]){
//             this.addVertex(w)
//         }
//         this.graph[v].push(w)
//         this.graph[w].push(v)
//     }
//     BFS(start){
//         if(!this.graph[start])return []
//         let queue=[start]
//         let res=[]
//         let visited = new Set()
//         visited.add(start)
//         while(queue.length){
//             let curr=queue.shift()
//             res.push(curr)
//             this.graph[curr].forEach((item)=>{
//                 if(!visited.has(item)){
//                     queue.push(item)
//                     visited.add(item)
//                 }
//             })
//         }
//         return res
//     }
    
//         DFS(start){
//         if(!this.graph[start])return []
//         let stack=[start]
//         let res=[]
//         let visited = new Set()
//         visited.add(start)
//         while(stack.length){
//             let curr=stack.pop()
//             res.push(curr)
//             this.graph[curr].forEach((item)=>{
//                 if(!visited.has(item)){
//                     stack.push(item)
//                     visited.add(item)
//                 }
//             })
//         }
//         return res
//     }
// }
// let g = new Graph()
// g.addEdge('A', 'B')
// g.addEdge('A', 'C')
// g.addEdge('B', 'D')
// g.addEdge('C', 'E')
// g.addEdge('D', 'E')
// g.addEdge('D', 'F')

// console.log(g.BFS('A'))
// console.log(g.DFS('A'))



















// class Graph{
//     constructor(noOfVertices){
//         this.noOfVertices=noOfVertices
//         this.adjList= new Map()
//     }
//     addVertex(v){
//         this.adjList.set(v,[])
//     }
//     addEdge(v,w){
//         this.adjList.get(v).push(w)
//         this.adjList.get(w).push(v)
//     }
//     print(){
//         let keys=this.adjList.keys()
//         for(let i of keys){
//             let vals=this.adjList.get(i)
//             let res=''

//             for(let j of vals){
//                 res+= j + ' '
//             }
//             console.log(i ,'=>', res)
//         }
//     }
// }
// let g= new Graph(5)
// let vertices = ['A','B','C','D','E']

// for(let i=0;i<vertices.length;i++){
//     g.addVertex(vertices[i])
// }

// g.addEdge('A','C')
// g.addEdge('A','D')
// g.addEdge('A','E')
// g.addEdge('B','D')
// g.addEdge('B','E')
// g.addEdge('C','E')
// g.addEdge('D','E')

// g.print()












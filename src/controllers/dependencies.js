import Graph from "../models/Graph/Graph.js"

let upGraph = new Graph()

upGraph.addVertexes("Entrada", "UD1", "Cafeteria", "UD2", "UD3", "LT2", "NoSe", "Biblioteca", "UD4")
 
upGraph.addEdge("Entrada", "NoSe", 5)
upGraph.addEdge("Entrada", "UD1", 10)
upGraph.addEdge("Entrada", "Cafeteria", 3)
upGraph.addEdge("UD1", "Cafeteria", 5)
upGraph.addEdge("UD1", "UD2", 7)
upGraph.addEdge("UD1", "UD3", 8)
upGraph.addEdge("UD2", "UD3")
upGraph.addEdge("UD3", "NoSe", 3)
upGraph.addEdge("UD3", "LT2", 3)
upGraph.addEdge("UD3", "Biblioteca", 3)
upGraph.addEdge("UD3", "UD4", 5)
upGraph.addEdge("LT2", "Biblioteca")
upGraph.addEdge("LT2", "Nose")
upGraph.addEdge("LT2", "UD4")
upGraph.addEdge("Nose", "Biblioteca")
upGraph.addEdge("Nose", "UD4", 3)


export { upGraph }
import LinkedList from "../LinkedList/LinkedList.js";

export default class Graph {
    #map
    #mapeoInverso
    #listaAdyacencia 

    constructor(){
        this.#map = new Map();
        this.#mapeoInverso = new Map();
        this.#listaAdyacencia = [];
    }

    getAllVertexes(){   
        return this.#mapeoInverso
    }

    addVertex(key){
        if(this.#map.has(key)){
            console.log(key + " Already in Graph")
            return false
        }else{
            let lista = new LinkedList()
            this.#listaAdyacencia.push(lista)
            this.#map.set(key, this.#listaAdyacencia.length-1);
            this.#mapeoInverso.set(this.#listaAdyacencia.length-1, key);
            return true
        }
    }

    addVertexes(...vertices) {
        let lista
        for (let value of vertices) {
            lista = new LinkedList()
            this.#listaAdyacencia.push(lista)
            this.#mapeoInverso.set(this.#listaAdyacencia.length-1, value);
            this.#map.set(value, this.#listaAdyacencia.length-1)
            console.log(this.#mapeoInverso.get(this.#listaAdyacencia.length-1))
        }
    }

    addEdge(v1, v2, weight=1){
        if (this.#map.has(v1) && this.#map.has(v2)){
            this.#listaAdyacencia[this.#map.get(v1)].add(v2, weight)
            this.#listaAdyacencia[this.#map.get(v2)].add(v1, weight)
            return true
        }else{
            console.log('Not in graph')
            return false
        }
    }

    bfs(callback, key=null){
        
        let queue = []
        let listMarkers = []
        
        for (let i=0; i<this.#listaAdyacencia.length; i++)
            listMarkers[i] = false

        if(!key){
            queue.push(this.#mapeoInverso.get(0))
        }else if(this.#map.has(key)){
            queue.push(key)
        }else{
            console.log('error');
        }
        
        while (queue.length > 0) {
            let val = queue.shift() //Sacamos el primer elemento de la cola
            callback(val) //Imprimimos el valor
            listMarkers[this.#map.get(val)] = true //Marcamos de visitado
            
            this.#listaAdyacencia[this.#map.get(val)].run((node) => {
                if (node.getKey()){
                    if (!listMarkers[this.#map.get(node.getKey())] && !queue.includes(node.getKey())) 
                        queue.push(node.getKey()) //Agregamos los vecinos a la cola
                }else{
                    console.log("Nel");
                }
            })  
        }
    }

    dfs(callback){
        let stack = []
        let listMarkers = []
        
        for (let i=0; i<this.#listaAdyacencia.length; i++)
            listMarkers[i] = false
        
        stack.push(this.#mapeoInverso.get(0))
        
        while (stack.length > 0) {
            let val = stack.pop() //Sacamos el ultimo elemento de la pila
            callback(val) //Imprimimos el valor
            listMarkers[this.#map.get(val)] = true //Marcamos de visitado
            
            this.#listaAdyacencia[this.#map.get(val)].run((node) => {
                if (node.getKey()){
                    if (!listMarkers[this.#map.get(node.getKey())] && !stack.includes(node.getKey())) 
                        stack.push(node.getKey()) //Agregamos los vecinos a la pila
                }else{
                    console.log("Nel");
                }
            })  
        }
    }

    createMatrix(){
        let matrix = []

        for(let i = 0; i < this.#listaAdyacencia.length; i++){
            let row = new Array(this.#listaAdyacencia.length).fill(undefined)
            matrix.push(row)
        }

        for(let i = 0; i < this.#listaAdyacencia.length; i++){
            this.#listaAdyacencia[i].run(node => {
                matrix[i][this.#map.get(node.getKey())] = node.getWeight()
            })
        }

        return matrix
    }

    djikstra(start){
        let w = this.createMatrix();
        let v = Array.from(this.#mapeoInverso.values());
        let l = [];
        let d = Array(this.#listaAdyacencia.length).fill(99999);

        d[this.#map.get(start)] = 0;
        let da = [...d];

        while (l.length !== v.length) {
            let minCost = Math.min(...da.filter(val => val !== undefined));
            let index = da.indexOf(minCost);

            if(index === -1)
                break

            for (let i = 0; i < v.length; i++) {
                if (w[index][i] !== undefined) { //
                    let newCost = d[index] + w[index][i];
                    if (newCost < d[i]) {
                        d[i] = newCost;
                    }
                }
            }
            da[index] = undefined
        }

        return d
    }
}

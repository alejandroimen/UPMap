import { upGraph } from "./dependencies.js"
import renderAlert from "./renderAlert.js"
import renderNode from "./renderNode.js"
import actualizarOptions from "./actualizarOptions.js"

function addEdificio(){
    let inputName = document.getElementById('inputName')
    let name = inputName.value.trim()
    if(name){
        renderAlert(upGraph.addVertex(name))
        actualizarOptions(name)
        inputName.value = ''
    }else{
        renderAlert(false)
    }
}

function addCamino(){
    let edificioOrigen = document.getElementById('selectEdificioOrigen')
    let edificioDestino = document.getElementById('selectEdificioDestino')
    let distancia = document.getElementById('inputWeight')

    let v1 = edificioOrigen.value.trim()
    let v2 = edificioDestino.value.trim()
    let weight = distancia.value
    if(v1 && v2 && weight){
        renderAlert(upGraph.addEdge(v1, v2, weight))
        edificioDestino.value = ''
        edificioOrigen.value = ''
        distancia.value = ''
    }else{
        renderAlert(false)
    }
}

function startDFS(){
    let aEliminar = document.getElementById('listaResultDFS')

    if(aEliminar)
        aEliminar.remove()

    let newContainerDFS = document.createElement('ul')
    newContainerDFS.id = 'listaResultDFS'
    newContainerDFS.classList.add('div_ul-Redorrido')

    document.getElementById('containerDFS').appendChild(newContainerDFS)

    upGraph.dfs(renderNode)
}

 function cargarOptions(){
    let selectOrigen = document.getElementById('selectEdificioOrigen')
    let selectDestino = document.getElementById('selectEdificioDestino')
    let selectDjikstra = document.getElementById('selectOrigenDjikstra')

    upGraph.getAllVertexes().forEach((valor) => {
        let newOption = document.createElement('option')
        newOption.textContent = valor
        newOption.value = valor
        let optionCloned = newOption.cloneNode(true)
        let optionCloned2 = newOption.cloneNode(true)

        selectOrigen.appendChild(newOption)
        selectDestino.appendChild(optionCloned)
        selectDjikstra.appendChild(optionCloned2)
    })
 }

 function iniciarDijkstra () {
    let verticeOrigen = document.getElementById('selectOrigenDjikstra').value
    let containerResults = document.getElementById('containerResultsDjikstra')
    let listaAEliminar = document.getElementById('listResultsDjikstra')

    if(listaAEliminar){
        listaAEliminar.remove()
    }

    let listaResults = document.createElement('ul');
    listaResults.id = 'listResultsDjikstra';

    document.getElementById('mjeOrigen').textContent = document.getElementById('mjeOrigen').textContent + ' ' + verticeOrigen
    if(verticeOrigen){
        let listaDistancias = upGraph.djikstra(verticeOrigen)
        console.log(listaDistancias);

        upGraph.getAllVertexes().forEach((valor, index) => {
            
            if(listaDistancias[index] != Infinity){
                let elemento = document.createElement('li')
                let name = document.createElement('h4')
                let costo = document.createElement('p')

                name.textContent = valor
                costo.textContent = listaDistancias[index] + ' m'

                elemento.appendChild(name)
                elemento.appendChild(costo)

                listaResults.appendChild(elemento)
            }
        })
        containerResults.appendChild(listaResults)
    }else{
        renderAlert(false)
    }
 }


window.addEventListener('load', cargarOptions) 
document.getElementById('btnAddVertex').addEventListener('click', addEdificio)
document.getElementById('btnDFS').addEventListener('click', startDFS)
document.getElementById('btnAddEdge').addEventListener('click', addCamino)
document.getElementById('btndijkstra').addEventListener('click', iniciarDijkstra)

function closeAlert(){
    let container = document.getElementById('containerAlert')
    let containerDFS = document.getElementById('listaResultDFS')

    if(container){
        container.remove()
    }
    if(containerDFS){
        containerDFS.remove()
    }

    let newContainerDFS = document.createElement('ul')
    newContainerDFS.id = 'listaResultDFS'
    newContainerDFS.classList.add('div_ul-Redorrido')
    let firstLi = document.createElement('li')
    newContainerDFS.appendChild(firstLi)

    document.getElementById('containerDFS').appendChild(newContainerDFS)
}

export default closeAlert
function renderNode(node){
    let container = document.getElementById('listaResultDFS')
  
    let newLi = document.createElement('li')
    newLi.textContent = node

    container.appendChild(newLi)
}

export default renderNode
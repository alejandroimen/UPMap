
function actualizarOptions(value){
    let selectOrigen = document.getElementById('selectEdificioOrigen')
    let selectDestino = document.getElementById('selectEdificioDestino')
    let selectDjikstra = document.getElementById('selectOrigenDjikstra')

    let newOption = document.createElement('option')
    newOption.textContent = value
    newOption.value = value
    let optionCloned = newOption.cloneNode(true)
    let optionCloned2 = newOption.cloneNode(true)

    selectOrigen.appendChild(newOption)
    selectDestino.appendChild(optionCloned)
    selectDjikstra.appendChild(optionCloned2)
}

export default actualizarOptions
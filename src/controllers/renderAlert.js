import closeAlert from "./closeAlert.js"

function renderAlert(flag){
    let containerParent = document.createElement('div')
    let containerChild = document.createElement('div')
    let mensaje = document.createElement('h1')
    let btnClose = document.createElement('button')

    containerParent.id = 'containerAlert'
    containerParent.classList.add('body_div-container')
    containerChild.classList.add('div_div-alerta')
    btnClose.textContent = 'cerrar'
    btnClose.addEventListener('click', closeAlert)
    
    if(flag){
        mensaje.textContent = 'Agregado exitosamente'
    }else{
        mensaje.textContent = 'Ocurrió un error'
        btnClose.style.backgroundColor = '#f02323'
        mensaje.style.color = '#f02323'
    }

    containerChild.appendChild(mensaje)
    containerChild.appendChild(btnClose)
    containerParent.appendChild(containerChild)

    document.body.appendChild(containerParent)
}

export default renderAlert
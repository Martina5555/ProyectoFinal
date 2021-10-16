let nombre = document.querySelector("input[name='nombreApellido']");
let email = document.querySelector("input[name='mail']");
let telefono = document.querySelector("input[name='tel']");

const validNombre = (txt) => {
    regExp = /^[a-zA-ZÑ-üñ\s\t\r-]{10,}$/
    return regExp.test(txt.toLowerCase())
}

const validEmail = (txt) => {
    regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regExp.test(txt)
}

const validTelefono = (txt) => {
    regExp = /^[0-9]{9,15}$/
    return regExp.test(txt)
}

nombre.addEventListener('input', function (event) {
    if (validNombre(event.target.value)){
        nombre.style.border = '1px solid green'
        nombre.setCustomValidity = ""
    }else{
        nombre.setCustomValidity = "El campo debe tener 10 o más caracteres sin símbolos especiales"
        nombre.style.border = '1px solid red'
    }
})

email.addEventListener('input', function (event) {
    if (validEmail(event.target.value)){
        email.style.border = '1px solid green'
        email.setCustomValidity = ""
    }else{
        email.setCustomValidity = "El email tiene formato incorrecto"
        email.style.border = '1px solid red'
    }
})

telefono.addEventListener('input', function (event) {
    if (validTelefono(event.target.value)){
        telefono.style.border = '1px solid green'
        telefono.setCustomValidity = ""
    }else{
        telefono.setCustomValidity = "El telefono tiene formato incorrecto"
        telefono.style.border = '1px solid red'
    }
})
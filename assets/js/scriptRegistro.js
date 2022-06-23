const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const usuario = document.getElementById("usuario")
const tel = document.getElementById("tel")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const confirmar = document.getElementById("confirmar")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



form.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.nodeValue.length<6){
        warnings += `El nombre no es valido <br>`
    }
})
form.addEventListener("submit", e=>{
    e.preventDefault()
    if(apellido.nodeValue.length<15){
        warnings += `El apellido no es valido <br>`
    }
})
form.addEventListener("submit", e=>{
    e.preventDefault()
    if(usuario.nodeValue.length<20){
        warnings += `El usuario no es valido <br>`
    }
})
form.addEventListener("submit", e=>{
    e.preventDefault()
    if(tel.nodeValue.length<11){
        warnings += `El telefono no es valido <br>`
    }
})
form.addEventListener("submit", e=>{
    e.preventDefault()
    if(confirmar.nodeValue.length==contraseña.nodeValue.lenght){
        warnings += `Las contraseñas son distintas <br>`
    }
})


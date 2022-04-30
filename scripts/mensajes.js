import { url as endpoint } from './url.js';
document.addEventListener("DOMContentLoaded", ()=>{
    const usuarios = JSON.parse(localStorage.getItem("usuario"));

    usuarios.forEach(user => {
        const { usuario, imgusuario, id } = user;
        document.querySelector("#mensajes").innerHTML += `
    <div class="w-100 targetas" id="${id}">
    <img class="img" src="${imgusuario}" alt="${usuario}">
    <div class="name">
    <h3>${usuario}</h3>
    <p>¡Hola! claro, podemos acordar un lugar y hora para que conoscas...</p>
    </div>
    </div>
    `  
    });
})

const mensaje = document.getElementById("mensajes")

mensaje.addEventListener("click", async(e) =>{
    let id = e.target.id;
    if (e.target.classList.contains('targetas')) {
        const respuesta = await fetch(endpoint);
        const data = await respuesta.json()
        const objeto = data.find(m => m.id === Number(id))
        localStorage.setItem("mensaje", JSON.stringify(objeto));
        window.location.href = "mensaje.html"
    }
})
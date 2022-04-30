const cont = document.getElementById('contenedor');
const getLocalStorage = () => {
    const deta = JSON.parse(localStorage.getItem("detail"));
    const { nombre, raza, edad, ubicacion, personalidad1, personalidad2, personalidad3, historia, usuario, imgusuario, imagen, genero, id } = deta;

    cont.querySelector(".imagen").innerHTML = `<img class="w-50 mx-auto" id="imagen" src="${imagen}">`

    cont.querySelector(".titulo").innerHTML = `<h1 class="col d-inline-block">${nombre}</h1>
                <img class="col d-inline-block" width="55px" src="${genero}">
                <button id="favorito"><img class="float-end favo" id="${id}"
                        src="../img/favoritos.svg"></button>`

    cont.querySelector(".datos").innerHTML = `<img src="../img/raza.png" width="55px">
                     <p class="mx-3">${raza}</p>
                     <img src="../img/edad.png" width="55px">
                     <p>${edad}</p>`

    cont.querySelector(".ubicacion").innerHTML = `<img class="d-inline-block" src="./img/coor.png">
                     <p class="d-inline-block">${ubicacion}</p>`

    cont.querySelector(".personalidad").innerHTML = `<h3 class="my-3">Personalidad</h3>
                     <div class="mx-auto p2">
                         <img class="mx-5" src="${personalidad1}"><img class="mx-5" width="90px"
                             src="${personalidad2}"><img class="mx-5" src="${personalidad3}">
                     </div>`
    cont.querySelector(".historia").innerHTML = `<h3>Historia de ${nombre}</h3>
                     <p>${historia}</p>`
    cont.querySelector(".usuario").innerHTML = `<div class="d-inline-block">
                         <img class="d-inline-block" src="${imgusuario}">
                         <div class="d-inline-block">
                             <p class="my-0">Publicado por</p>
                             <h6>${usuario}</h6>
                         </div>
                     </div>
                     
                         <button type="click" id="${id}" class="contactar" href="#">
                             Contactar
                         </button>
                    `
}

document.addEventListener('DOMContentLoaded', getLocalStorage)

import { favoritos } from './url.js';
const botonf = document.querySelector(".titulo")

botonf.addEventListener("click", async (e) => {
    e.preventDefault()
    const deta = JSON.parse(localStorage.getItem("detail"));
    const { nombre, raza, imagen } = deta;

    const obj = {
        "nomb": nombre,
        "raz": raza,
        "img": imagen
    }

    await fetch(favoritos, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
})

const usuarios = document.getElementById("usuarios")
let contacto= [];

usuarios.addEventListener("click", () =>{
    
        const deta = JSON.parse(localStorage.getItem("detail"));
        const { usuario, imgusuario, id } = deta;
       
        let perfil = {
            id,
            usuario,
            imgusuario
        }

    const key = JSON.parse(localStorage.getItem('usuario'));
        if (key !== null) {
            key.unshift(perfil)
            localStorage.setItem('usuario', JSON.stringify(key))
        } else {
            contacto.unshift(perfil)
            localStorage.setItem('usuario', JSON.stringify(contacto))
        }

window.location.href = "mensajes.html"
})
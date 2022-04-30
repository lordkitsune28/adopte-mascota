import { url as endpoint } from './url.js';
import { sperro, sgato } from "./seleccion.js"
import { enviar } from "./enviar.js"

const perro = document.getElementById("btnperro")
const gato = document.getElementById("btngato")
const contp= document.getElementById("contp")
const contg = document.getElementById("contg")
const boton = document.getElementById(".boton")

perro.addEventListener("click", async () =>{
    let res = await fetch(endpoint);
    let data = await res.json();
    sperro(data, contp, contg)
})

gato.addEventListener("click", async () =>{
    let res = await fetch(endpoint);
    let data = await res.json();
    sgato(data, contg, contp)
})

document.addEventListener("click", async(e) =>{
    enviar(e , endpoint)
})
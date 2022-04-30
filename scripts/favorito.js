import { favoritos as endpoint } from './url.js';
import { imprimir } from "./imprimir.js"

document.addEventListener("DOMContentLoaded", async () => {
    let res = await fetch(endpoint);
    let data = await res.json();
    imprimir(data)
})

document.addEventListener("click", async(e) =>{
    const eliminar = e.target.classList.contains('boton');
    if (eliminar === true) {
        const id = e.target.id;
        await fetch(endpoint + id, {
            method: "DELETE"
        })
    }
})
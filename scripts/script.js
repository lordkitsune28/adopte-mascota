import { siguiente2 } from "./siguiente.js"
window.addEventListener("load", () =>{ 
    let carga = document.getElementById("contcarga");
    let primer = document.getElementById("primero")

    carga.style.display = "none";
    primer.style.display = "block"
})

let siguien = document.getElementById("siguient")

siguien.addEventListener("click", () => {
    siguiente2()
})
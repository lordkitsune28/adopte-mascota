document.addEventListener("DOMContentLoaded", () => {

    const deta = JSON.parse(localStorage.getItem("mensaje"));
    const { usuario, imgusuario, nombre } = deta;

    document.querySelector("#banner").innerHTML = `
<div class="w-100">
<a href="./mascotas.html" class="back"><img id="back" src="./img/back.png"></a>
<div class="w-25 perfil">
<center><img class="mx-auto img" src="${imgusuario}" alt="${usuario}">
<h1 class="mb-5">${usuario}</h1></center>
</div>
</div>
`
    document.querySelector("#part1").innerHTML = `
    <p class="hora"><strong>4:00 PM</strong></p>
    <div id="mensaje1">¡Hola! Me encantaría adoptar a ${nombre}.</div>
    <p class="hora"><strong>4:36 PM</strong></p>
    <div id="mensaje2">¡Hola! claro, podemos acordar un lugar y hora para que conoscas a ${nombre}.</div>
    `
})

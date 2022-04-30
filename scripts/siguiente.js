export const siguiente2 = () => {
    let contenedor = document.getElementById("siguiente");
    let primero = document.getElementById("primero")
    primero.innerHTML = ``
    contenedor.innerHTML = `
        <div class="w-100 mx-auto" id="segundo">
        <center>
        <div class="w-50 mx-auto">
        <img src="./img/adoptado.png" class="mx-auto my-5 w-75">
        <h3>Encuentra tu amigo fiel</h3>
        <p class="my-5">Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. 
        Si estás pensando en tener un nuevo integrante en tu familia; ¡estás en el lugar correcto!</p>
    
        <a href="./mascotas.html" class="my-5 siguientes" id="siguien">Siguiente</a>
        </div>
        </center>
        </div>
        `
}
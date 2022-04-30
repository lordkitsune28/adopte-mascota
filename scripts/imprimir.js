export const imprimir = (data) =>{
    const cont = document.getElementById("contenedor") 
 data.forEach(imprimir => {
        const { nomb, id, img, raz } = imprimir;
        cont.innerHTML += `
        <div class="card d-inline-block mx-2 my-3" style="width: 18rem;">
        <a href="#">
        <input type=image src="${img}" id="${id}" class="mx-auto imagen boton card-img-top" alt="${nomb}">
        </a>
        <div class="card-body mx-auto">
            <h5>${nomb}</h5>
            <p>${raz}</p>
        </div>
        </div>
       
        `
    });
}
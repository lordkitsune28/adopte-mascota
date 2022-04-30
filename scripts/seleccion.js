export const sperro = (data, contp, contg) =>{
    let perros = data.filter(item => item.categoria === "perro");
    contg.innerHTML = "";

    perros.forEach(perro => {
        const { nombre, id, imagen, raza } = perro;
        contp.innerHTML += `
        <div class="card d-inline-block mx-5 my-3" style="width: 18rem;">
        <a href="#">
        <input type=image src="${imagen}" id="${id}" class="mx-auto imagen boton card-img-top" alt="">
        </a>
        <div class="card-body mx-auto">
            <h5>${nombre}</h5>
            <p>${raza}</p>
        </div>
        </div>
       
        `
    });
    
}

export const sgato = (data, contg, contp) =>{
    let gatos = data.filter(item => item.categoria === "gato");
    contp.innerHTML = "";

    gatos.forEach(gato => {
        const { nombre, id, imagen, raza } = gato;
        contg.innerHTML += `
        <div class="card d-inline-block mx-5 my-3" style="width: 18rem;">
        <a href="#">
        <input type=image src="${imagen}" id="${id}" class="mx-auto imagen boton card-img-top" alt="">
        </a>
        <div class="card-body mx-auto">
            <h5>${nombre}</h5>
            <p>${raza}</p>
        </div>
        </div>
        ` 
    });
}
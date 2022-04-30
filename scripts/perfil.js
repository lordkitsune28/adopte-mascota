import { urlUser } from './url.js';
let form = document.getElementById('form')
const imprimir = document.getElementById('perfil')
const btnModificar = document.getElementById('modificar')
const inputName = document.getElementById('name')
const inputLastName = document.getElementById('lastName')
const inputEmail = document.getElementById('email')
const inputImage = document.getElementById('image')
const inputId = document.getElementById('id')


console.log(urlUser)
const perfilUser = async () => {

    const resp = await fetch(urlUser);
    const users = await resp.json();

    users.forEach(usuario => {
        const { nombre, apellido, id, imagen, correo } = usuario;
        imprimir.innerHTML = `
        <center>
        <img id="foto-perfil" class="rounded-circle w-25 mx-auto" src="${imagen}" alt="">
        <h6 id="perfil-nom">${nombre + " " + apellido}</h6>
        </center>`
        inputName.value = nombre;
        inputLastName.value = apellido;
        inputEmail.value = correo;
        inputImage.value = imagen;
        inputId.value = id;

    });
}

document.addEventListener('DOMContentLoaded', perfilUser)

const capturaDatos = () => {
    const id = document.getElementById('id').value;
    const imagen = document.getElementById('image').value;
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastName').value;
    const correo = document.getElementById('email').value;

    const user = {
        id,
        imagen,
        nombre,
        apellido,
        correo
    }
    return user;
}
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const objeto = capturaDatos();
    const { id } = objeto
    console.log(objeto)

    await fetch(urlUser + id, {
        method: 'PUT',
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
})

btnModificar.addEventListener('click',  () =>{
    document.querySelector(".foto").style.display = "block";
    document.querySelector(".id").style.display = "block";
    {
        document.getElementById('name').readOnly= false ;
        document.getElementById('email').readOnly= false ;
        document.getElementById('lastName').readOnly= false ;
        document.getElementById('image').readOnly= false;
    }
})
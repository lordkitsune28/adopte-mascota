export const enviar= async(e, endpoint) => {
    let id = e.target.id;
    
    if (e.target.classList.contains('boton')) {
        const respuesta = await fetch(endpoint);
        const data = await respuesta.json()
        const objeto = data.find(mascotas => mascotas.id === Number(id))
        localStorage.setItem("detail",JSON.stringify(objeto));
        window.location.href = "detalles.html"
    }
}
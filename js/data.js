document.addEventListener("DOMContentLoaded", () =>{

    //Crear variable para guardar el dato almacenado en el localStorage
    let datoGuardado = localStorage.getItem("datoIngresado");



    //Mostrar el dato guardado en el html
    document.querySelector("#data").innerHTML = datoGuardado;


})
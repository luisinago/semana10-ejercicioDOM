/* 
    Accedemos al valor asociado a "example" que devolverá null (nulo) ya que no hay nada cargado
    => console.log(localStorage.getItem("example"));


    Guardamos un valor cualquiera asociado a la clave "example" (notar que siempre debe almacenarse en String)
    => localStorage.setItem("example", "example value"); 

    Mostramos que ahora sí hay un valor asociado => console.log(localStorage.getItem("example"));

    Eliminamos el elemento asociado a "example" => localStorage.removeItem("example");

    Vemos que nuevamente es null => console.log(localStorage.getItem("example"));
    
*/

document.addEventListener("DOMContentLoaded", () =>{

    //Llamar al botón y reproducir función al hacerle clic
    document.querySelector("#buttonText").addEventListener('click', () =>{

        //Almacenar en una variable el valor del input, es decir, lo que pondrá el usuario
        let valorInput = document.querySelector("#inputText").value;

        //Utilizo este dato y lo ingreso en el localStorage. Lo guardo en una key "datoIngresado"
        localStorage.setItem("datoIngresado", valorInput);





    })

})



// Armado de listado de cursos, en página academia, el sgte código se ejecuta con el html
let jsonCursos= `[
    {
        "curso":"Ciberseguridad para empresas",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/contenido-computadora-portatil.jpg"
    },
    {
        "curso":"Ciudadanía digital para niños",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/ninos-usando-dispositivos-electronicos.jpg"
    },
    {
        "curso":"Alfabetización digital para adultos mayores",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/interfaz-firewall-proteccion-seguridad-cibernetica.jpg"
    },
    {
        "curso":"Alfabetización digital para jóvenes",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/amigos-usando-laptop-moviles.jpg"
    },
    {
        "curso":"Alfabetización digital para adultos mayores",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/personas-mayores-escuela-clase-computadora-portatil.jpg"
    }
]`

let cursos=JSON.parse(jsonCursos);
console.log(cursos)

for (let i=0; i<cursos.length; i++){
    // creacion de bloque div de columna
    let bloqcol=document.createElement('div');
    bloqcol.classList.add('col');
    // creacion de bloque div que contiene info contenido en el primero
    let bloqcard=document.createElement('div');
    bloqcard.classList.add("card","text-center","tarjetacurso");
    bloqcard.setAttribute("style","max-width:18rem;");
    // creacion imagen
    let foto=document.createElement('img');
    foto.classList.add('card-img-top');
    foto.src=cursos[i].imagen;
    // cracion de div contenedor de titulo y descripcion de curso
    let bloqinfo=document.createElement('div');
    bloqinfo.classList.add('card-body');
    // cracion de titulo y bloque info
    let h5=document.createElement('h5');
    h5.classList.add('card-title');
    h5.setAttribute("style","font-weight: bolder;");
    h5.innerText=cursos[i].curso;
    //info
    let infocurso=document.createElement('p');
    infocurso.classList.add('card-text');
    infocurso.innerText=cursos[i].descripcion;
    //creacion de botón
    let boton=document.createElement('button');
    boton.innerText="Ir al curso";
    boton.classList.add("btn", "btn-primary");
    //armado de tarjeta
    bloqinfo.appendChild(h5)
    bloqinfo.appendChild(infocurso)
    bloqinfo.appendChild(boton)
    bloqcard.appendChild(foto)
    bloqcard.appendChild(bloqinfo)
    bloqcol.appendChild(bloqcard)

    //Envio de tarjeta a html
    document.getElementById("bloquecursofila").appendChild(bloqcol)

}

// comportamiento de botones luego de cargado el html
//array con rutas de cada 
window.onload=function(){
    let botones=document.querySelectorAll("button");
    for(let j=0;j<botones.length;i++){
        botones[j].addEventListener('click',function(event){

        });
    }
}
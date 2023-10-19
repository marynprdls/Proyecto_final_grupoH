
// Armado de listado de cursos, en página academia, el sgte código se ejecuta con el html
let jsonCursos= `[
    {
        "curso":"Ciberseguridad para empresas",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/contenido-computadora-portatil.jpg",
        "temario":"Objetivos1...",
        "duración":"3 meses",
        "modalidad":"virtual",
        "costo":"$USD 300,00"
    },
    {
        "curso":"Ciudadanía digital para niños",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/ninos-usando-dispositivos-electronicos.jpg",
        "temario":"Objetivos2...",
        "duración":"3 meses",
        "modalidad":"virtual",
        "costo":"$USD 100,00"
    },
    {
        "curso":"Alfabetización digital para adultos",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/interfaz-firewall-proteccion-seguridad-cibernetica.jpg",
        "temario":"Objetivos3...",
        "duración":"3 meses",
        "modalidad":"virtual",
        "costo":"$USD 200,00"
    },
    {
        "curso":"Alfabetización digital para jóvenes",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/amigos-usando-laptop-moviles.jpg",
        "temario":"Objetivos4...",
        "duración":"3 meses",
        "modalidad":"virtual",
        "costo":"$USD 300,00"
    },
    {
        "curso":"Alfabetización digital para adultos mayores",
        "descripcion":"Curso basado ...",
        "imagen":"imagenes/personas-mayores-escuela-clase-computadora-portatil.jpg",
        "temario":"Objetivos5...",
        "duración":"3 meses",
        "modalidad":"virtual",
        "costo":"$USD 400,00"
    }
]`

let cursos=JSON.parse(jsonCursos);
// console.log(cursos)

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
    boton.setAttribute("data-bs-toggle","modal");
    boton.setAttribute("data-bs-target","#exampleModal");
    boton.setAttribute("data-bs-whatever",cursos[i].curso);
    
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
        
    //ventanas emergentes
        const exampleModal = document.getElementById('exampleModal')
        
        if (exampleModal) {
            exampleModal.addEventListener('show.bs.modal', event => {
            // Boton que dispara la ventana emergente
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            const recipient = button.getAttribute('data-bs-whatever')
            
            // Update the modal's content.
            const modalTitle = exampleModal.querySelector('.modal-title')
            const modalBodyp = exampleModal.querySelector('.modal-body p')
            const modalFooterp = exampleModal.querySelector('.modal-footer p')

            modalTitle.textContent = `Curso: ${recipient}`
            for (let i=0; i<cursos.length; i++){
                if(cursos[i].curso===recipient){
                    datatemario=cursos[i].temario
                    datacosto=cursos[i].costo
                }
            }
            modalBodyp.textContent = datatemario
            modalFooterp.textContent = datacosto
            })
        }
           
        
        
        //Botón de compra en ventana emergente relacion con carrito 
        let clickbotoncarro = document.getElementById("botoncarro")
        clickbotoncarro.onclick = incrementClick
        

        var contadora = 0

        function incrementClick () {
        actualizacontador(++contadora)
        clickbotoncarro.innerText='¡Listo!'
        }

        function actualizacontador(val) {
            document.querySelector('.cantcompra').innerHTML = val
        }

        //Actualización de estado botón emergente
        exampleModal.addEventListener('hidden.bs.modal', event => {
            clickbotoncarro.innerText='Agregar al Carrito'
        })
        
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navscroll").style.backgroundColor = "blue";
    document.getElementById("navscroll").style.opacity = "80%";
  } else {
    document.getElementById("navscroll").style.backgroundColor = "transparent";
    document.getElementById("navscroll").style.opacity = "100%";
  }
}

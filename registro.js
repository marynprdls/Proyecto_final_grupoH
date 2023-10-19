let formulario = document.getElementById('formularioaulavirtual1');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  function datosUsuario() {
    let datosUsuario = {};
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let nacionalidad = document.getElementById('nacionalidad').value;
    let tipoDocumento = document.querySelector('input[name="documento"]:checked').value;
    let numeroDocumento = document.getElementById('numero').value;
    let paisResidencia = document.getElementById('pais').value;
    let nivelEducativo = document.querySelector('select[name="Nivel educativo"]').value;
    let celular = document.getElementById('celular').value;
    let direccion = document.querySelector('#direccion').value;
    let email = document.getElementById('email').value;
    let nombreUsuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;

    datosUsuario.nombres = nombres;
    datosUsuario.apellidos = apellidos;
    datosUsuario.fechaNacimiento = fechaNacimiento;
    datosUsuario.sexo = sexo;
    datosUsuario.nacionalidad = nacionalidad;
    datosUsuario.tipoDocumento = tipoDocumento;
    datosUsuario.numeroDocumento = numeroDocumento;
    datosUsuario.paisResidencia = paisResidencia;
    datosUsuario.nivelEducativo = nivelEducativo;
    datosUsuario.celular = celular;
    datosUsuario.direccion = direccion;
    datosUsuario.email = email;
    datosUsuario.nombreUsuario = nombreUsuario;
    datosUsuario.password = password;

    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
    let datosGuardados = localStorage.getItem('datosUsuario');
    console.log('Datos guardados en el localStorage:', datosGuardados);
  }

  datosUsuario();
});
// color a barra de navegacion con scroll
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
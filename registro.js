let formulario = document.getElementById('formularioaulavirtual1');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validarFormulario()) {
    datosUsuario();
  }
});

function validarFormulario() {
let email = document.getElementById('email').value;
let emailRegex = /^\S+@\S+\.\S+$/;

if (!emailRegex.test(email)) {
  alert("Por favor, ingresa un correo electrónico válido.");
  return false;
}
  let contraseña = document.forms["formularioaulavirtual1"]["password"].value;
  let confirmarContraseña = document.forms["formularioaulavirtual1"]["confirmarContraseña"].value;

  if (contraseña == "") {
    alert("Por favor, ingresa una contraseña.");
    return false;
  }

  if (confirmarContraseña == "") {
    alert("Por favor, confirma tu contraseña.");
    return false;
  }

  if (contraseña.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return false;
  }

  if (contraseña != confirmarContraseña) {
    alert("Las contraseñas no coinciden.");
    return false;
  }

  return true;
}

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
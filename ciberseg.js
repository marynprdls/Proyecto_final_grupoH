// En nuestro proyecto queremos aplicar JAvascript a la página Aula Virtual, que deriva al usuario a un formulario de registro, en caso de no ser usuario registrado, o deriva al usuario al aula virtual.
// En el formulario de registro: alertas en el ingreso de contraseña, según cantidad y tipo de caracteres que ingrese el usuario.(uso de letras minúsculas y mayúsculas, números, caracteres especiales).
// En aula virtual, saludo de bienvenida con nombre de usuario incluido,  con console.log
// Tiempo de inicio de sesión: sugerencia con un alert, sobre extención o terminar la sesión.
// En la página Index, aplicamos Javascript en el formulario de contacto, mensaje de alerta al usuario en el casillero de "mensaje", sugiriendo cantidad de palabras, e invitando al usuario a contactarse.



// function saludar(nombre, apellido) {
//     return 'Hola, ' + nombre + ' ' + apellido + '!';
// }

let nomusuario=prompt("Ingresar su nombre:");
let apeusuario=prompt("Ingrese su apellido:");

if ( nomusuario == ""){
    alert("No ingresaste nombre de usuario correctamente" );
} else {
    alert(" El usuario ingresado es" + " "+ nomusuario);
}

let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

console.log(saludar(nomusuario,apeusuario));

// mensaje del formulario en index

alert("¿En qué podemos ayudarte? Dejanos tu mensaje y en la brevedad nos pondremos en contacto.");

// Tiempo de inicio de sesión

alert("Su sesión está a punto de caducar. ¿Quiere extender su sesión actual?");
// ver como agregar botones a la alerta "extender sesión" o "salir".


//Script Formulario
//Guargar informacion del formulario antes un f5
let id = document.getElementById('fNombre');  
let id2 = document.getElementById('fMail');    
let id3 = document.getElementById('fNumber');

let tempDATA = JSON.parse(localStorage.getItem('input')); //recupero lo guardado
let tempDATA2 = JSON.parse(localStorage.getItem('input1'));
let tempDATA3 = JSON.parse(localStorage.getItem('input2'));


if (tempDATA != null) { nombreF = tempDATA; id.value = (nombreF); }  //si tempdata tiene caracteres ejemplo va a almacenar esa info
if (tempDATA2 != null) { emailF = tempDATA2; id2.value = (emailF); } //los ejemplos = nombreF,emailF,numeroF
if (tempDATA3 != null) { numeroF = tempDATA3; id3.value = (numeroF); }

function save() {
    localStorage.setItem('input', JSON.stringify(nombreF)); //strings transform
    localStorage.setItem('input1', JSON.stringify(emailF));
    localStorage.setItem('input2', JSON.stringify(numeroF));
}

function comprobacion() {
    // console.log('comprobracion = ' + timer);
    nombreF = id.value;
    emailF = id2.value; //re-guardo los valores
    numeroF = id3.value;

    // console.log(ejemplo, ejemplo2, ejemplo3);
    
    save(); //guardo/actualizo en localStorage
}


let timer;

//Creo Clase
class Consulta {
    constructor(nombre, email, numero) {
        this.nombre = nombre;
        this.email = email;
        this.numero = numero;
    }
}

//defino variables globales par DOM
let arrayConsulta = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#fNombre");



// let nombreF = document.getElementById("fNombre").value;

// let emailF = document.getElementById("fMail").value;

// let numeroF = document.getElementById("fNumber").value;

let flag = false;

//Defino eventos de boton

miFormulario.addEventListener("submit", agregarConsulta);

inputNombre.focus();

//Funciones
function validarForm() {
    nombreF = document.getElementById("fNombre").value;
    // alert(nombreF);

    emailF = document.getElementById("fMail").value;
    // alert(emailF);

    numeroF = document.getElementById("fNumber").value;
    // alert(numeroF);
    // console.log(nombreF);
    // console.log(emailF);
    // console.log(numeroF);

    if (nombreF == '' || emailF == '' || numeroF == '') {
        alert("ERROR - Todos los campos tienen que estar completos.");
        inputNombre.focus();
        flag = false;
    } else {
        flag = true;
    }
}

//Funcion para Agregar Consultas al Array

function agregarConsulta(e) {
    e.preventDefault();
    validarForm(); //Validacion del Form.
    if (flag == true) {
        let opcion = confirm("Desea agregar la consulta?");
        if (opcion == true) {
            let test = e.target
            arrayConsulta.push(new Consulta(nombreF, emailF, numeroF));
            // console.log(test);

        } else {
            alert("No se agregara consulta");
        }
        limpiarFormulario();
        inputNombre.focus();
        console.log(arrayConsulta);
    } else {
        inputNombre.focus();
    }
}


function limpiarFormulario() {
    document.getElementById("formulario").reset();

}    

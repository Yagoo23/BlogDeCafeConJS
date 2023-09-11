// querySelector
const heading = document.querySelector('.header__texto h2'); //retorna 0 o 1 elemento
heading.textContent = "Nuevo Heading";
//heading.classList.add('nueva-clase');
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = "Nuevo texto para enlace";
//enlaces[0].href = 'http://www.google.com';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].remove('navegacion__enlace');

//getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A'); //Se recomienda en mayúsculas
//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

//Eventos

// console.log([1]);

// window.addEventListener('load', function(){ // load espera a que el JS y los archivos que dependen de HTML estén listos
//     console.log([2]);
// });

// window.onload = function(){
//     console.log([3]);
// }

// document.addEventListener('DOMContentLoaded',function(){
//     console.log([4]);
// });

// console.log([5]);


// window.onscroll = function(evento){
//     console.log(evento);
//     console.log('scrolling...');
// }

//Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click',function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     //Validar un formulario
//     console.log('Enviando formulario');
// });

//Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
//El evento de Submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //Validar el formualario

    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        //console.log('Todos los campos son obligatorios.');
        mostrarAlerta('Todos los campos son obligatorios.',true);
        return; //Corta la ejecución del código
    }

    //Enviar el formulario
    //Crear la alerta de Enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente');
    console.log('Enviando formulario...');

});

function leerTexto(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    //console.log(e.target);

    //console.log(datos);
}

function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


let listaNumerosSorteado=[];
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 2;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*10)+1;
    // verificamos los datos que se van generando
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    //SI SORTEAMOS TODOS LoS NUMEROS ->verf numMAX
    if(listaNumerosSorteado.length >= numeroMaximo){
        asignarTextoElemento('p',`se termminaron intentos,reinicia el juego`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    } else {

    // si el numero generado  esta incluido  en la lista 
    // includes // recorre o barre la lista y verifica si el numero existe --> responde true o false
        if(listaNumerosSorteado.includes(numeroGenerado)){
            //concepto de recursiividad- usar las funciones ya creadas para un codigo mas limpio
            // llamar a si misma a la funcion con return
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteado.push(numeroGenerado);         
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
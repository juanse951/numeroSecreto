let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10 ;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");     
        }
        else {
            asignarTextoElemento ("p","El número secreto es mayor")
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value ="";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los juegos
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    }else{
        //si el numero generado esta incluido en la lista if p else
        if(listaNumerosSorteados.includes(numeroGenerado)){
        //si el numero ya esta en lista no sirve
        return generarNumeroSecreto();
        } else {
        //guardamos el numero en la lista
        listaNumerosSorteados.push(numeroGenerado);
        //lo retornamos
        return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
   // console.log(numeroSecreto);
    //console.log(intentos);
}

function reiniciarJuego(){
//limpiar la caja
limpiarCaja();
//mensaje de intervalo de números
condicionesIniciales();
//generar el número aleatorio
//inicializar los intentos
//disabled button nuevo juego
document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
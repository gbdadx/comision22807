let nombre;
let apuesta;
let auxiliar;
let seguir = true;
let jugada;

//FUNCIONES

// pedir, devuelve lo que le pidas
function pedir(tipo) {
    let variable = prompt(`ingrese su ${tipo}`)
    return variable;
}
// randomInteger, da un numero entero entre dos 
/*
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}*/
/*
function color(col) {
    return (col) ? 'rojo' : 'negro';
}

function numeros(num) {
    return randomInteger(0, 36);
}

function parImpar(modulo) {
    return randomInteger(0, 1);
}
*/
//pide el nombre y lo pone en el html
nombre = pedir('nombre');
document.getElementById('nom').innerHTML = nombre;

//elige el tipo de apuesta y da opcion de terminar
do {
    seguir = confirm('quiere seguir?')
    auxiliar = (pedir 'prefiere apostar a NUMERO (n), COLOR (C) o PARIDAD(p)');
} while (seguir);

switch (auxiliar) {
    case 'n':
        apuesta = pedir('su numero');
        seguir = false;
        jugada = randomInteger(0, 36);

        break;
    case 'c':
        apuesta = pedir('su color: rojo (r) o negro(n)');
        seguir = false;
        jugada = randomInteger(0, 1);

        break;
    case 'i':
        apuesta = pedir('su apuesta: par (p) o impar (i)');
        seguir = false;
        jugada = randomInteger(0, 1);

        break:
    case 'p':
        apuesta = pedir('su apuesta', apuesta);
        seguir = false;
        jugada = randomInteger(0, 1);

        break;
    default:
        alert('ninguna respuesta valida, intente otra vez ')
}
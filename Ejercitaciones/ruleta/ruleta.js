let nombre;
let apuesta;
let auxiliar;
let seguir=true;
let jugada;


function pedir(tipo, variable){
    variable=prompt(`ingrese tu ${tipo}`)
    return variable;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  function color(col){
    return (col)? 'rojo':'negro';
  }
  function numeros(num){
    return randomInteger(0,36);
  }
  function parImpar(modulo){
    return randomInteger(0,1);
  }


nombre=pedir('nombre', nombre);
do{
seguir=confirm('quiere seguir?')
auxiliar=(pedir'prefiere apostar a NUMERO (n), COLOR (C) o PARIDAD(par=p, impar=i', auxiliar);
}while(seguir)

switch(auxiliar){
    case 'n':
        apuesta=pedir('su apuesta', apuesta);
        seguir=false;
        jugada=randomInteger(0,36);

    break;
    case 'c':
        apuesta=pedir('su apuesta', apuesta);
        seguir=false;
        jugada=randomInteger(0,1);

    break;
    case 'i':
        apuesta=pedir('su apuesta', apuesta);
        seguir=false;
        jugada=randomInteger(0,1);
        color(jugada);

    break:
    case 'p':
        apuesta=pedir('su apuesta', apuesta);
        seguir=false;
        jugada=randomInteger(0,1);

    break;
    default:
        alert('ninguna respuesta valida, intente otra vez ')
}

let resultado= alert (``)





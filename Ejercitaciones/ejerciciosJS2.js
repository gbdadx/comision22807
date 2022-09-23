

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  return Math.max(x, y);
}
// como funcion flecha


const obtenerMayo = (x, y) => Math.max(x, y);
alert(`el resultado es ` + obtenerMayo(+prompt(`dame un numero`), +prompt(`dame otro numero`)));

/////////////////////

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return (edad >= 18) ? "allowed" : "Not allowed";
}
//como funcion flecha

const mayorEdad = edad => (edad >= 18) ? "Allowed" : "Not allowed";
mayorEdad(+prompt(`tu edad?`));
////////////////////

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  return (status == 1) ? "Online" : (status == 2) ? "Away" : "Offline";

}
conection(prompt('ingrese estado de conexion 1=online, 2=away, cualquier otro se considerara offline'));


//como flecha:

const coneccion = (estado) => (estado == 1) ? "Online" : (estado == 2) ? "Away" : "Offline"
coneccion(prompt('ingrese estado de conexion 1=online, 2=away, cualquier otro se considerara offline'));

//////////////////////////////////////

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  return (idioma == 'aleman') ? "Guten Tag" : (idioma == "mandarin") ? "Ni Hao!" : "Hola!";
}
saludo(prompt('ingrese su idioma : aleman, mandarin, cualquier otro se considerara español')).toLowerCase();

// como funcion flecha:
const greeting = (idioma) => (idioma == 'aleman') ? "Guten Tag" : (idioma == "mandarin") ? "Ni Hao!" : "Hola!"


//////////////////////////////////////

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case "blue": return "This is blue";
    case "red": return "This is red";
    case "green": return "This is green";
    case "orange": return "This is orange";
    default: return "Color not found";
  }

}
colors(prompt('enter a color:').toLowerCase());


/////////////////////////////////////////

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return (numero === 10 || numero === 5) ? true : false;

}
esDiezOCinco(+prompt('ingrese un numero'));




///////////////////////////////////

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return (numero < 50 && numero > 20);
}

estaEnRango(+prompt('ingrese un numero'));


//////////////////////////////////

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return (numero === Math.floor(numero));

}
esEntero(+prompt('ingrese un numero'));
//////////////////////////////
function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) return 'fizzbuzz';
  else if (numero % 3 === 0) return "fizz";
  else if (numero % 5 === 0) return "buzz";
  else return numero;

}
fizzBuzz(+prompt(`dame un numero`));

// como flecha:
const fizBuz = (numero) => {

  if (numero % 3 === 0 && numero % 5 === 0) return 'fizzbuzz';
  else if (numero % 3 === 0) return "fizz";
  else if (numero % 5 === 0) return "buzz";
  else return numero;
}

fizBuz(+prompt(`dame un numero`));


////////////////////////
function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  if (num1 === 0 || num2 === 0 || num3 === 0) return "error";
  else if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
  else if (num1 > num2 && num1 > num3) return "Número 1 es mayor y positivo";
  else if (num3 > num1 && num3 > num2) { num3++; return num3; }
  else return false;

}
operadoresLogicos(+prompt(`dame un numero`), +prompt(`dame un numero`), +prompt(`dame un numero`));


////////////////////////////////

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  let cont = 0;
  for (let i = 2; i <= numero; i++) {
    if (numero % i === 0) cont++;

  }
  return (cont === 1);

}
esPrimo(+prompt(`dame un numero`));


/////////////////////////////////
//Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
//si su valor es true y “Soy falso” si su valor es false.
//Escribe tu código aquí
/*
false
undefined
null
NaN
0
"" (empty string
*/
function esVerdadero(valor) {

  if (valor === '' || valor === 'false' || valor === '0' || valor === 'undefined' || valor === 'NaN' || valor === 'null') valor = 'soy falso';
  else valor = 'soy verdadero';
  return valor;

}
esVerdadero(prompt(`dame algo que sea cierto `));


///////////////////////////////////

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  const tablaDel6 = [];
  for (let i = 0; i < 11; i++)tablaDel6[i] = i * 6;
  return tablaDel6;
}
tablaDelSeis();

///////////////////////////////////
function tieneTresDigitos(numero) {
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  let aux = numero.toString();
  if (esEntero(numero)) {
    if (aux.length === 3) return 'tiene tres digitos';
    else return 'no tiene tres digitos';

  }
  else return 'no es entero';

}

tieneTresDigitos(+prompt(`dame un numero`));

///////////////////////////////

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let contador = 0;
  do {
    numero += 5;
    contador++;

  } while (contador < 8);
  return numero;
}
doWhile(100);


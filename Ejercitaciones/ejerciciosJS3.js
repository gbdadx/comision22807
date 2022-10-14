// No cambies los nombres de las funciones.
let array = [1, 2, 3, 4, 5];
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  console.log(array[0]);
}
/************************************ */

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  console.log(array[array.length - 1]);
}
/********************************/

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  console.log(array.length);
}
/*********************** */
// "array" debe ser una matriz de enteros (int/integers)
// Aumenta cada entero por 1
// y devuelve el array
// Tu código:

function incrementarPorUno(array) {

  console.log(array.map(sumaUno));
  function sumaUno(num) { return num + 1; 
  }

  /*
  
  const incrementarPorUno = (array) => array.map((el) => el + 1);*/
  incrementarPorUno(numeros);

  /*********************************** */
  function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    return array.push(elemento);
  }

  /************************************************************* */
  function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    return array.unshif(elemento);
  }
  /********************************************************** */

  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(` `);
  }

  /******************************************** */
  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    console.log(array.includes(elemento));
  }
  arrayContiene(animales, 'Murcielago');

  /*************************************************************** */
  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    console.log(suma);
  }
  agregarNumeros(numeros);

  //console.log(numeros.reduce((acumulador, actual) => acumulador + actual));


  /********************************/
  const resultadosTest = [1, 2, 3, 4, 5, 6];
  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let cont = 0;
    let sum = 0;
    for (let i = 0; i < resultadosTest.length; i++) {
      sum += resultadosTest[i];
      cont++;
    }
    return sum / cont;
  }
  promedioResultadosTest(resultadosTest)
  /*
  ****************************************************************************/
  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    console.log(Math.max(...numeros));//SPREAD OPERATOR
  }
  numeroMasGrande(numeros)
  /***************************************** */
  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    let resultado = 1;
    if (arguments.length < 1)
      return 0;
  }
  if (arguments.length == 1) {
    resultado = arguments[0];
    return resultado;
  }
  for (var i = 0; i < arguments.length; i++) {
    resultado *= arguments[i];
  }

  return resultado;
}
multiplicarArgumentos()
/************************ */
function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cont = 0;
  for (let i of arreglo) {

    if (i > 18) cont++;

  }
  return cont;
}
cuentoElementos(arreglo)
/***********************************/
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  return (numeroDeDia == 1 || numeroDeDia == 7) ? 'Es fin de semana' : 'Es dia laboral';
}
diaDeLaSemana(1)
/********************************** */
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var cadena = String(n);
  return (cadena[0] == 9) ? true : false;
}
empiezaConNueve(985)
/********************************* */
//Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
function todosIguales(arreglo) {
   
  let elem = arreglo[0];
  let contador = 0;
  for (let e of arreglo) {
    if (e == elem) contador++;
  }
  return (contador > 1) ? true : false;
}


todosIguales(arreglo)

//creo que se puede hacer con every 
/******************************* */
//Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
//Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
// "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
//Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
// Tu código:
const array2 = ['Enero', 'febrero', 'Marzo', 'Noviembre'];
function mesesDelAño(array) {

  let mesesPedidos = [];
  for (let mes of array) {
    switch (mes) {
      case 'Enero':
      case 'Noviembre':
      case 'Marzo':
        mesesPedidos.push(mes);
        break;
      default:
        break;
    }

  }
  return (mesesPedidos.length == 3) ? mesesPedidos : "No se encontraron los meses pedidos";

}

mesesDelAño(array2)
/***************************/
const arr1 = [100, 20, 105, 800, 22, 201, 3];
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  return array.filter(elementos => elementos > 100 );
}
mayorACien(arr1);
/********************** */
//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
function breakStatement(numero) {
  
  let arreglo = [];
  let suma = 0;
  for (let i = numero; i <= 10; i += 2) {
    suma += i;
    if (i === suma) {
      console.log('se interrumpio la ejecucion ');
      break;
    }
    arreglo.push(i);
  }
  return arreglo;
}

/*********************** */
//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
function continueStatement(numero) {
  
  let arreglo = [];
  for (let i = numero; i <= 10; i += 2) {
    if (i === 5) continue;
    arreglo.push(i);
  }
  return arreglo;
}


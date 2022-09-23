//funcioN
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad
function datosPersona() {
    let nombreP = prompt('decime cual es tu nombre?');
    let edadP = +prompt('decime tu edad');
    if (edadP < 18) {
        alert('no puede pasar');
    } else {
        let horaP = +prompt('decime que hora es');
        let suma = 0;
        if (horaP > 2) {
            suma = nombreP.length + edadP;
        } else suma = 0;
        alert(`importe a pagar: ${suma}`);
    }

}
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = prompt('decime tu nombre: ');

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = parseInt(prompt('ingresa tu edad: '));

// Crea una variable booleana:
const nuevoBool = 0 > 1;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 7 === 0;

/*
function devolverString(str) {
    document.write(str);

}
devolverString('Batman'); */
const devolverString = str => document.write(str);

devolverString('batman');
/////////////////////////////
function suma(x, y) {
    document.write(x + y + "</br>");
}


suma(20, 30);

/*
como funcion flecha:

const suma=(x, y)=>document.write((x+y)+"</br>");


*/ 





///////////////////////

function resta(x, y) {
    // Resta "x" de "y" y devuelve el valor
    // Tu código:
    return (x - y);

}
//////////////////////
function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    return (x * y);
}
const multiplica= (x, y) => (x * y);



/////////////////////////////////
function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    return (x / y);
}

function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:utilizar if y else
    if (x == y) return true;
    else return false;

}

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if (str1.length == str2.length) return true;
    else return false;
}

function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    return (num < 90) ? true : false;

}

function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    return (num > 50) ? true : false;

}

function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    return (x % y);
}

function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    return (num % 2) ? false : true;

}

function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    return (num % 2) ? true : false;

}

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    return num ** 2;

}

function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    return num ** 3;
}

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return num ** exponent;
}

function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    return Math.round(num);
}

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    return Math.ceil(num);
}

function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    return (Math.random());
}

function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    let retorno;
    if (numero == 0) return false;
    return (numero % 2 == 0) ? "Es positivo" : "Es negativo";

}

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    return str + '!';

}

function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
    // Tu código:
    return `Soy ${nombre} ${apellido}`;

}

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    return `Hola ${nombre}!`;

}

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un cuadrado teniendo su altura y ancho
    // Tu código:
    return alto * ancho;

}

function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    return lado * 4;
}

function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    return base * altura / 2;

}

function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. 
    //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    return euro * 1.2;

}

//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
//Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//si ingresa una consonante muestre en pantalla dato incorrecto
//Escribe tu código aquí
function esVocal(letra) {

    let dato;

    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            dato = 'es vocal';
            break;
        default:
            dato = 'Dato incorrecto';
            break;
    }
    return dato;
}
esVocal(prompt('ingrese una vocal').toLowerCase());
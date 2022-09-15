// tarea
/* operadores de comparacion y su funcionalidad
&&
||
!=
!==
 */

let a = 1;
let b = 0;
let c = -1;
let d = 1;
let e = -0;
let f = '1';
let g = '0';





console.log('variables')
console.log(`a = ${a}    b=${b}    c=${c}`)
console.log(`d = ${d}    e=${e}    f=${f}`)

console.log('operador &&')
console.log('a && b ' + (a && b))
console.log('a && c ' + (a && c))
console.log('b && b ' + (b && b))


console.log('operador ||')
console.log('a || b ' + (a || b))
console.log('a || c ' + (a || c))
console.log('b || b ' + (b || b))

console.log('operador !=')
console.log('a != f ' + (a != f))
console.log('a !== f ' + (a !== f))
console.log('b != g' + (b != g))
console.log(' 0 != -0 ' + (0 != -0))
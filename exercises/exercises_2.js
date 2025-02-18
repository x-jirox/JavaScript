// 1. Crea una variable para cada operación aritmética
let suma = 10 + 5;
let resta = 20 - 8;
let multiplicacion = 4 * 6;
let division = 30 / 5;
let modulo = 17 % 3;
let exponente = 2 ** 3;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let num = 10;
num += 5; // Ahora num es 15
num -= 3; // Ahora num es 12
num *= 2; // Ahora num es 24
num /= 4; // Ahora num es 6
num %= 5; // Ahora num es 1
num **= 2; // Ahora num es 1 (1 elevado al cuadrado sigue siendo 1)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5); // true
console.log(20 >= 20); // true
console.log(8 === 8); // true
console.log(15 !== 10); // true
console.log(3 < 7); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 > 10); // false
console.log(10 < 3); // false
console.log(7 === "7"); // false (comparación estricta)
console.log(9 !== 9); // false
console.log(20 <= 15); // false

// 5. Utiliza el operador lógico AND
console.log(true && true); // true
console.log(10 > 5 && 8 < 12); // true
console.log(5 === 5 && "Hola" === "Hola"); // true
console.log(7 > 3 && 10 !== 11); // true
console.log(3 > 1 && 5 < 9); // true

// 6. Utiliza el operador lógico OR
console.log(false || true); // true
console.log(10 > 20 || 5 < 10); // true
console.log("JavaScript" === "Python" || 100 === 100); // true
console.log(7 !== 7 || 2 === 2); // true
console.log(0 || "Hola"); // "Hola" (valores falsy)

// 7. Combina ambos operadores lógicos
console.log((10 > 5 && 5 < 8) || 20 === 30); // true
console.log((4 === 4 && 6 > 2) || (7 < 5 && 9 > 10)); // true
console.log((3 > 1 && 8 !== 8) || (5 === 5 && 2 < 3)); // true
console.log((100 < 50 && 20 > 10) || (10 === 10 && 5 !== 2)); // true
console.log((7 > 10 && 4 < 3) || (9 > 5 && 12 !== 11)); // true

// 8. Añade alguna negación
console.log(!false); // true
console.log(!(10 > 5)); // false
console.log(!(8 !== 8)); // true
console.log(!(5 < 3 || 7 === 7)); // false
console.log(!(4 > 2 && 9 !== 10)); // false

// 9. Utiliza el operador ternario
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"

let numero = 10;
console.log(numero % 2 === 0 ? "Es par" : "Es impar"); // "Es par"

let usuarioActivo = false;
console.log(usuarioActivo ? "Bienvenido" : "Por favor, inicia sesión"); // "Por favor, inicia sesión"

let temperatura = 30;
console.log(temperatura > 25 ? "Hace calor" : "Hace frío"); // "Hace calor"

let saldo = 100;
console.log(saldo >= 50 ? "Puedes comprarlo" : "Saldo insuficiente"); // "Puedes comprarlo"

// 10. Combina operadores aritméticos, de comparación y lógicas
let resultado = (10 + 5) > (20 - 8) && (4 * 2) === 8;
console.log(resultado); // true

let check = (20 / 5) !== (17 % 3) || (2 ** 3) > 7;
console.log(check); // true

let final = !(10 > 5 && 3 < 8) || (6 * 2) === 12;
console.log(final); // false

console.log(((5 + 5) * 2 > 15) && ((30 / 3) <= 10) || (20 % 3 === 2)); // true

console.log(((8 ** 2) / 4 > 10) && !(15 < 5 || 3 === 3)); // false

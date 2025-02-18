// 1. Escribe un comentario en una línea
// Este es un comentario

// 2. Escribe un comentario en varias líneas
/*
comentario
en 
varias 
líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivo
var nombre = "Lenin";
let age = 21;
let work = true;
let undefinedValue;
let nullValue = null;
let mySymbol = Symbol("mySymbol");
let myBigInt = BigInt("4444444445784521245784542478754454589");

// 4. Imprime por consola el valor de todas las variables
console.log(nombre, age, work, undefinedValue, nullValue, mySymbol, myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(
  typeof nombre,
  typeof age,
  typeof work,
  typeof undefinedValue,
  typeof nullValue,
  typeof mySymbol,
  typeof myBigInt
);

// 6. Modifica los valores de las variables por otros del mismo tipo
nombre = "Paul";
age = 30;
work = false;
undefinedValue = undefined;
nullValue = null;
mySymbol = Symbol("newSymbol");
myBigInt = BigInt("999999999999999999999999");

// 7. Modifica los valores de las variables por otros de distinto tipo
nombre = 100; // Ahora es un número
age = "Treinta"; // Ahora es un string
work = "Sí"; // Ahora es un string
// undefinedValue = "Ahora tiene un valor"; // No es necesario redefinir undefined
nullValue = 0; // Ahora es un número
// mySymbol = "Simbolo"; // ❌ Esto no se puede hacer, ya que los símbolos son únicos
myBigInt = "No soy un BigInt"; // Ahora es un string

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constantString = "Hola mundo";
const constantNumber = 42;
const constantBoolean = true;
const constantUndefined = undefined;
const constantNull = null;
const constantSymbol = Symbol("constantSymbol");
const constantBigInt = BigInt("123456789123456789123456789");

// 9. Modifica los valores de las constantes
// constantString = "Nuevo valor"; // ❌ Error: No se puede reasignar una constante
// constantNumber = 99; // ❌ Error: No se puede reasignar una constante
// constantBoolean = false; // ❌ Error: No se puede reasignar una constante
// constantUndefined = "Ahora tiene un valor"; // ❌ Error
// constantNull = 1; // ❌ Error
// constantSymbol = Symbol("otro"); // ❌ Error
// constantBigInt = 100n; // ❌ Error

// 10. Comenta las líneas que producen error para que el código sea ejecutable sin problemas

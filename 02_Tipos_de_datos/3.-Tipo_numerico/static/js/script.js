console.log("Conexion exitosa")

// Tipos de datos numéricos

// 1.- Declaracion de números(creación de variables numericas)
let edad = 31;
let temperatura = -5;
let precio = 19990;
let pi = 3.1416;
let descuento =  0.25;

// Operaciones básicas
let suma = 10 + 5; //15
let resta = 10 - 5; //5
let multiplicacion = 10 * 5; //50
let division = 10 / 2; //5
let modulo = 10 % 3; //1
let potencia = 2 ** 3; //8

console.log(`El resultado de 2 elevado a 3 en potencia es: ${2**3}`)

// 3.- Incremento y decremento
let numero = 10;
numero++; //11
numero--; //9

// 4.- Numeros con decimales
let promedio = 6.5;
let altura = 1.67;
let peso = 90.3;

// 5.- Numeros grandes y notacion cientifica
let poblacion = 1e6; //1000000
console.log(`Numero grande 1e6 ${poblacion}`)
let numeroPequeno = 5e-3; //0.005
console.log(`Numero pequeño ${numeroPequeno}`)

// 6.- Operaciones combinadas
// calculo de precios
let precioProducto = 10000;
let iva = 0.19;
let total = precioProducto + (precioProducto * iva); //11900
console.log (`El valor final del producto es: ${total}`)
// Calculo de valor de hora trabajada
let horas = 40;
let valorHora = 120000;
let sueldo = horas * valorHora;
console.log(`El sueldo base es: ${sueldo}`)
// 7.- Redondeo de numeros
console.log(`Redondeando 4.6 ${Math.round(4.6)}`);//5
console.log(`Redondeando 4.6 ${Math.floor(4.6)}`);//4

//8.- Numeros aleatorios
let aleatorio = Math.random(); // entre 0 y 1
let dado = Math.floor(Math.random()*6) + 1; // 1 al 6
console.log(`Tirar dados: ${dado}`);

// 9.- Comparaciones numéricas
let a = 10;
let b = 5;
console.log(a > b); //  True
console.log(a < b); // False
console.log(a === 10); // True (=== estricta igualdad)
console.log(b === 3); // False 
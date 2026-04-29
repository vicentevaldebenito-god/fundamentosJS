console.log(`Conexion exitosa con JS`)

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "Juan"
    alert(`Bienvenido ${nombre}`)
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let num1 = 5;
    let num2 = 10;
    let resultado = num1 + num2;
    alert(`La suma es: ${resultado}`)
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let numero1 = 20;
    let numero2 = 8;
    let resta = numero1 - numero2;
    alert(`La resta es: ${resta}`)
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let number1 = 6;
    let number2 = 4;
    let mult = number1 * number2;
    alert(`La multiplicacion es: ${mult}`)
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let nota1 = 5.7;
    let nota2 = 6.1;
    let nota3 = 5.3;
    let promedio = (nota1 + nota2 + nota3) / 3
    alert(`El promedio es: ${promedio}`)
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 19
    if (edad >= 18) {
        alert(`Es mayor de edad`)
    } else {
        alert(`Es menor de edad`)
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numerito = 8

    if (numerito % 2 === 0) {
        alert(`El número es par`)
    } else {
        alert(`El número es impar`)
    }
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let nota = 5.4

    if (nota >= 4.0) {
        alert(`Estudiante aprobado`)
    } else {
        alert(`Estudiante reprobado`)
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let precio = 20000
    let descuento = 0.10
    let precioFinal = precio - (precio * descuento)
    alert(`Precio final con descuento: ${precioFinal}`)
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let comparacion1 = 22
    let comparacion2 = 17

    if (comparacion1 > comparacion2) {
        alert(`El numero mayor es: ${comparacion1}`)
    } else {
        alert(`El numero mayor es ${comparacion2}`)
    }
}

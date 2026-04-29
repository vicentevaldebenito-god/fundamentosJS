
// EJERCICIO 1
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio1() {
    let rendimiento = 6.5
    let estudiante = "Juan"
    if (rendimiento >= 6.0) {
        alert(`El estudiante ${estudiante} tiene nota ${rendimiento} y su resultado es: Excelente rendimiento`)
    } else {
        if (rendimiento > 4.0) {
            alert(`El estudiante ${estudiante} tiene nota ${rendimiento} y su resultado es: Aprobado`)
        } else {
            if (rendimiento < 4.0) {
                alert(`El estudiante ${estudiante} tiene nota ${rendimiento} y su resultado es: Reprobado`)
            } else {
                alert(`El estudiante ${estudiante} no ha rendido el examen`)
            }
        }
    }
}


// EJERCICIO 2
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio2() {
    let nombre = "Daniel Pérez";
    let nombreConvertido = nombre.toUpperCase();
    alert(`El nombre convertido es ${nombreConvertido} y tiene ${nombreConvertido.length} caracteres`)
}


// EJERCICIO 3
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio3() {
    let correo = "ejemplo@gmail.com";
    if (correo.length >= 15) {
        alert(`El correo convertido es: ${correo.toLowerCase()} y el resultado es: Correo válido`)
    } else {
        alert(`El correo convertido es ${correo.toLowerCase()} y el resultado es: Correo Inválido`)
    }
}


// EJERCICIO 4
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio4() {
    let frase = "Estoy aprendiendo javascript"
    let fraseLength = frase.length
    if (frase.length >= 20) {
        alert(`La frase ${frase} tiene ${fraseLength} caracteres y corresponde a una frase larga`)
    } else {
        if (frase.length > 11 && fraseLength < 20) {
            alert(`La frase ${frase} tiene ${fraseLength} caracteres y corresponde a una frase mediana`)
        } else {
            if (fraseLength) {
                alert(`La frase ${frase} tiene ${fraseLength} caracteres y corresponde a una frase corta`)
            }
        }
    }
}

// EJERCICIO 5
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio5() {
    let precio = 50000;
    let producto = "Teclado"
    let descuento1 = 0.20;
    let descuento2 = 0.10;
    if (precio >= 50000) {
        alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${precio - (precio * descuento1)}`)
    } else {
        if (precio >= 20000) {
            alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${precio - (precio * descuento2)}`)
        } else {
            alert(`El producto ${producto.toUpperCase()} tiene un precio de ${precio}`)
        }
    }
}
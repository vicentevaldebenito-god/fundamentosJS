
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

// Ejercicios extras:

// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)

function ejercicio6(){
    let precio
}

// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente

// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación

// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado


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

function ejercicio6() {
    let price = 100000;
    let product = "Cuadro"
    let ClientePremium = 0.20;
    let ClienteFrecuente = 0.10;
    if (price >= 100000) {
        alert(`El producto ${product} tiene un precio de ${price}
            \n este le da el descuento de cliente premium (20%) su producto ahora vale:
            \n${price - (price * ClientePremium)}`)
    } else if (price >= 50000) {
        alert(`El producto ${product} tiene un precio de ${price}
            \n este le da el descuento de Cliente frecuente (10%) su producto ahora vale:
            \n${price - (price * ClienteFrecuente)}`)
    } else {
        alert(`El producto ${product} tiene un precio de ${price}
            \n este no le da descuento.`)
    }
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

function ejercicio7() {
    let frase1 = "Frase"
    let puntuacion = frase1.length
    if (puntuacion >= 90) {
        alert(`La frase "${frase1.toLowerCase()}" se ha calificado con un puntaje excelente`)
    } else if (puntuacion >= 70) {
        alert(`La frase "${frase1.toLowerCase()}" se ha calificado con un puntaje Bueno`)
    } else {
        alert(`La frase "${frase1.toLowerCase()}" se ha calificado con un puntaje Insuficiente`)
    }
}

// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado

function ejercicio8() {
    let NombreEstudiante = "Javier"
    let nota1 = 5.3
    let nota2 = 7.0
    let nota3 = 6.1
    let promedio = (nota1 + nota2 + nota3) / 3
    if (promedio >= 6) {
        alert(`El estudiante ${NombreEstudiante} tiene un promedio Destacado de: ${promedio}`)
    } else if (promedio >= 4) {
        alert(`El estudiante ${NombreEstudiante} tiene un promedio Aprobado de: ${promedio}`)
    } else {
        alert(`El estudiante ${NombreEstudiante} tiene un promedio Reprobado de: ${promedio}`)
    }
}

// ``Ejercicios adicionales (nivel básico ampliado con más condiciones)
// Estos ejercicios siguen siendo introductorios, pero incorporan una estructura if - else if - else más extensa, combinando:
// Variables numéricas y de texto
// Operaciones matemáticas
// .toUpperCase(), .toLowerCase(), .length
// Salida con alert() usando template strings

// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente

// Además:

// Mostrar la cantidad de caracteres del nombre

function ejercicio9(){
    let StudentName = "Alan"
    let promedioFinal = 6.7
    if(promedioFinal >= 6.5){
        alert(`El estudiante ${StudentName.toUpperCase()} Tiene un promedio Sobresaliente de ${promedioFinal}`)
    }else if(promedioFinal >= 6.0){
        alert(`El estudiante ${StudentName.toUpperCase()} Tiene Muy buen rendimiento en promedio, de ${promedioFinal}`)
    }else if(promedioFinal >= 5.0){
        alert(`El estudiante ${StudentName.toUpperCase()} Tiene un Buen rendimiento ,de ${promedioFinal}`)
    }else if(promedioFinal >=4.0){
        alert(`El estudiante ${StudentName.toUpperCase()} Tiene un promedio Suficiente de ${promedioFinal}`)
    }else{
        alert(`El estudiante ${StudentName.toUpperCase()} Tiene un promedio Insuficiente de ${promedioFinal}`)
    }
}

// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación

function ejercicio10(){
    let item = "Mando"
    let itemPrecio = 200000
    let Descuento1 = 0.15
    let Descuento2 = 0.10
    if(itemPrecio >= 200000){
        alert(`El producto ${item} de ${item.length} caracteres tiene un precio de ${itemPrecio}
            \n esto lo vuelve un Producto de lujo y conseguira un descuento de 15% , su valor seria: ${itemPrecio - (itemPrecio * Descuento1)}
            `)
        }else if(itemPrecio >= 100000){
            alert(`El producto ${item} de ${item.length} caracteres tiene un precio de ${itemPrecio}
                \n esto lo vuelve un Producto premium y conseguira un descuento de 15% , su valor seria: ${itemPrecio - (itemPrecio * Descuento1)}`)
        }else if(itemPrecio >= 50000){
            alert(`El producto ${item} de ${item.length} caracteres tiene un precio de ${itemPrecio}
                \n esto lo vuelve un Producto estándar y conseguira un descuento de 10% , su valor seria: ${itemPrecio - (itemPrecio * Descuento2)}`)
        }else if(itemPrecio >= 20000){
            alert(`El producto ${item} de ${item.length} caracteres tiene un precio de ${itemPrecio}
                \n esto lo vuelve un Producto económico su valor seria: ${itemPrecio}`)
        }else{
            alert(`El producto ${item} de ${item.length} caracteres tiene un precio de ${itemPrecio}
                \n esto lo vuelve un Producto basico su valor seria: ${itemPrecio}`)
        }
}


// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

// Además:

// Clasificar la frase por tamaño:
// 30 → Muy larga
// 20 → Larga
// 10 → Mediana
// ≤ 10 → Corta``

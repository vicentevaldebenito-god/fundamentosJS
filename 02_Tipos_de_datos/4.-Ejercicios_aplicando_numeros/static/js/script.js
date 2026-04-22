console.log(`Conexion con JS exitosa`)

// 📌 Ejercicios
// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en alert.

let edad = 16

function edadProyectada() {
    let edad= 16;
    alert(`Mi edad es ${edad}
        \nEn 5 años tendre: ${edad + 5}
        \nHace 10 años tenia: ${edad - 10}`); //Alerta en pantalla
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento() {
    let producto = 25000
    let descuento = 0.20
    alert(`El precio fijo del producto es: ${producto} y tiene un descuento de 20% ,
        \nEl precio del producto con el descuento es: ${producto - (producto * descuento)} `)
};
// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas() {
    let nota1 = 5.3
    let nota2 = 6.6
    let nota3 = 4.8
    alert(`Con 3 notas: ${nota1}, ${nota2}, ${nota3}
        \nse consigue el promedio: ${(nota1 + nota2 + nota3) / 3 }
        \nY redondeado es ${Math.round((nota1 + nota2 + nota3) / 3)} `)
};
// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura(){
    let grados = 20
    alert(`Hacen ${grados} grados , 
        \naumentado son; ${grados + 3}, 
        \ny disminuidos son: ${grados - 5}`)
};
// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function sueldoSemanal() {
    let horas = 45
    let valorHoras = 8000
    alert(`Un trabajador gana $${valorHoras} por hora y trabaja ${horas} horas
        \nsu sueldo es de ${horas * valorHoras}
        \nY si trabajara 5 horas extra trabajaria ${horas + 5} horas
        \nY su sueldo seria ${(horas + 5) * valorHoras}`)
}

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en alert

function divisionResto() {
    let numero1 = 85
    let numero2 = 47
    alert(`tenemos dos numeros: ${numero1} y ${numero2}
        \nLa division entre ellos es: ${numero1} / ${numero2}
        \nY su resultado seria ${numero1 / numero2}
        \nEl modulo (%) entre ellos es: ${numero1} % ${numero2}
        \nY su resultado seria ${numero1 % numero2}`)
}
// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10

function comparacion() {
    let numero3 = 24
    let numero4 = 45
    alert(`Tenemos ${numero3} y ${numero4},
        \nEs ${numero3} mayor a ${numero4}? , ${numero3 > numero4}
        \nY es ${numero4} igual a 10? , ${numero4 === 10}`)
}
// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado

function notacion() {
    let poblacion = 1e6
    alert(`Una ciudad tiene una poblacion de ${poblacion}
        \nEsta poblacion es dividida en 4 grupos
        \nEl numero de personas en cada grupo seria: ${poblacion / 4}`)
}

// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function potenciaCalculo() {
    alert(`Tenemos la potencia de 3 levado a 4 cuyo resultado es: ${3 ** 4}
        \nY si multiplicamos este numero por 2 nos da: ${(3 ** 4) * 2}
        \nY si le restamos 10 , el numero seria: ${(3 **4) * 2 - 10}`)
}

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function dado() {
    let dado = Math.floor(Math.random()*6) + 1;
    alert(`Tenemos un dado de 6 caras y haz tirado de este.
        \nTiras el numero: ${dado}
        \nSi tu numero es mayor a 4 ganas, ganaste? ${dado > 4}`)
}
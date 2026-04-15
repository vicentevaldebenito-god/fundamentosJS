console.log("Conexion con js exitosa")
/* 1️⃣ Presentación completa
Crea las variables:
nombre: Camila
edad: 25
Debes mostrar un mensaje que:
Presente a la persona
Indique su edad
Indique el tipo de dato de edad
👉 Todo en un solo mensaje.
*/

let nombre = "Camila";
let edad = "25";



console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años, Mi edad es un ${typeof edad}.`)

/*2️⃣ Ubicación con transformación
Crea las variables:
comuna: Maipú
region: Metropolitana
Debes mostrar un mensaje que:
Indique dónde vive la persona
Muestre la comuna en MAYÚSCULAS
Muestre la región en minúsculas
*/

let comuna = "Maipú"
let region = "Metropolitana"

console.log(`Yo vivo en la region de ${region.toLowerCase()} y en la comuna de ${comuna.toUpperCase()}.`)


/*
3️⃣ Análisis de palabra
Crea la variable:
lenguaje: Python
Debes mostrar un mensaje que:
Indique cuántos caracteres tiene
Muestre la palabra en MAYÚSCULAS
Indique el tipo de dato
*/

let lenguaje ="Python"

console.log(`La palabra ${lenguaje.toUpperCase()} tiene ${lenguaje.length} caracteres. y su tipo de dato es ${typeof lenguaje}.`)


/*4️⃣ Frase completa analizada
Crea la variable:
mensaje: Me encanta programar en JavaScript
Debes mostrar un mensaje que:
Indique la cantidad de caracteres
Verifique si contiene la palabra "JavaScript"
Muestre el mensaje completo en minúsculas
*/

let mensaje = "Me encanta programar en JavaScript"

console.log(`El mensaje "${mensaje.toLowerCase()}" ¿Contiene la palabra Javascript? Respuesta: ${mensaje.includes("JavaScript")}.`)


/*5️⃣ Lista con búsqueda y transformación
Crea la variable:
compras: arroz, fideos, aceite, sal
Debes mostrar:
Si existe la palabra "aceite"
El texto completo en MAYÚSCULAS
La cantidad total de caracteres
*/

let compras ="arroz, fideos, aceite, sal"

console.log(`La lista: ${compras.toUpperCase()} tiene ${compras.length} caracteres y contiene la palabra "aceite"? Respuesta: ${compras.includes("aceite")}.`)

/*6️⃣ Conversión + análisis
Crea las variables:
numeroCasa: 456
numeroCasaTexto (vacía)
Debes:
Convertir el número a texto
Mostrar el número convertido
Indicar su tipo de dato
Indicar cuántos caracteres tiene
*/

let numeroCasa = "456";
let numeroCasa_Texto = String(numeroCasa);

console.log(`Mi numero de casa es ${numeroCasa_Texto} tiene ${numeroCasa_Texto.length} caracteres y es de tipo ${typeof numeroCasa}`)

/*7️⃣ Identificación personal extendida
Crea las variables:
nombre: Diego
apellido: Rojas
Debes mostrar un mensaje que:
Muestre el nombre completo
Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
Muestre todo en MAYÚSCULAS
*/

let nombre1 ="Diego "
let apellido1 ="Rojas"

console.log(`El nombre: ${nombre1.toUpperCase() + apellido1.toUpperCase()} tiene ${nombre1.length + apellido1.length} caracteres en total`)

/*8️⃣ Verificación de contenido
Crea la variable:
frase: Hoy aprenderemos sobre strings
Debes mostrar:
Si contiene la palabra "strings"
La frase en MAYÚSCULAS
La cantidad de caracteres
*/

let frase="Hoy aprenderemos sobre strings"

console.log(`la frase ${frase.toUpperCase()} tiene ${frase.length} caracteres y , ¿Trae la palabra strings? Respuesta: ${frase.includes("strings")}. `)

/* 9️⃣ Comparación de formatos
Crea la variable:
texto: Programar es divertido
Debes mostrar en un solo mensaje:
El texto original
El texto en minúsculas
El texto en mayúsculas
La cantidad de caracteres
*/

let texto ="Programar es divertido"

console.log(`el texto "${texto}" puede venir en mayusculas: "${texto.toUpperCase()}" , en minusculas: "${texto.toLowerCase()}" y tiene un total de ${texto.length} caracteres`)

/* 🔟 Desafío completo integrado
Crea las variables:
curso: 4C
anio: 2026
Debes mostrar un mensaje que:
Indique el curso y año
Convierta el año a texto
Indique el tipo de dato del año convertido
Muestre todo el mensaje en MAYÚSCULAS
*/

let curso = "4C"
let año = "2026"
let año_texto = año.toString(año)
let mensaje1 = (`Curso: ${curso.toUpperCase()} , Año: ${año.toUpperCase()} , el año en texto es: ${año_texto.toUpperCase()} es de tipo: ${typeof año_texto.toUpperCase()}`)

console.log(`${mensaje1.toUpperCase()}`)

/*⭐ Desafío extra (nivel alto)
Crea la variable:
textoFinal: Estoy listo para el desafío
Debes mostrar un mensaje que:
Indique la cantidad de caracteres
Verifique si contiene la palabra "desafío"
Muestre el texto en MAYÚSCULAS
Indique el tipo de dato 
*/

let textoFinal ="Estoy listo para el desafio"

console.log(`el mensaje: "${textoFinal}" , tiene ${textoFinal.length} caracteres , es un tipo: ${typeof textoFinal} , ¿Tiene la palabra desafio? Respuesta: ${textoFinal.includes("desafio")}, y asi se ve en mayusculas: ${textoFinal.toUpperCase()}`)

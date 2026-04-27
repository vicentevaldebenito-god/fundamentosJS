console.log(`Conexion exitosa con JS`)

/*
=====================================
1.- ¿Que es una condicion en JS?
=====================================
Una condicion nos permite tomar decisiones en el 
codigo. Separando dos caminos el si(if) y el no(else)

Estructura basica: ( Sintaxis  --> Reglas del Lenguaje de programacion.)

if (condicion) {
    //codigo que se ejecuta si la condicion es verdadera.
} else {
    //codigo que es ejecuta si la condicion es falsa.
}
*/

// Ejemplo 1: (numerico)
let edad = 18;

if(edad == 20){ //Condicion Si
    console.log(`Eres mayor de edad`);
}

// Ejemplo 2: Dos caminos posibles
let temperatura = 10;

if(temperatura > 20){ // Condicion SI
    console.log(`Hace calor`);
} else { // Condicion NO
    console.log(`Hace frio`)
}

// Ejemplo 3: IF  - ELSE IF - ELSE (Mutiples condiciones)

let nota = 5.5;

if(nota >= 6.0){ //Primera condicion
    console.log(`Excelente! sigue asi!`)
} else if (nota >= 4.0){ //Segunda condicion
    console.log(`Aprobado, puedes mejorar`)
} else { //Valor si no cumple anteriores
    console.log(`Reprobado, estudia mas!`)
}

// Ejemplo 4: Condiciones con STRING
let nombre = "Vicente"

//Comparacion exacta (===)
if(nombre === "Vicente"){
    console.log(`Hola, ${nombre}`)
} else {
    console.log(`Tu no eres ${nombre}`)
}

/*
OPERADORES DE COMPARACION
> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
// Ejemplo de distinto
let num = 10;
let num2 = 5;

if(num1 !== num2){
    console.log(`El numero ${num} es distinto que ${num2}`)
} else{
    console.log(`Son iguales!`)
}
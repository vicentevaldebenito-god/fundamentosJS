console.log("Conexión con js correcta...");
/* 
Dato: Tipo texto (string)
1.- Concatenación de texto con el signo +
Podemos unir texto y variables
*/
//Concatenación: unir texto y/o variable
const nombre = "Vicente";
const apellido = "Valdebenito";
//Unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/*
2.- Ver el tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato: " + typeof nombre);

// Template literals (forma moderna para concatenar) ``
console.log(`Hola, mi nombre es ${nombre} ${apellido}`);

// Mostrar el largo de un string(texto) - Contar los caracteres.
// .length --> Para contar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} caracteres.`);

// Crear una frase y contar sus caracteres.
let frase = "Para crear esta frase se uso el Let y Console.log.";
console.log(`La frase "${frase}" tiene ${frase.length} caracteres.`);

// Métodos comunes en JS para formatear texto
// Transformar texto en Mayúsculas
let texto1 = "hola mundo";
console.log(texto1.toUpperCase());

//Transformar texto a minusculas .ToLowerCase()
console.log(texto1.toLowerCase());

//Buscan un texto dentro de un string
let texto2 ="leche, azucar, peras, heuvos, harina"
console.log(texto2.includes("peras")); //true

// Convertir una variable a texto
let telefono = 123456789;
let telefono_texto = String(telefono);
console.log(`Mi numero de telefono es ${telefono_texto}
    es de tipo ${typeof telefono_texto}`);
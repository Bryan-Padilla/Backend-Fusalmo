//Ejercicio 1
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question('Ingrese su  nombre: ', (nombre) => {
    rl.question('Ingrese su apellido: ', (apellido) => {
        console.log(`Hola mi nombre es ${nombre} ${apellido}`);
    })

})

//Ejercicio 2

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,

// });

rl.question('Ingrese una cadena de texto:', (cadena) => {
    console.log(`Numero de caracteres: ${cadena.length}`)
});

//Ejercicio 3

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,

// });

rl.question('Ingrese una palabra:', (palabra) => {
    console.log(palabra.toUpperCase());
});

//Ejercicio 4

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,

// });

rl.question('Ingrese una frase:', (frase) => {
    rl.question(`Ingrese la palabra que desea reemplazar:`, (palabraCambiar) => {
        rl.question('Ingrese la nueva palabra', (nuevapalabra) => {
            const frasemodificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevapalabra)
            console.log('Frase modificada', frasemodificada)
        })
    })
})

//Ejercicio 5

rl.question('Ingrese una cadena:', (cadena) => {
    const inicio = 6;
    const longitud = 5;
    const subcadena = cadena.substring(inicio, inicio + longitud);
    console.log(`Subcadena es: ${subcadena}`)
})

//Ejercicio 6

rl.question('Ingrese una frase: ', (frase) => {
    const palabra = frase.split(' ');
    console.log(`Numero de palabras: ${palabra.length}`);
})

//Ejercicio 7

rl.question('Ingrese su cadena: ', (cadena) => {
    const cadenaInvertida = cadena.split('').reverse().join('');
    console.log(`Cadena invertidad: ${cadenaInvertida}`);

})

//Ejercicio 8

rl.question('ingresa un palabra:', (palabra) => {
    const palabraInvertida = palabra.split('').reverse().join('');
    if (palabra === palabraInvertida) {
        console.log(`${palabra} es un palindromo`)

    } else {
        console.log(`${palabra} no es un palindromo`)
    }
})

//Ejercicio 9

rl.question('Ingrese un palabra:', (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi);
    const numeroVocales = vocales ? vocales.length : 0;
    console.log(`Número de vocales: ${numeroVocales}`);

})

//Ejercicio 10

rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split(' ');
    const fraseCapitalizada = palabras.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
console.log(`Frase capitalizada: ${fraseCapitalizada}`);
})
//conteo de palabras

function contarPalabras(array){
    array.forEach(cadena => {
        let palabras=cadena.split(/\s+/);
        palabras.forEach(palabra=>{
            if (contarPalabras[palabra]){
                contadorPalabras[palabra]++;
            }
            else{
                contadorPalabras[palabra]-1;
            }


        })
    });
}

let palabrasarray = ["Hola buenos dias", "Hola buenas tardes","Hola buenas noches"];
let resultado = contarPalabras();
console.log(resultado)

//Ejercicio 2

let productoA ={
    nombre: "Camisa",
    precio:25,
    cantidad:5
};

let productoB ={
    nombre:"Jeans",
    precio:40,
    cantidad:3
    };

    let costoTotalProductoA= productoA.precio * productoA.cantidad;
    let costoTotalProductoB= productoB.precio * productoB.cantidad;

    let costototal = costoTotalProductoA+ costoTotalProductoB;
    console.log(costoTotalProductoA);
    console.log(costoTotalProductoB);
    console.log("total $" + costototal);

//Ejercicio 3

let personas1 = [
    {nombre:"Sergio",edad:33, ciudad:"San Salvador"},
    {nombre:"Martha",edad:35, ciudad:"San Salvador"},
    {nombre:"Marleni", edad:50, ciudad: "Santa Tecla"},
    {nombre:"Sonia",edad:25, ciudad:"San Miguel"}

];

function filtrarPersonas(personaObjeto,ciudad){
    return personaObjeto.filter(persona=>persona.edad>30 && persona.ciudad===ciudad)
}

let personasFiltradas = filtrarPersonas(personas,"San Salvador")
console.log(personasFiltradas);


//Ejercicio 4

let numeros = [2,5,6,9,12];
let cuadradosnewarray=numeros.map(numero => numero**2);
console.log(numeros);
console.log(cuadradosnewarray);
    
//Ejercicio 5

let arreglo=[1,2,3,4,5,6,7,8,9,10];
let sumaPares=0;
for(let i=0; i<arreglo.length; i++)
    {
        if(arreglo[i]%2===0){
            sumaPares += arreglo[i];
        }

    }
    console.log(sumaPares);


    //Ejercicio 6

    let personas2 = [
         {nombre:"Sergio",edad:33, ciudad:"San Salvador"},
         {nombre:"Martha",edad:35, ciudad:"San Salvador"},
         {nombre:"Marleni", edad:50, ciudad: "Santa Tecla"},
         {nombre:"Sonia",edad:25, ciudad:"San Miguel"}
        ];

        function buscarPorNombre(argumento1, argumento2){
            return argumento1.find(nuevaVar => nuevaVar.nombre === argumento2)
        }

        let personaBuscada = buscarPorNombre(personas2, "Martha");
        console.log(personaBuscada);

    //Ejercicio 7

    let personas = [
        { nombre: "Juan", edad: 2 },
        { nombre: "Maria", edad: 1 },
        { nombre: "Mario", edad: 4 },
        { nombre: "Ester", edad: 5 },
    ]
    
    let personasOrdenadas = personas.sort((a, b) => a.edad - b.edad)
    console.log(personasOrdenadas);

    //Ejercicio 8
    function validarObjeto(objeto) {
        const propiedades = ['nombre', 'direccion', 'telefono'];
        for (let propiedad of propiedades) {
            if (objeto.hasOwnProperty(propiedad)) {
    
                let mjs = "Objeto Aprobado"
                return mjs
            }
            else {
                mjs = "Objeto no valido"
                return mjs
            }
        }
    }
    let cliente = {
    
        nombre: "William", direccion: "San Miguel", telefono: 123456789
    }
    let cliente1 = {
    
        direccion: "San Miguel", telefono: 123456789
    }
    
    console.log(validarObjeto(cliente));
    console.log(validarObjeto(cliente1));

    //Ejercicio 9

    let listaCompras = {
        "Manzanas": 5,
        "Platanos": 5,
        "Elotes": 5,
        "pan": 5,
    
    }
    
    function generarListaCompras(listaCompras) {
        let listalegible = "Esta es us lista de compras:\n"
        for (let elemento in listaCompras) {
            listalegible += `${elemento}: ${listaCompras[elemento]} `
        }
        return listalegible
    }
    
    
    
    let listalegibleFinal = generarListaCompras(listaCompras);
    console.log(listalegibleFinal)

    //Ejercicio 10
    let estudiantes = [
        { nombre: "Grecia", edad: 20 },
        { nombre: "Luis", edad: 21 },
        { nombre: "Anderson", edad: 21 },
    
    ]
    let profesores = [
        { nombre: "Juan", materia: "Matematicas" },
        { nombre: "medrano", materia: "Ciencias" },
        { nombre: "Julio", materia: "Lenguaje" },
    ]
    
    function combinaObjetos(a, b) {
        let ComnunidadEducativa = [...a, ...b];
        return ComnunidadEducativa;
    }
    let comunidad = combinaObjetos(estudiantes, profesores)
    console.log(comunidad);
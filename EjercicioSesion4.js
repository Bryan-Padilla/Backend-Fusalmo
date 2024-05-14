//Ejercicio 1
// function saludar(nombre, callback){
//     const saludo = `Hola, ${nombre}`
//     callback (saludo)
// }

// function mostrar (saludo){
//     console.log(saludo)
// }
//saludar ('William', mostrar)

//Ejercicio 2
// function multiplicarPromise(a,b){
//     return new Promise((resolve, reject)=>{
//         const resultado = a*b

//         if(isNaN(resultado)){
//         reject('ERROR NO HAY ARGUMENTOS VALIDOS')
//         }else{
//             resolve(resultado)
//         }
//     })
// }
// multiplicarPromise(2,4)
// .then((resultado)=> {
//     console.log(resultado)
// })
// .catch((error)=>{
//     console.error(error)
// })

//Ejecicio 3
// function multiplicar(a,b, callback){
//     const resultado=a*b
//     callback(resultado)
// }

// multiplicar(6,3,(resultado)=>{
//     console.log('Resultado:', resultado)
// })

//Ejercicio 4
// function retrasarPromesa(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`La promesa se ha resuelto en ${ms} milisegundos`)
//         }, ms)
//     })
// }

// retrasarPromesa(2000)
// .then((mensaje)=>{
//     console.log(mensaje);
// })

//Ejercicio 5
// function operacionAsincrona(callback){
//     setTimeout(()=>{
//         callback('Operacion asincrona completada')
//     },2000)
// }

// operacionAsincrona((mensaje)=>{
//     console.log(mensaje)
// })

//Ejercicio 6
// function paso1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(5)
//             console.log("Paso 1 funcionado")
//         },5000)
//     })
// }

// function paso2(num){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num*2)
//             console.log("Paso 2 funcionado")
//         },5000)
//     })
// }

// function paso3(num){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num+2)
//             console.log("Paso 3 funcionado")
//         },5000)
//     })
// }

// paso1()
// .then(paso2)
// .then(paso3)
// .then((resultado)=> {
//     console.log('Resultado es: ', resultado)
// })

//Ejercicio 7

// function dividir(a,b, callback){
//     if(b===0){
//         callback('Error: el divisor es CERO')
//     }else{
//         const resultado =a/b
//         callback(null, resultado)
//     }
// }

// dividir(10,0,(error,resultado)=>{
//     if(error){
//         console.error(error)
//     }else{
//         console.log('El resultadoes: ', resultado)
//     }
// })

//Ejercicio 8
// function dividir(a,b){
//     return new Promise((resolve, reject)=>{

//   if(b===0){
//          reject('Error: el divisor es CERO')
//   }else{
//            const resultado =a/b
//              resolve(null, resultado)
//        }
//     })
// }
    
//      dividir(10,3)
//      .then((resultado)=>{
//         console.log("Resultado es: ", resultado)
//      })
//      .catch((error)=>{
//         console.log(error)
//      })

//Ejercicio 9

// function tarea1 (){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Tarea 1 Completada')
//         },3000);
//     })
// }

// function tarea2 (){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Tarea 2 Completada')
//         },3000);
//     })
// }

// function tarea3 (){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Tarea 3 Completada')
//         },3000);
//     })
// }

// Promise.all([tarea1(),tarea2(),tarea3()])
// .then((reultado)=>{
//     console.log("Las tareas han finalizado: ")
//     resultado.forEach((resultado) => {
//         console.log(resultado)
//     })
// })
// .catch((error)=>{
//     console.error('Error: ', error)
// })

//Ejercicio 10
function tarea1 (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Tarea 1 Completada')
        },3000);
    })
}

function tarea2 (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Tarea 2 Completada')
        },3000);
    })
}

function tarea3 (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Tarea 3 Completada')
        },3000);
    })
}

Promise.all([tarea1(),tarea2(),tarea3()])
.then((reultado)=>{
    console.log("Las tareas han finalizado: ")
    resultado.forEach((resultado) => {
        console.log(resultado)
    })
    console.log('Accion final ejecutada.')
})
.catch((error)=>{
    console.error('Error: ', error)
})
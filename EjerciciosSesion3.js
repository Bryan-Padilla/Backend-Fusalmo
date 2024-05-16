const readline = require('readline')

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })

iniciar();

function iniciar(){
    console.log(`\n`);
    console.log(`\n`);
    console.log("BIENVENIDO AL MENU");
    console.log("1. Ejercicio 1");
    console.log("2. Ejercicio 2");
    console.log("3. Ejercicio 3");
    console.log("4. Ejercicio 4");
    console.log("5. Ejercicio 5");
    console.log("6. Ejercicio 6");
    console.log("7. Ejercicio 7");
    console.log("8. Salir");
   prompt.question("Digite el numero de el ejercicio que desee: ", (nFun)=>{


    switch(parseInt(nFun)){
        case 1:
            ejer1();
            break;
            case 2:
                ejer2();
                break;
            case 3:
                ejer3();
                break;
            case 4:
                ejer4();
                break;
            case 5:
                ejer5();
                break;
            case 6:
                ejer6();
                break;
            case 7:
                ejer7();
                break;
            case 8:
                prompt.close()
                break;
            default:
                console.log("Digite un numero correcto de el menu")
                break;
    }
   })
}


//ejercicio 1
function ejer1(){
    prompt.question("Ingrese un número: ", (numero)=>{
    const num = evaluar(numero)
        iniciar();
})

    function evaluar (numero){

    if(numero>=1){
        return console.log(numero + "El número es positivo")
    } else if(numero<=-1){
        return console.log(numero + "El número es negativo")
    }
    else{
        return console.log("El número es 0")
    }

    }

}


//Ejercicio 2

function ejer2() {
    rl.question("Ingrese el primer número: ", (num1) => {
        rl.question("Ingrese el segundo número: ", (num2) => {
            rl.question("Ingrese el tercer número: ", (num3) => {
                let numero1 = parseFloat(num1);
                let numero2 = parseFloat(num2);
                let numero3 = parseFloat(num3);
                let numeroMayor = evaluar(numero1, numero2, numero3)
                Inicio();
            })
        })
    })

    function evaluar(num1, num2, num3) {
        if (num1 > num2 && num1 > num3) {
            console.log(`${num1} es el mayor`)

        } else if (num2 > num1 && num2 > num3) {
            console.log(`${num2} es el mayor`)
        } else if (num3 > num1 && num3 > num2) {
            console.log(`${num3} es el mayor`)
        }

    }
}


//Ejercicio 3
function ejer3(){
        prompt.question("Digite el numero a realizar el factorial: ", (n1) =>{
            let resultado = 1
            for(let i=1; i<=parseFloat(n1); i++){
                resultado*=i;
            }
            console.log("El factorial es:", + resultado)
            iniciar();
        })
    }

//Ejercicio 4
function ejer4(){
    prompt.question("Ingrese el numero a evaluar", (num)=>{
        if(parseFloat(num)%2 ===0){
            console.log("El numero es par")
        }else{
            console.log("El numero no es par")
        }
        iniciar();
    })
}

//Ejercicio 5
function ejer5(){
prompt.question("Ingrese el primer color> ", (color)=>{
    prompt.question("Ingrese el segundo color: ", (color2)=>{

     if(color1==="azul"&&color2 ==="amarillo"){
        console.log("la mezcla genera el color verde")
         }else if(color1==="azul"&&color2=="rojo"){
        console.log("la mezcla genera el color morado")
             }else if(color1==="rojo"&&color2==="amarillo"){
        console.log("la mezcla genera el color naranja")
    }   
             else{
                 console.log("Lac combinacion no se encuentra disponible.")
    } iniciar();
    })
})
}
//Ejercicio 6
function ejer6(){
prompt.question("Digite el numero de mes a conocer:", (nMes)=>{
    let Nmes
    switch(parseInt(nMes)){
        case 1:
            nombreMes="Enero";
            break;
        case 2:
            nombreMes="Febrero";
            break;
            case 3:
            nombreMes="Marzo";
            break;
         case 4:
            nombreMes="Abril";
            break;
            case 5:
            nombreMes="Mayo";
            break;
            case 6:
            nombreMes="Junio";
            break;
            case 7:
            nombreMes="Julio";
            break;
            case 8:
            nombreMes="Agosto";
            break;
            case 9:
            nombreMes="Septiembre";
            break;
            case 9:
            nombreMes="Octubre";
            break;
            case 9:
            nombreMes="Noviembre";
            break;
            case 9:
            nombreMes="Diciembre";
            default:
                nombreMes="El mes ingresado no existe";
    }
    console.log(nombreMes)
    iniciar();
})
}

//Ejercicio 7


function ejer7(){
prompt.question("digite la categoria del vehiculo:", (categoria)=>{
    let tipovehiculo
    switch(categoria){
        case 'Moto':
            tipovehiculo="Motocicleta";
            break;
            case 'Auto':
                tipovehiculo="Automovil";
                break;
                case 'Camion':
                    tipovehiculo="Super Camion";
                    break;
                    case 'Bicicleta':
                        tipovehiculo="Super bicicleta";
                        break;
                        default:
                            tipovehiculo="La categoria digitada no existe";
                            break;
    }
    console.log(tipovehiculo)
    iniciar();
})
}
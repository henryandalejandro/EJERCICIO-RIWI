//Viaje a MACONDO - CASO 1
let presupuesto = 2500000;
let desayunoElDorado = prompt("Señor Hildebrando, ¿Que quieres comprar para comer?:\n 1. Almojabana con gaseosa $15000.\n 2. subway con gaseosa $23000. \n 3. No comprar nada.")

switch (desayunoElDorado) {
    case "1":
        presupuesto -= 15000;
        alert(`Hildebrando se compró una almojabana con gaseosa. Su presupuesto es ${presupuesto}. Como se compró una almojabana. Esto le caerá mal porque lleva mucho en el stand
        `)
        break

    case "2":
        presupuesto -= 23000;
        alert(`Hildebrando se compró una Subway con gaseosa. Su presupuesto es ${presupuesto}. Como se compró un Subway. Quedó lleno y bien para el viaje.
    `)
        break
    case "3":
        alert(`Hildebrando no compró nada. Su presupuesto es ${presupuesto}`)
}

//CASO 2
let altoPermitido = 55
let largoPermitido = 40
let anchoPermitido = 20

let altoOriginal = prompt("Ingrese el alto de su maleta")
let largoOriginal = prompt("Ingrese el largo de su maleta")
let anchoOriginal = prompt("Ingrese el ancho de su maleta")

alert(`Las dimensiones de su maleta son ${altoOriginal}cm de alto, ${largoOriginal}cm de largo y ${anchoOriginal}cm de ancho.`)

let areaMaletaPermitido = Math.imul(altoPermitido, largoPermitido, anchoPermitido)
let areaMaletaOriginal = Math.imul(altoOriginal, largoOriginal, anchoOriginal)

let reduccionAlto = altoPermitido / altoOriginal;
let reduccionLargo = largoPermitido / largoOriginal;
let reduccionAncho = anchoPermitido / anchoOriginal;

let factorMinimo = Math.min(reduccionAlto, reduccionAncho, reduccionLargo);

let nuevoAlto = (altoOriginal * factorMinimo);
let nuevoLargo = (largoOriginal * factorMinimo);
let nuevoAncho = (anchoOriginal * factorMinimo);

if (areaMaletaOriginal > areaMaletaPermitido) {
    alert("La maleta es demasiado grade. El tamaño maximo permitido es 55 cm (alto) x 40 cm (largo) x 20 cm (ancho). Debes hacer lo siguiente:")

    alert(`Debes reducir el tamaño de tu maleta de la siguiente manera:
    ${Math.floor(altoOriginal - nuevoAlto)}cm de alto. 
    ${Math.floor(largoOriginal - nuevoLargo)}cm de largo.
    ${Math.floor(anchoOriginal - nuevoAncho)}cm de ancho`)
} else if
    (areaMaletaOriginal <= areaMaletaPermitido) {
    alert("La maleta cumple con las dimesiones permitidas. Puede pasar a la sala de espera. Feliz viaje.")
} else {
    alert("El dato ingresa no es un numero. Por favor ingrese las dimensiones de la maleta en CM.")
}

//Caso 3
alert("Un vuelo mas tarde...!")
alert()

alert("Señor Hildebrando, Bienvenido a la ciudad de Medellin.")
alert("Son las 2:00am. Recuerda que tu vuelo hacia Macondo es a las 3:00am. Debes confirmar tu reserva en el Hotel. ")

let wifi = prompt("La red a la que estas conectado presenta fallas. ¿Quieres buscar otra red?\n 1. Si. \n 2. No.")

switch (wifi) {
    case "1": let wifi1 = prompt("Great! Hay una red wifi por esta cuadra llamada 'ELPassEs' pero la contraseña está cifrada en números binarios, además cobran $50.000 por hora o fracción. ¿Desear continuar? \n 1. Si. \n 2. No.")
        if (wifi1 == 1) {
            presupuesto -= 50000
            function clave(binario) {
                let decimal = parseInt(binario, 2)
                let caracter = String.fromCharCode(decimal)
                return caracter;
            }
            binario1 = "01110010"
            binario2 = "01101001"
            binario3 = "01110111"
            binario4 = "01101001"

            let claveCompleta = clave(binario1) + clave(binario2) + clave(binario3) + clave(binario4)

            alert(
                `La contraseña para ingresar a la red es '${claveCompleta}'. Su presupuesto restante es ${presupuesto}`)
            break

        }

    case "2": alert("La red sigue sin funcionar. Por favor trata de conectarte a otra red e intenta nuevamente")
}

// caso 4 
alert("Has llegado a Macondo. Al parecer los habitantes solo hablan con la vocal i. Presiona 'Aceptar' para pedir el taxi en idiona Macondo.")

function macondoVocabulary(sentence) {
    const vocabulary = sentence.toLowerCase().split('');
    const newVocabulary = vocabulary.map(letter => {
        if (/[aeiou]/.test(letter)) {
            return 'i';
        }
        return letter;
    });
    return newVocabulary.join('');
}
console.log(macondoVocabulary("Taxi me puede llevar al hotel mariposas amarillas"));
alert(macondoVocabulary("Taxi me puede llevar al hotel mariposas amarillas"));

alert("El taxista ha aceptado tu viaje. Presiona 'Aceptar' para iniciar tu resorrido.")

//Caso 5
alert("Señor Hildebrando, Ha llegado al Hotel de la ciudad de Macondo. Su tarifa para el taxi es de $300.000 pesos. \n Para negociar la tarifa debe ganar en Piedra Papel O Tijera en una ronda.")

let ppt = prompt("¿Ganaste la ronda?\n 1. Si. \n 2. No.\n 3. Empate.")

if (ppt == "1") {
    alert("Felicidades Señor Hildebrando. No tienes que pagar nada.")
} else if (ppt == "2" || ppt == "3") {
    presupuesto -= 300000
    alert(`Señor Hildebrando, no logró ganar la ronda. Debe pagar la tarifa de $300.000 pesos. \n Su presupuesto restante es ${presupuesto} pesos.`)
} else {
    alert("Has ingresado in dato invalido. Por favor intenta nuevamente.")
}



// Caso 6
let diasEnMacondo = 4;

for (let dia = 1; dia <= diasEnMacondo; dia++) {
    let colorVestimenta = prompt(`Día ${dia}: Elige el color de vestimenta: \n 1. Amarillo \n 2. Verde \n 3. Rojo \n 4. Azul`).toLowerCase();

    switch (colorVestimenta) {
        case '1':
            let actividadAmarillo = prompt("Señor Hildebrando, ¿Que actividad desea realizar?:\n1. Voleibol\n2. Ir a la piscina \n3. Meterse  y nadar en la piscina");

            if (actividadAmarillo === '1') {
                alert("Hildebrando va a la piscina. El agua huele raro, pero no le pone importancia.");
                break;
            }
            else if (actividadAmarillo === '2') {
                alert("Hildebrando empieza a sentirse ahogado. Hay demasiado cloro en la piscina. Hildebrando muere ahogado.");
                alert("Fin de las vacaciones...");
                break
            }

        case '2':
            let actividadVerde = prompt("Señor Hildebrando, ¿Que actividad desea realizar?:\n1. Ir a caminatas \n2. Ir a a una hermosa cascada\n3. No hacer nada \nElige una actividad:");

            if (actividadVerde === '1') {
                alert("Hildebrando disfruta de las caminatas. Debe llevar agua para el camino. ");
                break;

            }
            else if (actividadVerde === '2') {
                alert("Hildebrando va a una hermosa cascada y se toma muchas fotos de recuerdo.");
                break
            }
            else if (actividadRojo === '3') {
                alert("Hildebrando se siente solo y se aburre. Sale de noche solo a caminar y se pierde. ");
                break
            }

        case '3':
            let actividadRojo = prompt("Actividades en la playa:\n1. Voleibol\n2. Nada en el mar y montar moto\n3. Tomar cócteles mientras descansa\nElige una actividad:");

            if (actividadRojo === '1') {
                alert("Hildebrando disfruta de las actividades en la playa. Juega Voleibol y la pasa genial.");
                break;

            }
            else if (actividadRojo === '2') {
                alert("Hildebrando nada en el mar, y monta moto");
                break
            }
            else if (actividadRojo === '3') {
                alert("Hildebrando se pone a tomar cócteles, pero siente un fuerte dolor de cabeza y pierde la visión. Chirrinchi adulterado. Debe regresar de emergencia.");
                alert("Fin de las vacaciones...");
                break
            }

        default: {
            { alert("Opción no válida. Inténtalo de nuevo."); }
            dia--;
            break;
        }

    }
}
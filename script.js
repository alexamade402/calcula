
const TIEMPO_COCCION = 40;


let capas = prompt("¿Cuántas capas de lasaña deseas preparar?");
let minutosHorno = prompt("¿Cuántos minutos lleva la lasaña en el horno?");


if (capas === "" || minutosHorno === "" || capas < 0 || minutosHorno < 0) {
    alert("❌ No puedes dejar campos vacíos ni ingresar valores negativos.");
} else {

    capas = Number(capas);
    minutosHorno = Number(minutosHorno);

    
    let tiempoPreparacion = capas * 2;

  
    let tiempoRestante = TIEMPO_COCCION - minutosHorno;

    if (tiempoRestante < 0) tiempoRestante = 0;

    let tiempoTotal = tiempoPreparacion + minutosHorno;

    
    document.getElementById("restante").textContent =
        "⏳ Tiempo restante en el horno: " + tiempoRestante + " minutos.";

    document.getElementById("prep").textContent =
        "🥣 Tiempo total de preparación: " + tiempoPreparacion + " minutos.";

    document.getElementById("total").textContent =
        "⌛ Tiempo total de trabajo realizado: " + tiempoTotal + " minutos.";
}


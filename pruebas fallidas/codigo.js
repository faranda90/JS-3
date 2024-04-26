const m2 = document.getElementById("m2");
let tipoLadrillo = document.getElementById("tipoLadrillo");
let mezclaMampo = document.getElementById("mezclaMampo");
let cantLad = m2*15;
let mm = m2.value;

function ladrillos() {
    let cantLad = m2 *15.2;
    return cantLad.toFixed(2);
}

// function cemento() {
//     let cantCem = m2 * 2.6;
//     return cantCem.value;
    
// }

// function arena() {
//     let cantArena = m2 * 0.012;
//     return cantArena;
// }

// function cal() {
//     let cantCal = m2*2.55;
//     return cantCal;
    
// }


function calcula() {

    document.getElementById("aaa").innerHTML = "Cantidad de Ladrillos: " + cantLad ;
    
}

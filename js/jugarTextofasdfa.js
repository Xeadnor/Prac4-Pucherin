const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
var jugadores = 0; 

console.log("Bienvenido al pucherin modo texto!")
console.log("Antes de empezar a jugar ajustemos las opciones")
while(jugadores < 2 && jugadores > 6){
    readline.question("Cuantos jugadores habra? (2-6)", jugadores => {
        readline.close();
      });
}

    




var rondaFinal = false;
var primerT = (primerTurno()-1);
var ultimoTurno = primerT

function primerTurno(){
  return Math.floor(Math.random() * (jugadores.value - 1 + 1) + 1)
}

    function crearJugador(name,fichas) {  
  return {
    name: name,
    fichasRecibidas: fichas,
    fichasObtenidas: 0

  };
}
function rollDice() {
  let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  let result2 =  Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  return result+result2;
}

if(valorFicha[0].checked){
  fichasTotales = 30;
}else if (valorFicha[1].checked) {
  fichasTotales = 40;
}else if (valorFicha[2].checked) {
  fichasTotales = 50;
}

  //array de jugadores que se rellena según el num selecionado
const array = [];
for (let i = 1; i <= jugadores.value; i++) {
let jugador = crearJugador("Jugador " + i,fichasTotales);
array.push(jugador);
}

//Creacion del objeto puchero 7
var puchero7 = {
  fichasRellenas:0
};
//Creacion de los pucheros 2-6 8-11

//Array con los pucheros
function crearPuchero(fichas) {
  return {
    fichasCapacidad: fichas,
    fichasRellenas: 0

  };
} 
const arrayPucheros = [];
for (let i = 2; i <= 11; i++) {
  if(i!=7){
    let puchero = crearPuchero(i);
    arrayPucheros.push(puchero);
  }

}
document.getElementById("opciones").style.display="none" 
document.getElementById("texto").style.display="block"

function compare( a, b ) {
if ( a.fichasObtenidas < b.fichasObtenidas ){
  return 1;
}
if ( a.fichasObtenidas > b.fichasObtenidas ){
  return -1;
}
return 0;
}
function  pintarPuchero() {
var text = ("<div class='row justify-content-center'><div class='col-4 border'> Puchero </div><div class='col-4 border'> Fichas : " + puchero7.fichasRellenas +  "</div></div>");

pucheroT.innerHTML= text;
}
function pintarCasillas() {
var text = "";
text += ("<div class='row justify-content-center'><div class='col-3 border p-0 ps-1'> Casilla " + arrayPucheros[0].fichasCapacidad + " </div><div class='col-3 border p-0 ps-1'> Fichas:" + arrayPucheros[0].fichasRellenas + "/" + arrayPucheros[0].fichasCapacidad +  "</div>");
text +=  ("<div class='col-3 border p-0 ps-1'> Casilla " + arrayPucheros[1].fichasCapacidad + " </div><div class='col-3 border p-0 ps-1'> Fichas:" + arrayPucheros[1].fichasRellenas + "/" + arrayPucheros[1].fichasCapacidad +  "</div>" + "</div>")

text += ("<div class='row justify-content-center'><div class='col-3 border p-0 ps-1'> Casilla " + arrayPucheros[2].fichasCapacidad + " </div><div class='col-3 border p-0 ps-1'> Fichas:" + arrayPucheros[2].fichasRellenas + "/" + arrayPucheros[2].fichasCapacidad +  "</div>");
text +=  ("<div class='col-3 border p-0 ps-1'> Casilla " + arrayPucheros[3].fichasCapacidad + " </div><div class='col-3 border p-0 ps-1'> Fichas:" + arrayPucheros[3].fichasRellenas + "/" + arrayPucheros[3].fichasCapacidad +  "</div>" + "</div>")

text += ("<div class='row justify-content-center'><div class='col-3 border p-0 ps-1'> Casilla " + arrayPucheros[4].fichasCapacidad + " </div><div class='col-3 border p-0 ps-1'> Fichas:" + arrayPucheros[4].fichasRellenas + "/" + arrayPucheros[4].fichasCapacidad +  "</div>");
text +=  ("<div class='col-3 border p-0 ps-1'> Casilla " + arrayPucheros[5].fichasCapacidad + " </div><div class='col-3 border p-0 ps-1'> Fichas:" + arrayPucheros[5].fichasRellenas + "/" + arrayPucheros[5].fichasCapacidad +  "</div>" + "</div>")

text += ("<div class='row justify-content-center'><div class='col-3 border p-0 ps-1'> Casilla " + arrayPucheros[6].fichasCapacidad + " </div><div class='col-3 border p-0 ps-1'> Fichas:" + arrayPucheros[6].fichasRellenas + "/" + arrayPucheros[6].fichasCapacidad +  "</div>");
text +=  ("<div class='col-3 border p-0 ps-1'> Casilla " + arrayPucheros[7].fichasCapacidad + " </div><div class='col-3 border p-0 ps-1'> Fichas:" + arrayPucheros[7].fichasRellenas + "/" + arrayPucheros[7].fichasCapacidad +  "</div>" + "</div>")

text += ("<div class='row justify-content-center'><div class='col-3 border p-0 ps-1'> Casilla " + arrayPucheros[8].fichasCapacidad + " </div><div class='col-3 border p-0 ps-1'> Fichas:" + arrayPucheros[8].fichasRellenas + "/" + arrayPucheros[8].fichasCapacidad +  "</div>" + "</div>")
casillasT.innerHTML= text;
}
function pintarPuntuacion() {
let copyOfArray = [...array]
copyOfArray.sort( compare );
    var text = "";
for (let i = 0; i < jugadores.value; i++) {
  text += ("<div class='row justify-content-center'><div class='col-3 border'>" + copyOfArray[i].name  + "</div><div class='col-3 border'> Fichas: " + copyOfArray[i].fichasRecibidas + "</div>" + "<div class='col-3 border'> Puntos: " + copyOfArray[i].fichasObtenidas + "</div>"  + "</div>");
  
}
document.getElementById("listajugadores").innerHTML= text;
}

pintarPuntuacion();
pintarCasillas();
pintarPuchero();
botonST.addEventListener("click",Volver)
function Volver(){
  document.getElementById("opciones").style.display="block" 
  document.getElementById("texto").style.display="none" 
  resetGame();

}



function resetGame(){
  for (let i = 0; i < array.length; i++) {
    array[i].fichasRecibidas = fichasTotales;
    array[i].fichasObtenidas = 0;
  }
  console.log("Entro1")
  for (let i = 0; i < arrayPucheros.length; i++) {
    arrayPucheros[i].fichasRellenas = 0;
  }
  console.log("Entro2")
  puchero7.fichasRellenas = 0;
  pintarPuntuacion();
  actualizarInfo();
  rondaFinal = false;
  console.log("Entro3")
  botonJT.innerHTML = "Tirar Dados";   
}

function actualizarInfo(){
  pintarPuntuacion();
  pintarCasillas();
  pintarPuchero();
}

function rollDice() {
  let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  let result2 =  Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  dice.dataset.side = result;
  dice2.dataset.side=result2;
  dice.classList.toggle("reRoll");
  dice2.classList.toggle("reRoll");

  return result+result2;

}
function cambiarTurnoJugador(nombre){
textArea.append(">Turno de " + nombre);
textArea.append("\n")

}


botonJT.addEventListener("click",cambiarModo)

function cambiarModo(e) {
  e.preventDefault();
  console.log(rondaFinal);
  if(botonJT.innerHTML == "Empezar partida"){
    botonJT.innerHTML = "Tirar Dados";
    textArea.append("")
    textArea.append(">Turno de " + array[primerT].name);
    textArea.append("\n")

  }else if (botonJT.innerHTML == "Tirar Dados" && rondaFinal == false) {
    jugar();
  }else if(botonJT.innerHTML == "Tirar Dados" && rondaFinal == true){
    jugarRondaFinal();
  }else if(botonJT.innerHTML == "Volver a jugar"){
    resetGame();

  }
}

function comprobarSiEs0() {
  let counter = 0;
  for (let i = 0; i < jugadores.value; i++) {
    if(array[i].fichasRecibidas > 0){
      while (array[primerT].fichasRecibidas == 0) {
        primerT++
        if(primerT == jugadores.value){
          primerT = 0;
        }
      }
      return false;
    }else if(array[i].fichasRecibidas == 0){
      counter++;

    }

    if(counter == jugadores.value){
      rondaFinal = true;
      textArea.append(">Empieza la ronda final!")
      textArea.append("\n")
    }

  }
}


function jugar(){

 
    var numeroDados = rollDice();
   
      botonJT.disabled = true;
  
  textArea.append(">El jugador " + array[primerT].name + " ha sacado un : " + numeroDados);
  textArea.append("\n")
  switch (numeroDados) {
    case 2:
     arrayPucheros[0].fichasRellenas++;
     if(arrayPucheros[0].fichasRellenas == arrayPucheros[0].fichasCapacidad){
       textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
       textArea.append("\n")
       arrayPucheros[0].fichasRellenas = 0;
       setTimeout(() => {
         array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[0].fichasCapacidad
       }, 1000)
     }
    break;

    case 3:
      arrayPucheros[1].fichasRellenas++;
      if(arrayPucheros[1].fichasRellenas == arrayPucheros[1].fichasCapacidad){
         textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
         textArea.append("\n")
        arrayPucheros[1].fichasRellenas = 0;
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[1].fichasCapacidad
        }, 1000)
      }
    break;

    case 4:
      arrayPucheros[2].fichasRellenas++;
      if(arrayPucheros[2].fichasRellenas == arrayPucheros[2].fichasCapacidad){
         textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
         textArea.append("\n")
        arrayPucheros[2].fichasRellenas = 0;
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[2].fichasCapacidad
        }, 1000)
      }
    break;

    case 5:
      arrayPucheros[3].fichasRellenas++;
      if(arrayPucheros[3].fichasRellenas == arrayPucheros[3].fichasCapacidad){
         textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
         textArea.append("\n")
        arrayPucheros[3].fichasRellenas = 0;
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[3].fichasCapacidad
        }, 1000)
      }
    break;

    case 6:
      arrayPucheros[4].fichasRellenas++;
      if(arrayPucheros[4].fichasRellenas == arrayPucheros[4].fichasCapacidad){
         textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
         textArea.append("\n")
        arrayPucheros[4].fichasRellenas = 0;
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[4].fichasCapacidad
        }, 1000)
      }
    break;

    case 7:
      puchero7.fichasRellenas++;
      textArea.append(">Se añade la ficha al puchero");
      textArea.append("\n")

    break;  

    case 8:
      arrayPucheros[5].fichasRellenas++;
      if(arrayPucheros[5].fichasRellenas == arrayPucheros[5].fichasCapacidad){
         textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
         textArea.append("\n")
        arrayPucheros[5].fichasRellenas = 0;
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[5].fichasCapacidad
        }, 1000)
      }
     break;

     case 9:
      arrayPucheros[6].fichasRellenas++;
      if(arrayPucheros[6].fichasRellenas == arrayPucheros[6].fichasCapacidad){
         textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
         textArea.append("\n")
        arrayPucheros[6].fichasRellenas = 0;
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[6].fichasCapacidad
        }, 1000)
      }
     break;

     case 10:
      arrayPucheros[7].fichasRellenas++;
      if(arrayPucheros[7].fichasRellenas == arrayPucheros[7].fichasCapacidad){
         textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
         textArea.append("\n")
        arrayPucheros[7].fichasRellenas = 0;
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[7].fichasCapacidad
        }, 1000)
      }
     break;

     case 11:
      arrayPucheros[8].fichasRellenas++;
      if(arrayPucheros[8].fichasRellenas == arrayPucheros[8].fichasCapacidad){
         textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
         textArea.append("\n")
        arrayPucheros[8].fichasRellenas = 0;
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[8].fichasCapacidad
        }, 1000)
      }
     break;
     
     //en caso de que salga el 12 todas las fichas del puchero se suman al marcador del jugador
     default:
     array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + puchero7.fichasRellenas
     puchero7.fichasRellenas = 0;
      textArea.append(">El " + array[primerT].name + " se lleva las fichas del bote!");
      textArea.append("\n")
     break;
 } //fin switch
 actualizarInfo()
 setTimeout(() => {
   if(numeroDados != 12){
     array[primerT].fichasRecibidas--;
   }
   primerT++;
   if(primerT == jugadores.value){
     primerT = 0;
   }
   comprobarSiEs0();
   cambiarTurnoJugador(array[primerT].name);
   actualizarInfo()
   textArea.scrollTop = textArea.scrollHeight;
   botonJT.disabled = false;
 }, 1000)
 textArea.scrollTop = textArea.scrollHeight;

  }// Fin jugar()
  




  function  jugarRondaFinal() {     
    var numeroDados = rollDice();
   
      botonJT.disabled = true;
  
  textArea.append(">El jugador " + array[primerT].name + " ha sacado un : " + numeroDados);
  textArea.append("\n")
  switch (numeroDados) {
    case 2:
     if(arrayPucheros[0].fichasRellenas > 0){
       textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
       textArea.append("\n")
       setTimeout(() => {
         array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[0].fichasRellenas
         arrayPucheros[0].fichasRellenas = 0;
       }, 1000)
     }
    break;

    case 3:
      if(arrayPucheros[1].fichasRellenas > 0){
        textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
        textArea.append("\n")
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[1].fichasRellenas
          arrayPucheros[1].fichasRellenas = 0;
        }, 1000)
      }
    break;

    case 4:
      if(arrayPucheros[2].fichasRellenas > 0){
        textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
        textArea.append("\n")
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[2].fichasRellenas
          arrayPucheros[2].fichasRellenas = 0;
        }, 1000)
      }
    break;

    case 5:
      if(arrayPucheros[3].fichasRellenas > 0){
        textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
        textArea.append("\n")
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[3].fichasRellenas
          arrayPucheros[3].fichasRellenas = 0;
        }, 1000)
      }
    break;

    case 6:
      if(arrayPucheros[4].fichasRellenas > 0){
        textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
        textArea.append("\n")
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[4].fichasRellenas
          arrayPucheros[4].fichasRellenas = 0;
        }, 1000)
      }
    break;

    case 7:
      textArea.append(">No te quedan fichas que añadir al puchero!");
      textArea.append("\n")

    break;  

    case 8:
      if(arrayPucheros[5].fichasRellenas > 0){
        textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
        textArea.append("\n")
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[5].fichasRellenas
          arrayPucheros[5].fichasRellenas = 0;
        }, 1000)
      }
     break;

     case 9:
      if(arrayPucheros[6].fichasRellenas > 0){
        textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
        textArea.append("\n")
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[6].fichasRellenas
          arrayPucheros[6].fichasRellenas = 0;
        }, 1000)
      }
     break;

     case 10:
      if(arrayPucheros[7].fichasRellenas > 0){
        textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
        textArea.append("\n")
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[7].fichasRellenas
          arrayPucheros[7].fichasRellenas = 0;
        }, 1000)
      }
     break;

     case 11:
      if(arrayPucheros[8].fichasRellenas > 0){
        textArea.append(">El " + array[primerT].name + " se lleva las fichas de la casilla!");
        textArea.append("\n")
        setTimeout(() => {
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[8].fichasRellenas
          arrayPucheros[8].fichasRellenas = 0;
        }, 1000)
      }
     break;
     
     //en caso de que salga el 12 todas las fichas del puchero se suman al marcador del jugador
     default:
      let fichasTablero = 0;
      for (let i = 0; i < arrayPucheros.length; i++) {
       fichasTablero += arrayPucheros[i].fichasRellenas
      }
      array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + puchero7.fichasRellenas + fichasTablero
      puchero7.fichasRellenas = 0;
      textArea.append(">El jugador " + array[primerT].name + " se ha llevado todas las fichas del tablero!")
      textArea.append("\n")
      fichasa0();
      actualizarInfo()
      botonJT.innerHTML = "Volver a jugar";
      ElegirGanador(); 
     break;
 } //fin switch
 comprobarFin();
 actualizarInfo()
 setTimeout(() => {
   primerT++;
   if(primerT == jugadores.value){
     primerT = 0;
   }
   if(numeroDados != 12){
    cambiarTurnoJugador(array[primerT].name);
   }
   actualizarInfo()
   textArea.scrollTop = textArea.scrollHeight;
   botonJT.disabled = false;
 }, 1000)
 textArea.scrollTop = textArea.scrollHeight;

  }

  function comprobarFin(){
    if(puchero7.fichasRellenas == 0 && arrayPucheros[0].fichasRellenas == 0 && arrayPucheros[1].fichasRellenas == 0 && arrayPucheros[2].fichasRellenas == 0 
      && arrayPucheros[3].fichasRellenas == 0 && arrayPucheros[4].fichasRellenas == 0 && arrayPucheros[5].fichasRellenas == 0
      && arrayPucheros[6].fichasRellenas == 0 && arrayPucheros[7].fichasRellenas == 0 && arrayPucheros[8].fichasRellenas == 0 ){
        textArea.append(">No quedan mas fichas en el tablero!")
        textArea.append("\n")
        botonJT.innerHTML = "Volver a jugar";
        ElegirGanador();
      }
    
  }

  function ElegirGanador(){
    let arrayWiner = [...array]
  arrayWiner.sort( compare );
     let arrW= arrayWiner[0].fichasObtenidas;
     let texto = ""

  for (let i = 0; i < arrayWiner.length; i++) {
    if(arrayWiner[i].fichasObtenidas== arrW){
      texto += arrayWiner[i].name + ","
    }
  }
  textArea.append(">El ganador es " + texto);
  textArea.append("\n")
    
  
    
  }

  function fichasa0() {
    for (let i = 0; i < arrayPucheros.length; i++) {
      arrayPucheros[i].fichasRellenas = 0;
      
    }
    
  }


//-----------LOGICA JUGAR----------
const jugadores = document.getElementById("jugadores");
const boton = document.getElementById("mostrar");
const form = document.getElementById("form");
const valorFicha = document.getElementsByName('fichas');
const botonJ = document.getElementById("botonJ");
const nDados = document.getElementById("nDados");
const turno = document.getElementById("turno");
const bote = document.getElementById("bote");
var fichasTotales = 0;

form.addEventListener("submit",grafico);

function grafico(e) {
  var fichasBote = 0;
  e.preventDefault();
  var primerT = (primerTurno()-1);
  function crearJugador(name,fichas) {
    return {
      name: name,
      fichasRecibidas: fichas,
      fichasObtenidas: 0

    };
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

  document.getElementById("fichasR").innerHTML = "Quedan por dar ... fichas";
  document.getElementById("opciones").style.display="none" 
  document.getElementById("grafico").style.display="block" 

  function pintarPuntuacion() {
      var text = "";
  for (let i = 0; i < jugadores.value; i++) {
    text += ("<div class='row justify-content-center'><div class='col-3 border'>" + array[i].name  + "</div><div class='col-3 border'> Fichas: " + array[i].fichasObtenidas + "</div> </div>")    + "<br>";
    
  }

  document.getElementById("listajugadores").innerHTML= text;
  }


  //Cambiar boton a tirar dados:
  botonJ.addEventListener("click",Jugar)
  function cambiarTextoBoton() {
    botonJ.innerHTML="Tirar dados"
  }
  

  //Cambia título del encabezado
  function cambiarTurnoJugador(jugador) {
    turno.innerHTML= "Turno del jugador: " + jugador;
  }
  function cambiarFichasJugador(fichas) {
    document.getElementById("fichasR").innerHTML = "Quedan por dar " + fichas + " fichas"
  }

  
  //función que con un random saca la tirada de los dados
  function tirarDados(){
    return Math.floor(Math.random() * (12 - 2 + 1) + 2)
  }

  //función que decide qué jugador empieza a jugar
  function primerTurno(){
        return Math.floor(Math.random() * (jugadores.value - 1 + 1) + 1)
  }
      
//Funcion que realiza el sonido al tirar los dados, ademas de cancelar el uso de darle al boton otra vez por x tiempo
function sonarDados(numeroDados) {
  const audio = new Audio("sonidos/dados.mp3");
  audio.play();
  setTimeout(() => {
    botonJ.disabled = false;
  }, 2000)
}

//Funcion que realiza la animación de los dados y devuelve la suma de los dos dados.

const dice = document.getElementById('dice');
const dice2 = document.getElementById('dice2');

function rollDice() {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let result2 =  Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice2.dataset.side=result2;
    dice.classList.toggle("reRoll");
    dice2.classList.toggle("reRoll");

    return result+result2;

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
  //---------------Función principal del juego que llama al resto de funciones-------------
  function Jugar(e) {
    e.preventDefault();
    pintarPuntuacion();
    cambiarTurnoJugador(array[primerT].name)
    cambiarFichasJugador(array[primerT].fichasRecibidas)
    if(botonJ.innerHTML == "Tirar dados"){
      botonJ.disabled = true;
      var numeroDados = rollDice();
      sonarDados(numeroDados)

      switch (numeroDados) {
         case 2:
          arrayPucheros[0].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[0].fichasRellenas)
          if(arrayPucheros[0].fichasRellenas == arrayPucheros[0].fichasCapacidad){
            arrayPucheros[0].fichasRellenas = 0;
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[0].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[0].fichasRellenas)
            }, 1000)
          }
          break;
         case 3:
          arrayPucheros[1].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[1].fichasRellenas)
          if(arrayPucheros[1].fichasRellenas == arrayPucheros[1].fichasCapacidad){
            arrayPucheros[1].fichasRellenas = 0;
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[1].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[1].fichasRellenas)
            }, 1000)
          }
         break;
         case 4:
                    arrayPucheros[2].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[2].fichasRellenas)
          if(arrayPucheros[2].fichasRellenas == arrayPucheros[2].fichasCapacidad){
            arrayPucheros[2].fichasRellenas = 0;
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[2].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[2].fichasRellenas)
            }, 1000)
          }
          break;
         case 5:
                    arrayPucheros[3].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[3].fichasRellenas)
          if(arrayPucheros[3].fichasRellenas == arrayPucheros[3].fichasCapacidad){
            arrayPucheros[3].fichasRellenas = 0;
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[3].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[3].fichasRellenas)
            }, 1000)
          }
         break;
         case 6:
                    arrayPucheros[4].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[4].fichasRellenas)
          if(arrayPucheros[4].fichasRellenas == arrayPucheros[4].fichasCapacidad){
            arrayPucheros[4].fichasRellenas = 0;
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[4].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[4].fichasRellenas)
            }, 1000)
          }
         break;
        case 7:
          fichasBote++;
        bote.innerHTML = "Hay " + fichasBote + " fichas en el puchero";

          break;  
          case 8:
                     arrayPucheros[5].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[5].fichasRellenas)
          if(arrayPucheros[5].fichasRellenas == arrayPucheros[5].fichasCapacidad){
            arrayPucheros[5].fichasRellenas = 0;
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[5].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[5].fichasRellenas)
            }, 1000)
          }
          break;
          case 9:
                     arrayPucheros[6].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[6].fichasRellenas)
          if(arrayPucheros[6].fichasRellenas == arrayPucheros[6].fichasCapacidad){
            arrayPucheros[6].fichasRellenas = 0;
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[6].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[6].fichasRellenas)
            }, 1000)
          }
          break;
          case 10:
                     arrayPucheros[7].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[7].fichasRellenas)
          if(arrayPucheros[7].fichasRellenas == arrayPucheros[7].fichasCapacidad){
            arrayPucheros[7].fichasRellenas = 0;
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[7].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[7].fichasRellenas)
            }, 1000)
          }
          break;
          case 11:
                     arrayPucheros[8].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[8].fichasRellenas)
          if(arrayPucheros[8].fichasRellenas == arrayPucheros[8].fichasCapacidad){
            arrayPucheros[8].fichasRellenas = 0;
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[8].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[8].fichasRellenas)
            }, 1000)
          }
          break;
        default:
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + fichasBote
        fichasBote = 0;
        bote.innerHTML = "Hay " + fichasBote + " fichas en el puchero";
          break;
      }
      array[primerT].fichasRecibidas--;
      primerT++;
      if(primerT == jugadores.value){
        primerT = 0;
      }
    }
    pintarPuntuacion();
    cambiarTurnoJugador(array[primerT].name)
    cambiarFichasJugador(array[primerT].fichasRecibidas)
    cambiarTextoBoton();
    
    
  }


}


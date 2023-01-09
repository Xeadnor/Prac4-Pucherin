//-----------LOGICA JUGAR----------
const jugadores = document.getElementById("jugadores");
const boton = document.getElementById("mostrar");
const form = document.getElementById("form");
const valorFicha = document.getElementsByName('fichas');
const tipoJuego = document.getElementsByName('tipoJuego');
const botonJ = document.getElementById("botonJ");
const botonS=document.getElementById("botonS")
const nDados = document.getElementById("nDados");
const turno = document.getElementById("turno");
const bote = document.getElementById("bote");
const info = document.getElementById("fichasR")
const pucheroT = document.getElementById("puchero")
const casillasT = document.getElementById("casillas")
var fichasTotales = 0;
var tipoJ

form.addEventListener("submit",elegirJuego);

function elegirJuego(e) {
  e.preventDefault();
  if(tipoJuego[0].checked){
    tipoJ = "GRAFICO";
  }else if (tipoJuego[1].checked) {
    tipoJ = "TEXTO";
  }

  if(tipoJ == "GRAFICO"){
    grafico();
  }else if (tipoJ == "TEXTO") {
    texto();
  }
}

function grafico() {
  var fichasBote = 0;
  var primerT = (primerTurno()-1);
  var ultimoTurno = primerT

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

  info.innerHTML = "Quedan por dar ... fichas";
  document.getElementById("opciones").style.display="none" 
  document.getElementById("grafico").style.display="block" 

  //Funcion que se encarga de pintar los jugadores ordenados por puntos
  function pintarPuntuacion() {
  let copyOfArray = [...array]
  copyOfArray.sort( compare );
      var text = "";
  for (let i = 0; i < jugadores.value; i++) {
    text += ("<div class='row justify-content-center'><div class='col-3 border'>" + copyOfArray[i].name  + "</div><div class='col-3 border'> Fichas: " + copyOfArray[i].fichasRecibidas + "</div>" + "<div class='col-3 border'> Puntos: " + copyOfArray[i].fichasObtenidas + "</div>"  + "</div>");
    
  }
  document.getElementById("listajugadoresG").innerHTML= text;
  }
  function ElegirGanador(){
    let arrayWiner = [...array]
  arrayWiner.sort( compare );
  document.getElementById("Ganador").innerHTML = "El ganador es : " + arrayWiner[0].name;//TODO cambiar array[0 por un for que imprima todos los del array winner]

  //NO COMPROBAMOS EMPATES ENTRE PUNTOS

  }

  //Funcion compare para la funcion pintarPuntuacion()
  function compare( a, b ) {
    if ( a.fichasObtenidas < b.fichasObtenidas ){
      return 1;
    }
    if ( a.fichasObtenidas > b.fichasObtenidas ){
      return -1;
    }
    return 0;
  }
  
  //Salir del juego
  botonS.addEventListener("click",Volver)
  
  //función que vuelve a la pantalla de opciones
  function Volver(){
    document.getElementById("opciones").style.display="block" 
    document.getElementById("grafico").style.display="none" 
    resetGame();

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
    info.innerHTML = "Quedan por dar " + fichas + " fichas"
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
  //botonJ.disabled = false;
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

//Funcion que resetea el juego
function resetGame(){
  for (let i = 0; i < array.length; i++) {
    array[i].fichasRecibidas = fichasTotales;
    array[i].fichasObtenidas = 0;
  }
  for (let i = 0; i < arrayPucheros.length; i++) {
    arrayPucheros[i].fichasRellenas = 0;
  }
  fichasBote = 0;
  pintarPuntuacion();

  //Resetar fichas
  pintarCasilla(canvases[0], 2, 0)
  pintarCasilla(canvases[1], 3, 0)
  pintarCasilla(canvases[2], 4, 0)
  pintarCasilla(canvases[3], 5, 0)
  pintarCasilla(canvases[4], 6, 0)
  pintarCasilla(canvases[5], 8, 0)
  pintarCasilla(canvases[6], 9, 0)
  pintarCasilla(canvases[7], 10, 0)
  pintarCasilla(canvases[8], 11, 0)
  bote.innerHTML = "Hay " + fichasBote + " fichas en el puchero";
  info.innerHTML = "Quedan por dar " + fichasTotales + " fichas"

  //resetear botes
  botonJ.innerHTML = "Tirar dados"
  document.getElementById("Ganador").innerHTML = " ";

  
}

//Funcion que realiza el sonido al llevarse el bote del puchero
function sonarBote() {
  const audio = new Audio("sonidos/bote.mp3");
  audio.play();
}

//Funcion que realiza el sonido al completar un puchero
function sonarCompletado() {
  const audio = new Audio("sonidos/coin.mp3");
  audio.play();
}

//Funcion que realiza el sonido cuado sale un 7 y se añade una ficha al puchero
function sonarPuchero() {
  const audio = new Audio("sonidos/puchero.mp3");
  audio.play();
}

//Funcion que realiza el sonido al finalizar la partida
function sonarWin() {
  const audio = new Audio("sonidos/aplauso.mp3");
  audio.play();
}
//Funcion que realiza el sonido al empezar una la partida
function sonarStart() {
const audio = new Audio("sonidos/start.wav");
audio.play();
}


  //---------------Función principal del juego que llama al resto de funciones-------------
  function Jugar(e) {
    
    e.preventDefault();
    cambiarTurnoJugador(array[primerT].name)
    if(info.innerHTML != "Seguir tirando dados hasta vaciar los pucheros o sacar 12"){
       cambiarFichasJugador(array[primerT].fichasRecibidas)
    }
   

    if(botonJ.innerHTML == "Tirar dados" && info.innerHTML != "Seguir tirando dados hasta vaciar los pucheros o sacar 12"){
      pintarPuntuacion();
      //botonJ.disabled = true;
      var numeroDados = rollDice();
      sonarDados(numeroDados)

      switch (numeroDados) {
         case 2:
          arrayPucheros[0].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[0].fichasRellenas)
          if(arrayPucheros[0].fichasRellenas == arrayPucheros[0].fichasCapacidad){
            arrayPucheros[0].fichasRellenas = 0;
            sonarCompletado();
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
            sonarCompletado();
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
            sonarCompletado();
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
            sonarCompletado();
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
            sonarCompletado();
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[4].fichasCapacidad
              pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[4].fichasRellenas)
            }, 1000)
          }
         break;

         case 7:
          fichasBote++;
          bote.innerHTML = "Hay " + fichasBote + " fichas en el puchero";
          sonarPuchero();

         break;  

         case 8:
          arrayPucheros[5].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[5].fichasRellenas)
          if(arrayPucheros[5].fichasRellenas == arrayPucheros[5].fichasCapacidad){
            arrayPucheros[5].fichasRellenas = 0;
            sonarCompletado();
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[5].fichasCapacidad
              pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[5].fichasRellenas)
            }, 1000)
          }
          break;

          case 9:
          arrayPucheros[6].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[6].fichasRellenas)
          if(arrayPucheros[6].fichasRellenas == arrayPucheros[6].fichasCapacidad){
            arrayPucheros[6].fichasRellenas = 0;
            sonarCompletado();
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[6].fichasCapacidad
              pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[6].fichasRellenas)
            }, 1000)
          }
          break;

          case 10:
          arrayPucheros[7].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[7].fichasRellenas)
          if(arrayPucheros[7].fichasRellenas == arrayPucheros[7].fichasCapacidad){
            arrayPucheros[7].fichasRellenas = 0;
            sonarCompletado();
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[7].fichasCapacidad
              pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[7].fichasRellenas)
            }, 1000)
          }
          break;

          case 11:
          arrayPucheros[8].fichasRellenas++;
          pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[8].fichasRellenas)
          if(arrayPucheros[8].fichasRellenas == arrayPucheros[8].fichasCapacidad){ 
            arrayPucheros[8].fichasRellenas = 0;
            sonarCompletado();
            setTimeout(() => {
              array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[8].fichasCapacidad
              pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[8].fichasRellenas)
            }, 1000)
          }
          break;
          
          //en caso de que salga el 12 todas las fichas del puchero se suman al marcador del jugador
          default:
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + fichasBote
          fichasBote = 0;
          sonarBote();
          bote.innerHTML = "Hay " + fichasBote + " fichas en el puchero";
          break;
      } //fin switch

      setTimeout(() => {
        if(numeroDados != 12){
          array[primerT].fichasRecibidas--;
        }
        primerT++;
        if(primerT == jugadores.value){
          primerT = 0;
        }
        comprobarSiEs0();
        pintarPuntuacion();
        console.log(array)
        console.log("---")
        console.log("Turno : " + primerT);
      }, 1100)
    }

    function comprobarSiEs0() {
      let counter = 0;
      for (let i = 0; i < jugadores.value; i++) {
        if(array[i].fichasRecibidas > 0){
          while (array[primerT].fichasRecibidas == 0) {
            primerT++
          }
          return false;
        }else if(array[i].fichasRecibidas == 0){
          counter++;
          console.log(counter);
        }
        if(counter == jugadores.value){
          botonJ.innerHTML = "Tirar dados"
          info.innerHTML = "Seguir tirando dados hasta vaciar los pucheros o sacar 12";
        }

      }
    }


    //fin de juego ultimos turnos sin fichas por poner
    if(botonJ.innerHTML == "Tirar dados" && info.innerHTML == "Seguir tirando dados hasta vaciar los pucheros o sacar 12"){
      pintarPuntuacion();
      //botonJ.disabled = true;
      var numeroDados = rollDice();
      sonarDados(numeroDados)

      switch (numeroDados) {
        case 2:
        if(arrayPucheros[0].fichasRecibidas > 1){
          sonarCompletado();
        }        
           setTimeout(() => {
             array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[0].fichasRellenas
             arrayPucheros[0].fichasRellenas = 0;
             pintarCasilla(canvases[numeroDados-2], numeroDados, 0)
           }, 1000)
         
        break;

        case 3:
          if(arrayPucheros[1].fichasRecibidas > 1){
             sonarCompletado();
          }
         
          setTimeout(() => {
            array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[1].fichasRellenas
            arrayPucheros[1].fichasRellenas = 0;
            pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[1].fichasRellenas)
          }, 1000)
        break;

        case 4:
          if(arrayPucheros[2].fichasRecibidas > 1){
            sonarCompletado();
          }
          
          setTimeout(() => {
            array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[2].fichasRellenas
            arrayPucheros[2].fichasRellenas = 0;
            pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[2].fichasRellenas)
          }, 1000)
        break;

        case 5:
          if(arrayPucheros[3].fichasRecibidas > 1){
            sonarCompletado();
          }
         
          setTimeout(() => {
            array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[3].fichasRellenas
            arrayPucheros[3].fichasRellenas = 0;
            pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[3].fichasRellenas)
          }, 1000)
        break;

        case 6:
          if(arrayPucheros[4].fichasRecibidas > 1){
            sonarCompletado();
          }
         
          setTimeout(() => {
            array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[4].fichasRellenas
            arrayPucheros[4].fichasRellenas = 0;
            pintarCasilla(canvases[numeroDados-2], numeroDados, arrayPucheros[4].fichasRellenas)
          }, 1000)
        break;

        case 7:
         
         bote.innerHTML = "Hay " + fichasBote + " fichas en el puchero";
         sonarPuchero();

        break;  

        case 8:
          if(arrayPucheros[5].fichasRecibidas > 1){
            sonarCompletado();
          }
          setTimeout(() => {
            array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[5].fichasRellenas
            arrayPucheros[5].fichasRellenas = 0;
            pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[5].fichasRellenas)
          }, 1000)
         break;

         case 9:
         if(arrayPucheros[6].fichasRecibidas > 1){
          sonarCompletado();
         }
          
          setTimeout(() => {
            array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[6].fichasRellenas
            arrayPucheros[6].fichasRellenas = 0;
            pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[6].fichasRellenas)
          }, 1000)
         break;

         case 10:
         if(arrayPucheros[7].fichasRecibidas > 1){
          sonarCompletado();
          } 
    
          setTimeout(() => {
            array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[7].fichasRellenas
            arrayPucheros[7].fichasRellenas = 0;
            pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[7].fichasRellenas)
          }, 1000)
         break;

         case 11:
         if(arrayPucheros[0].fichasRecibidas > 1){
          sonarCompletado();
          } 
          
          setTimeout(() => {
            array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[8].fichasRellenas
            arrayPucheros[8].fichasRellenas = 0;
            pintarCasilla(canvases[numeroDados-3], numeroDados, arrayPucheros[8].fichasRellenas)
          }, 1000)
         break;
         
         //en caso de que salga el 12 todas las fichas del puchero y todas las fichas del tablero se suman al marcador del jugador
         default:
          
         

          let fichasTablero = 0;

         for (let i = 0; i < arrayPucheros.length; i++) {

          fichasTablero += arrayPucheros[i].fichasRellenas
          if(i < 5){
            pintarCasilla(canvases[numeroDados-2], numeroDados, 0)
          }else{
          pintarCasilla(canvases[numeroDados-3], numeroDados, 0)}

         }
         array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + fichasBote + fichasTablero
         fichasBote = 0;
         bote.innerHTML = "Hay " + fichasBote + " fichas en el puchero";


         break;
     } //fin switch
      setTimeout(() => {
        primerT++;
        if(primerT == jugadores.value){
          primerT = 0;
        }
      }, 1100)
    }

    if(botonJ.innerHTML == "Volver a jugar"){
      resetGame();
     }

    if(array[ultimoTurno].fichasRecibidas == 0 && arrayPucheros[0].fichasRellenas == 0 && arrayPucheros[1].fichasRellenas == 0 && arrayPucheros[2].fichasRellenas == 0 
      && arrayPucheros[3].fichasRellenas == 0 && arrayPucheros[4].fichasRellenas == 0 && arrayPucheros[5].fichasRellenas == 0
      && arrayPucheros[6].fichasRellenas == 0 && arrayPucheros[7].fichasRellenas == 0 ){
                botonJ.innerHTML = "Volver a jugar";
                ElegirGanador();
                sonarWin();
                console.log(array)
                console.log(arrayPucheros)
      }


   if(botonJ.innerHTML != "Volver a jugar"){
      setTimeout(() => {
        cambiarTurnoJugador(array[primerT].name)
        if(info.innerHTML != "Seguir tirando dados hasta vaciar los pucheros o sacar 12"){
          cambiarFichasJugador(array[primerT].fichasRecibidas)
       }
        cambiarTextoBoton();
      }, 1200) 
    }
    
 
  }

}

function texto(){
    var fichasBote = 0;
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
    for (let i = 0; i < arrayPucheros.length; i++) {
      text += ("<div class='row justify-content-center'><div class='col-4 border'> Casilla " + arrayPucheros[i].fichasCapacidad + " </div><div class='col-4 border'> Fichas rellenas: " + arrayPucheros[i].fichasRellenas + "/" + arrayPucheros[i].fichasCapacidad +  "</div></div>");
      
    }
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
    botonS.addEventListener("click",Volver)
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
      for (let i = 0; i < arrayPucheros.length; i++) {
        arrayPucheros[i].fichasRellenas = 0;
      }
      fichasBote = 0;
      pintarPuntuacion();   
    }
}


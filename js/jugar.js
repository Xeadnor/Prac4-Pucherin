//-----------LOGICA JUGAR----------
const jugadores = document.getElementById("jugadores");
const boton = document.getElementById("mostrar");
const form = document.getElementById("form");
const valorFicha = document.getElementsByName('fichas');
const tipoJuego = document.getElementsByName('tipoJuego');
const botonJ = document.getElementById("botonJ");
const botonJT = document.getElementById("botonJT");
const botonS=document.getElementById("botonS")
const nDados = document.getElementById("nDados");
const turno = document.getElementById("turno");
const bote = document.getElementById("bote");
const info = document.getElementById("fichasR")
const pucheroT = document.getElementById("puchero")
const casillasT = document.getElementById("casillas")
const flujoPartida = document.getElementById("flujoPartida")
const textArea = document.getElementById("textarea")

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
     let arrW= arrayWiner[0].fichasObtenidas;
     let texto = ""

  for (let i = 0; i < arrayWiner.length; i++) {
    if(arrayWiner[i].fichasObtenidas== arrW){
      texto += arrayWiner[i].name + ","
    }
  }
    document.getElementById("Ganador").innerHTML = "El ganador es : " + texto
    
  
    
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
  botonJ.disabled = false;
  }, 1200)
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
  puchero7.fichasRellenas = 0;
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
  bote.innerHTML = "Hay " + puchero7.fichasRellenas + " fichas en el puchero";
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
      botonJ.disabled = true;
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
          puchero7.fichasRellenas++;
          bote.innerHTML = "Hay " + puchero7.fichasRellenas + " fichas en el puchero";
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
          array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + puchero7.fichasRellenas
          puchero7.fichasRellenas = 0;
          sonarBote();
          bote.innerHTML = "Hay " + puchero7.fichasRellenas + " fichas en el puchero";
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
      }, 1100)
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
          botonJ.innerHTML = "Tirar dados"
          info.innerHTML = "Seguir tirando dados hasta vaciar los pucheros o sacar 12";
        }

      }
    }

    if(botonJ.innerHTML == "Volver a jugar"){
      resetGame();
     }


    //fin de juego ultimos turnos sin fichas por poner
    if(botonJ.innerHTML == "Tirar dados" && info.innerHTML == "Seguir tirando dados hasta vaciar los pucheros o sacar 12"){
      pintarPuntuacion();
      botonJ.disabled = true;
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
         
         bote.innerHTML = "Hay " + puchero7.fichasRellenas + " fichas en el puchero";

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
            pintarCasilla(canvases[i], i+2, 0)
          }else{
          pintarCasilla(canvases[i], i+3, 0)}

         }
         array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + puchero7.fichasRellenas + fichasTablero
         puchero7.fichasRellenas = 0;
         bote.innerHTML = "Hay " + puchero7.fichasRellenas + " fichas en el puchero";

         botonJ.innerHTML = "Volver a jugar";
         ElegirGanador();
         sonarWin();


         break;
     } //fin switch
      setTimeout(() => {
        primerT++;
        if(primerT == jugadores.value){
          primerT = 0;
        }
        pintarPuntuacion();
        comprobarFin();
      }, 1100)
    }

    function comprobarFin(){
      if(puchero7.fichasRellenas == 0 && arrayPucheros[0].fichasRellenas == 0 && arrayPucheros[1].fichasRellenas == 0 && arrayPucheros[2].fichasRellenas == 0 
        && arrayPucheros[3].fichasRellenas == 0 && arrayPucheros[4].fichasRellenas == 0 && arrayPucheros[5].fichasRellenas == 0
        && arrayPucheros[6].fichasRellenas == 0 && arrayPucheros[7].fichasRellenas == 0 ){
          
          botonJ.innerHTML = "Volver a jugar";
          ElegirGanador();
          sonarWin();

        }
      
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
    var rondaFinal = false;
    var primerT = (primerTurno()-1);
    var ultimoTurno = primerT

    function primerTurno(){
      return Math.floor(Math.random() * (jugadores.value - 1 + 1) + 1)
}

        function crearJugador(name,fichas) {  function rollDice() {
          let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          let result2 =  Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          dice.dataset.side = result;
          dice2.dataset.side=result2;
          dice.classList.toggle("reRoll");
          dice2.classList.toggle("reRoll");
      
          return result+result2;
      
      }
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
    text += ("<div class='row justify-content-center'><div class='col-2 border'> Casilla " + arrayPucheros[0].fichasCapacidad + " </div><div class='col-2 border'> Fichas:" + arrayPucheros[0].fichasRellenas + "/" + arrayPucheros[0].fichasCapacidad +  "</div>");
    text +=  ("<div class='col-2 border'> Casilla " + arrayPucheros[1].fichasCapacidad + " </div><div class='col-2 border'> Fichas:" + arrayPucheros[1].fichasRellenas + "/" + arrayPucheros[1].fichasCapacidad +  "</div>" + "</div>")

    text += ("<div class='row justify-content-center'><div class='col-2 border'> Casilla " + arrayPucheros[2].fichasCapacidad + " </div><div class='col-2 border'> Fichas:" + arrayPucheros[2].fichasRellenas + "/" + arrayPucheros[2].fichasCapacidad +  "</div>");
    text +=  ("<div class='col-2 border'> Casilla " + arrayPucheros[3].fichasCapacidad + " </div><div class='col-2 border'> Fichas:" + arrayPucheros[3].fichasRellenas + "/" + arrayPucheros[3].fichasCapacidad +  "</div>" + "</div>")

    text += ("<div class='row justify-content-center'><div class='col-2 border'> Casilla " + arrayPucheros[4].fichasCapacidad + " </div><div class='col-2 border'> Fichas:" + arrayPucheros[4].fichasRellenas + "/" + arrayPucheros[4].fichasCapacidad +  "</div>");
    text +=  ("<div class='col-2 border'> Casilla " + arrayPucheros[5].fichasCapacidad + " </div><div class='col-2 border'> Fichas:" + arrayPucheros[5].fichasRellenas + "/" + arrayPucheros[5].fichasCapacidad +  "</div>" + "</div>")

    text += ("<div class='row justify-content-center'><div class='col-2 border'> Casilla " + arrayPucheros[6].fichasCapacidad + " </div><div class='col-2 border'> Fichas:" + arrayPucheros[6].fichasRellenas + "/" + arrayPucheros[6].fichasCapacidad +  "</div>");
    text +=  ("<div class='col-2 border'> Casilla " + arrayPucheros[7].fichasCapacidad + " </div><div class='col-2 border'> Fichas:" + arrayPucheros[7].fichasRellenas + "/" + arrayPucheros[7].fichasCapacidad +  "</div>" + "</div>")

    text += ("<div class='row justify-content-center'><div class='col-2 border'> Casilla " + arrayPucheros[8].fichasCapacidad + " </div><div class='col-2 border'> Fichas:" + arrayPucheros[8].fichasRellenas + "/" + arrayPucheros[8].fichasCapacidad +  "</div>" + "</div>")
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
      botonJT.innerHTML >= "Tirar Dados";   
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
          && arrayPucheros[6].fichasRellenas == 0 && arrayPucheros[7].fichasRellenas == 0 ){
            textArea.append(">No quedan mas fichas en el tablero!")
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



}


//-----------LOGICA JUGAR----------
const jugadores = document.getElementById("jugadores");
const boton = document.getElementById("mostrar");
const form = document.getElementById("form");
const valorFicha = document.getElementsByName('fichas');
const botonJ = document.getElementById("botonJ");
const nDados = document.getElementById("nDados");
const turno = document.getElementById("turno");
var fichasTotales = 0;

form.addEventListener("submit",grafico);

function grafico(e) {
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
  var text = "";
  for (let i = 0; i < jugadores.value; i++) {
    text += ("<div class='row justify-content-center'><div class='col-3 border'>" + array[i].name  + "</div><div class='col-3 border'>Fichas:X</div> </div>")    + "<br>";
    
  }

  document.getElementById("listajugadores").innerHTML= text;

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






      

function sonarDados(numeroDados) {
  const audio = new Audio("sonidos/dados.mp3");
  audio.play();
  setTimeout(() => {
    botonJ.disabled = false;
  }, 2300)
}



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

  //---------------Función principal del juego que llama al resto de funciones-------------
  function Jugar(e) {
    e.preventDefault();
    cambiarTurnoJugador(array[primerT].name)
    cambiarFichasJugador(array[primerT].fichasRecibidas)
    if(botonJ.innerHTML == "Tirar dados"){
      botonJ.disabled = true;
      var numeroDados = rollDice();
      sonarDados(numeroDados)

      switch (numeroDados) {
        case 1: case 2: case 3: case 4: case 5: case 6:
          pintarCasilla(canvases[numeroDados-2], numeroDados, 1)
          break;
        case 7:
   

          break;  
          case 8: case 9: case 10: case 11:
          pintarCasilla(canvases[numeroDados-3], numeroDados, 1)

          break;
        default:
       

          break;
      }
      array[primerT].fichasRecibidas--;
      primerT++;
      if(primerT == jugadores.value){
        primerT = 0;
      }
    }
    cambiarTurnoJugador(array[primerT].name)
    cambiarFichasJugador(array[primerT].fichasRecibidas)
    cambiarTextoBoton();
    
    
  }


}


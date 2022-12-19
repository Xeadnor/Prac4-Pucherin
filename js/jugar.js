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
  function crearJugador(name) {
    return {
      name: name,
      fichasRecibidas: 0//poner fichas que te quedan por poner

    };
  }

  //array de jugadores que se rellena según el num selecionado
  const array = [];
  for (let i = 1; i <= jugadores.value; i++) {
    let jugador = crearJugador("Jugador " + i);
    array.push(jugador);
  }

if(valorFicha[0].checked){
  fichasTotales = 30;
}else if (valorFicha[1].checked) {
  fichasTotales = 40;
}else if (valorFicha[2].checked) {
  fichasTotales = 50;
}

  document.getElementById("fichasR").innerHTML = "Quedan por dar " + fichasTotales + " fichas";
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

  
  //función que con un random saca la tirada de los dados
  function tirarDados(){
    return Math.floor(Math.random() * (12 - 2 + 1) + 2)
  }

  //función que decide qué jugador empieza a jugar
  function primerTurno(){
        return Math.floor(Math.random() * (jugadores.value - 1 + 1) + 1)
  }






  //---------------Función principal del juego que llama al resto de funciones-------------
  function Jugar(e) {
    e.preventDefault();

    if(botonJ.innerHTML == "Tirar dados"){
      var primerT = primerTurno();
      cambiarTurnoJugador(array[primerT-1].name)

      var numeroDados = tirarDados();
      nDados.innerHTML = numeroDados

      //pintar casilla de la ficha correspondiente al num del dado
      if(numeroDados!=7 && numeroDados!=12 ){
        pintarCasilla(canvases[numeroDados-2],numeroDados, 1);
      }else{
        //TODO aquí falta añadir lo que haría en caso de sacar 7
      }//TODO else lo que haría al sacar 12, o tambien se puede hacer con un switch
      

      //restar una ficha al total de fichas del jugador
      array[primerT-1].fichasRecibidas-=1;

      //TODO aquí iría el cambio de turno
        /* if (primerT != array.lenght ){
          primerT++
        }else{
          primerT=1
        }  y se volvería a empezar lo anterior */

    }
    cambiarTextoBoton();
  }


}

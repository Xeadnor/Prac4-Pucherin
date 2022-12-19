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
  const array = [];
  for (let i = 1; i <= jugadores.value; i++) {
    let jugador = crearJugador("Jugador" + i);
    array.push(jugador);
  }

if(valorFicha[0].checked){//comprbacion visa
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




  //Función principal del juego que llama al resto de funciones
  function Jugar(e) {
    e.preventDefault();
    if(botonJ.innerHTML == "Tirar dados"){
      var numeroDados = tirarDados();
      nDados.innerHTML = numeroDados

      var primerT = primerTurno();
      cambiarTurnoJugador(array[primerT-1].name)
    }
    cambiarTextoBoton();
    
  }

  function tirarDados(){
    return Math.floor(Math.random() * (12 - 2 + 1) + 2)
  }

  function primerTurno(){
    console.log(Math.floor(Math.random() * ((jugadores.value-1) - 0 + 1) + 0))

    return Math.floor(Math.random() * (jugadores.value - 2 + 1) + 2)
    
  }

}
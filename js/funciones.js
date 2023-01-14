
const array=[];

for (let i = 1; i <= 6; i++) {
    let jugador = crearJugador("Jugador " + i,30);
    array.push(jugador);
}


function crearJugador(name,fichas) {  
    return {
      name: name,
      fichasRecibidas: fichas,
      fichasObtenidas: 0
  
    };
  }


function pintarTurno(primerT){
    return ("Es el turno de " + array[primerT].name)
}

function primerTurno(jugadores){
    return Math.floor(Math.random() * (jugadores - 1 + 1) + 1)
}

function compare( a, b ) {
  if ( array[a].fichasObtenidas < array[b].fichasObtenidas ){
    return 1;
  }
  if ( array[a].fichasObtenidas > array[b].fichasObtenidas ){
    return -1;
  }
  return 0;
  }
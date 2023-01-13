const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log("Bienvenido al pucherin modo texto!")
  console.log("Antes de empezar a jugar ajustemos las opciones")
jugar();
function jugar() {
    const array = [];
    const arrayPucheros = [];
    const puchero7 = {
        fichasRellenas:0
      };
     readline.question("Cuantos jugadores habra? (2-6)", jugadoresQ => {
        var jugadores = parseInt(jugadoresQ)
        var fichas = 30;
        var primerT = (primerTurno(jugadores)-1);
        var rondaFinal = false;
        for (let i = 1; i <= jugadores; i++) {
          let jugador = crearJugador("Jugador " + i,fichas);
          array.push(jugador);
          }

            
            for (let i = 2; i <= 11; i++) {
              if(i!=7){
                let puchero = crearPuchero(i);
                arrayPucheros.push(puchero);
              }
            
            }
            
            iniciarPartida();
      });
      function iniciarPartida() {
        console.log("Jugadores:")
        console.log(array)
        console.log("Puchero:")
        console.log(puchero7)
        for (let i = 0; i < 8; i++) {
            c
            
        }
        console.log(arrayPucheros)
        console.log("Pulsa espacio para continuar");
        let readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    process.stdin.on('keypress', () => {

        console.log
        //aqui el switch


});
        process.stdin.setRawMode(true);
        }





      function compare( a, b ) {
        if ( a.fichasObtenidas < b.fichasObtenidas ){
          return 1;
        }
        if ( a.fichasObtenidas > b.fichasObtenidas ){
          return -1;
        }
        return 0;
        }
      function primerTurno(jugadores){
        return Math.floor(Math.random() * (jugadores - 1 + 1) + 1)
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

      function crearPuchero(fichas) {
        return {
          fichasCapacidad: fichas,
          fichasRellenas: 0
      
        };
      } 

   

}






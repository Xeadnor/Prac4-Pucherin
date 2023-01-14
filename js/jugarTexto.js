const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log("Bienvenido al pucherin modo texto!")
  console.log("Antes de empezar a jugar ajustemos las opciones")
jugar();
var finPartida = false;
var rondaFinal = false;
function jugar() {
    const array = [];
    const arrayPucheros = [];
    class Recipiente  {
      constructor(){
        this.fichasRellenas = 0;
      }
      };
      class Casilla extends Recipiente {
        constructor(fichas) {
          super();
          this.fichasCapacidad = fichas;
        }
      } 
      const puchero7 = new Recipiente()
      const fichas = 30;
      
     readline.question("Cuantos jugadores habra? (2-6)", jugadoresQ => {
        var jugadores = parseInt(jugadoresQ)
        if( jugadores > 6 || jugadores < 2){
          console.log("Valor invalido, solo se puede de 2 a 6 jugadores")
          readline.close();
          return false;
        }

        for (let i = 1; i <= jugadores; i++) {
          let jugador = crearJugador("Jugador " + i,fichas);
          array.push(jugador);
          }

            
            for (let i = 2; i <= 11; i++) {
              if(i!=7){
                let puchero = new Casilla(i)
                arrayPucheros.push(puchero);
              }
            
            }
            iniciarPartida();
      });
      function iniciarPartida() {
        var primerT = (primerTurno(array.length)-1);
        console.log("Jugadores:")
        console.log(array)
        console.log("Puchero: Fichas= " + puchero7.fichasRellenas)
        for (let i = 0; i < 9; i++) {
            console.log("Casilla" + arrayPucheros[i].fichasCapacidad + ":" + arrayPucheros[i].fichasRellenas + "/" + arrayPucheros[i].fichasCapacidad)
            
        }
        
       let readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
    pintarTurno(primerT);
    console.log("Pulsa espacio para continuar");
    process.stdin.on('keypress', () => {
      if(finPartida == false){
        numeroDados = rollDice();
        console.log("El jugador " + array[primerT].name + " ha sacado un " + numeroDados)
        if(rondaFinal == true){
          rondaF = true;
        }else{
          rondaF = false;
        }
        if(rondaFinal == false){
          switch (numeroDados) {
            case 2:
             arrayPucheros[0].fichasRellenas++;
             if(arrayPucheros[0].fichasRellenas == arrayPucheros[0].fichasCapacidad){
              console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
               arrayPucheros[0].fichasRellenas = 0;
                 array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[0].fichasCapacidad
             }
            break;
        
            case 3:
              arrayPucheros[1].fichasRellenas++;
              if(arrayPucheros[1].fichasRellenas == arrayPucheros[1].fichasCapacidad){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                arrayPucheros[1].fichasRellenas = 0;
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[1].fichasCapacidad
                
              }
            break;
        
            case 4:
              arrayPucheros[2].fichasRellenas++;
              if(arrayPucheros[2].fichasRellenas == arrayPucheros[2].fichasCapacidad){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                arrayPucheros[2].fichasRellenas = 0;
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[2].fichasCapacidad
              }
            break;
        
            case 5:
              arrayPucheros[3].fichasRellenas++;
              if(arrayPucheros[3].fichasRellenas == arrayPucheros[3].fichasCapacidad){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                arrayPucheros[3].fichasRellenas = 0;
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[3].fichasCapacidad
              }
            break;
        
            case 6:
              arrayPucheros[4].fichasRellenas++;
              if(arrayPucheros[4].fichasRellenas == arrayPucheros[4].fichasCapacidad){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                
                arrayPucheros[4].fichasRellenas = 0;
                
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[4].fichasCapacidad
                
              }
            break;
        
            case 7:
              puchero7.fichasRellenas++;
              console.log("Se añade la ficha al puchero");
             
        
            break;  
        
            case 8:
              arrayPucheros[5].fichasRellenas++;
              if(arrayPucheros[5].fichasRellenas == arrayPucheros[5].fichasCapacidad){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                
                arrayPucheros[5].fichasRellenas = 0;
                
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[5].fichasCapacidad
                
              }
             break;
        
             case 9:
              arrayPucheros[6].fichasRellenas++;
              if(arrayPucheros[6].fichasRellenas == arrayPucheros[6].fichasCapacidad){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                
                arrayPucheros[6].fichasRellenas = 0;
                
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[6].fichasCapacidad
                
              }
             break;
        
             case 10:
              arrayPucheros[7].fichasRellenas++;
              if(arrayPucheros[7].fichasRellenas == arrayPucheros[7].fichasCapacidad){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                
                arrayPucheros[7].fichasRellenas = 0;
                
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[7].fichasCapacidad
                
              }
             break;
        
             case 11:
              arrayPucheros[8].fichasRellenas++;
              if(arrayPucheros[8].fichasRellenas == arrayPucheros[8].fichasCapacidad){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                
                arrayPucheros[8].fichasRellenas = 0;
                
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[8].fichasCapacidad
                
              }
             break;
             
             //en caso de que salga el 12 todas las fichas del puchero se suman al marcador del jugador
             default:
             array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + puchero7.fichasRellenas
             puchero7.fichasRellenas = 0;
              console.log("El " + array[primerT].name + " se lleva las fichas del bote!");
             
             break;
         } //fin switch
         if(numeroDados != 12){
          array[primerT].fichasRecibidas--;
         }
         primerT++;
         if(primerT == array.length){
          primerT = 0;
        }
      
  
        actualizarInfo(); 
          let counter = 0;
          for (let i = 0; i < array.length; i++) {
            if(array[i].fichasRecibidas > 0){
              while (array[primerT].fichasRecibidas == 0) {
                primerT++
                if(primerT == array.length){
                  primerT = 0;
                }
              }
              console.log(" ")
              console.log(" ")
              pintarTurno(primerT);
              return false;
            }else if(array[i].fichasRecibidas == 0){
              counter++;
        
            }
        
            if(counter == array.length){
              rondaFinal = true;
              console.log("---------------")
              console.log("Empieza la ronda final!")
              console.log("---------------")
            }
          }
        }
        /////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////
        if(rondaFinal == true && rondaF == true){
          switch (numeroDados) {
            case 2:
              
             if(arrayPucheros[0].fichasRellenas > 0){
              console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
               
                 array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[0].fichasRellenas
                 arrayPucheros[0].fichasRellenas = 0;
             }
            break;
        
            case 3:
              
              if(arrayPucheros[1].fichasRellenas > 0){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[1].fichasRellenas
                  arrayPucheros[1].fichasRellenas = 0;
                
              }
            break;
        
            case 4:
              
              if(arrayPucheros[2].fichasRellenas > 0){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
                
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[2].fichasRellenas
                  arrayPucheros[2].fichasRellenas = 0;
              }
            break;
        
            case 5:
              
              if(arrayPucheros[3].fichasRellenas > 0){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")
               
                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[3].fichasRellenas
                  arrayPucheros[3].fichasRellenas = 0;
              }
            break;
        
            case 6:
              
              if(arrayPucheros[4].fichasRellenas > 0){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")

                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[4].fichasRellenas
                  arrayPucheros[4].fichasRellenas = 0;
                
              }
            break;
        
            case 7:
              console.log("No quedan fichas para añadir!");
             
        
            break;  
        
            case 8:
              
              if(arrayPucheros[5].fichasRellenas > 0){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")

                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[5].fichasRellenas
                  arrayPucheros[5].fichasRellenas = 0;
                
              }
             break;
        
             case 9:
              
              if(arrayPucheros[6].fichasRellenas > 0){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")

                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[6].fichasRellenas
                  arrayPucheros[6].fichasRellenas = 0;
                
              }
             break;
        
             case 10:
              
              if(arrayPucheros[7].fichasRellenas > 0){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")

                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[7].fichasRellenas
                  arrayPucheros[7].fichasRellenas = 0;
                
              }
             break;
        
             case 11:
              
              if(arrayPucheros[8].fichasRellenas > 0){
                console.log("El jugador " + array[primerT].name + " se lleva las fichas!")

                  array[primerT].fichasObtenidas = array[primerT].fichasObtenidas + arrayPucheros[8].fichasRellenas
                  arrayPucheros[8].fichasRellenas = 0;
                
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
              fichasa0();
              console.log("El jugador " + array[primerT].name + " se ha llevado todas las fichas del tablero!")
             break;
         } //fin switch
         primerT++;
         if(primerT == array.length){
          primerT = 0;
        }
    
        actualizarInfo(); 
         comprobarFin();
              console.log(" ")
              console.log(" ")
              if(finPartida != true){
                pintarTurno(primerT);
              }
              


        }
  
        


        
      

        
      }
      if(finPartida == true){
        for (let i = 0; i < array.length; i++) {
          array[i].fichasRecibidas = fichas;
          array[i].fichasObtenidas = 0;
        }
        puchero7.fichasRellenas = 0;
        for (let i = 0; i < arrayPucheros.length; i++) {
          arrayPucheros[i].fichasRellenas = 0;
        }
        finPartida = false;
        rondaFinal = false;
        rondaF = false;
        
      }



});
        process.stdin.setRawMode(true);
        }

        function elegirGanador(){
          let arrayWiner = [...array]
        arrayWiner.sort( compare );
           let arrW= arrayWiner[0].fichasObtenidas;
           let texto = ""
      
        for (let i = 0; i < arrayWiner.length; i++) {
          if(arrayWiner[i].fichasObtenidas== arrW){
            texto += arrayWiner[i].name + ","
          }
        }
        console.log("El ganador es " + texto);
        return true;
        }
        function comprobarFin(){
          if(puchero7.fichasRellenas == 0 && arrayPucheros[0].fichasRellenas == 0 && arrayPucheros[1].fichasRellenas == 0 && arrayPucheros[2].fichasRellenas == 0 
            && arrayPucheros[3].fichasRellenas == 0 && arrayPucheros[4].fichasRellenas == 0 && arrayPucheros[5].fichasRellenas == 0
            && arrayPucheros[6].fichasRellenas == 0 && arrayPucheros[7].fichasRellenas == 0 && arrayPucheros[8].fichasRellenas == 0 ){
              console.log("No quedan mas fichas en el tablero!")
               elegirGanador();
               finPartida = true;
               console.log("--------------------")
               console.log("--------------------")
               console.log("Fin de la partida!")
               console.log("Si deseas volver a jugar solo dale al espacio y empezara una nueva partida")
               console.log("con las mismas caracteristicas!")
               console.log("--------------------")
               console.log("--------------------")
            }
          
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
        
        function fichasa0() {
          for (let i = 0; i < arrayPucheros.length; i++) {
            arrayPucheros[i].fichasRellenas = 0;
            
          }
          
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


      function pintarTurno(primerT){
        console.log("Es el turno de " + array[primerT].name)
      }
      function  actualizarInfo() {
        console.log("")
        console.log("Records:")
        pintarJugadores();
        pintarPuchero();
      }

      function pintarJugadores() {
        let copyOfArray = [...array]
        copyOfArray.sort( compare );
        for (let i = 0; i < array.length; i++) {
          console.log(copyOfArray[i].name + "= Fichas: " + copyOfArray[i].fichasRecibidas + "/ Puntos:" + copyOfArray[i].fichasObtenidas)
          
      }
      }
      function pintarPuchero() {
        console.log("Puchero: Fichas= " + puchero7.fichasRellenas)
        for (let i = 0; i < 9; i++) {
          console.log("Casilla " + arrayPucheros[i].fichasCapacidad + ":" + arrayPucheros[i].fichasRellenas + "/" + arrayPucheros[i].fichasCapacidad)
          
      }
      }
      


}






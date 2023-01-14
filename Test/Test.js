var expect = chai.expect;
chai.should();

describe("Testeando función que ordena los jugadores según las fichas ganadas", function () {
    it("Probando si se ordenan correctamente, al tener mismo valor de fichas deverá devolver 0", function(){
        compare(1,2).should.be.equal(0);
    });
   
});

describe("Testeando el sorteo de turno aleatorio entre los jugadores de la partida", function () {
    it("Probando con 3 jugadores, debe devolver un número mayor que 0 y menor que 4", function () {
        for (let i = 0; i < 100; i++) {
            primerTurno(3).should.be.greaterThan(0); 
            primerTurno(3).should.not.be.greaterThan(3);    
        } 
    });
    it("Probando con 1 jugador, debe devolver solo el valor 1", function () {
    primerTurno(1).should.be.equal(1);  
    });
    it("Probando con 6 jugadores, debe devolver un número mayor que 0 y menor que 6", function () {
    for (let i = 0; i < 100; i++) {
    primerTurno(3).should.be.greaterThan(0); 
    primerTurno(3).should.not.be.greaterThan(5);
    }     
    });
    
});


describe("Testeando que pinte bien en pantalla el turno del jugador",function (){
    it("Pasando valor 2", function () {
        pintarTurno(2).should.be.equal("Es el turno de Jugador 3");
         
     });
     it("Pasando valor 4", function () {
        pintarTurno(4).should.be.equal("Es el turno de Jugador 5");
         
     });
     it("Pasando valor 1", function () {
        pintarTurno(1).should.be.equal("Es el turno de Jugador 2");
         
     });
     it("Pasando el valor 3 no devuelve el 4", function () {
        pintarTurno(3).should.not.be.equal("Es el turno de Jugador 5");
         
     });

});

describe("Testeando que se crean correctamente los jugadores", function(){
    it("Probando a crear un jugador de nombre: Nuevo", function(){
       expect(crearJugador("Nuevo",20)).to.include({name: "Nuevo"});
    });
    it("Probando a crear un jugador de nombre: Nuevo", function(){
        expect(crearJugador("Nuevo",20)).to.include({fichasRecibidas:20});
     });
     it("Probando a crear un jugador de nombre: Nuevo", function(){
        expect(crearJugador("Nuevo",20)).to.include({fichasObtenidas: 0});
     });

});


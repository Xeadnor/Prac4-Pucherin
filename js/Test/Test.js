var expect = chai.expect;
chai.should();

describe("Testeando función que ordena los jugadores según las fichas ganadas", function () {
    it("Probando si se ordenan correctamente, al tener mismo valor de fichas deverá devolver 0", function(){
        compare(1,2).should.be.equal(0);
    });
   
});

describe("Testeando el sorteo de turno aleatorio entre los jugadores de la partida", function () {
    it("Probando con 3 jugadores, debe devolver un número mayor que 0 y menor que 4", function () {
       for (let i=0; i<10; i++){
        primerTurno(3).should.be.greaterThan(0);
        primerTurno(3).should.not.be.greaterThan(3);
       }
        
    });
});


describe("Testeando que pinte bien en pantalla el turno del jugador",function (){
    it("Pasando valor 2", function () {
        pintarTurno(2).should.be.equal("Es el turno de Jugador 3");
         
     });

});

describe("Testeando que se crean correctamente los jugadores", function(){
    it("Probando a crear un jugador de nombre: Nuevo", function(){
       expect(crearJugador("Nuevo",20)).to.include({name: "Nuevo"});
    });

});


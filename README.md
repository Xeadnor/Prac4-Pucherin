# Práctica 4- El juego del Pucherín

<a href="https://xeadnor.github.io/Prac4-Pucherin/">Haz click aqui para poder jugar!</a>

<h1>Caracteristicas y reglas</h1>
Bienvenido a nuestro Pucherin! este se trata de un juego de 2 a 6 personas y gana el que mas fichas tenga al final. Antes de empezar a jugar veamos como es la preparacion del juego.

<p></p>
<p>En el primer turno de la partida se decidirá el juagdor que comienza a jugar de forma aleatoria entre los jugadores.</p>
Cada jugador en su turno tirará dos dados de 6 caras cada uno.

<ul>
<li>Si una casilla se completa, el jugador se lleva todas las fichas de la casilla.</li>
<li>Si sacas un 7, se añade una ficha al puchero</li>
<li>Si sacas un 12, te llevas el contenido del puchero y no pones ficha</li>
<li>Si ninguno de los jugadores tiene más fichas que poner, se llevan las fichas que queden en la casilla correspondiente a la tirada de sus dados</li>
<li>Si ninguno de los jugadores tiene más fichas que poner y se saca un 12, el jugador que lo saque se lleva todas las fichas del tablero, incluido el puchero y finaliza el juego.</li>
</ul>

<h2>Fases del juego</h2>
Habrá una primera fase en la cual los jugadores irán usando sus fichas para rellenar las casillas.
Una vez se queden estos sin fichas se pasará a la segunda fase del juego, en la cual se seguirá tirando el dado y se cojerán las fichas restantes en la casilla que haya salido.

<p>El juego finaliza cuando todos los jugadores han puesto sus fichas y no quedan en el tablero.</p>
El ganador es el jugador con mas fichas.

<h2>Información</h2>
En este  juego contamos con un puchero, 9 casillas correspondientes a los números 2 a 6 y 8 a 11, dos dados, y fichas dadas a cada jugador al inicio de la partida.
Por cada turno se tirarán los dados, y según el número que salga de puntos se pone una ficha en la casilla del número que salga. Por ejemplo: se tiran los dados y sale un 4, se pondrá una ficha en la casilla 4.
<p></p>
Cuando se de el caso de que las casillas estén llenas (Ejemplo: se pone una cuarta ficha en la casilla número 4), el jugador que la haya llenado con la última ficha, se llevará todas las que contenga, quedando ésta otra vez vacía.
<p></p>
Cada vez que a tirada de dados sume 7, el jugador del que sea el turno pondrá una ficha en el puchero (casilla central con el número 7) y pasará el turno al siguiente jugador.
<p></p>
Si al tirar el jugador los dados sumasen 12, se quedaría con todas las fichas que se han ido almacenando en el puchero, además de que no es necesario gastar ninguna ficha propia.
<p></p>
Para teminar el juego se procederá de la siguiente manera:
Cuando no queden más fichas disponibles para poner, el jugador a quién el caiga en suerte el número que sea, retirará de la casilla correspondiente a la tirada de dados todas las fichas que hubiese colocadas en ella, salvo que la tirada sume 7. Si durante este transcurso le saliera al jugador una tirada que sume 12, retiraría todas las fichas que se hallen en todas las casillas, incluidas las del puchero, dandose por termianda la partida.

<h2>Caracteristicas propias</h2>
Una vez entre al videojuego, podra elegir varias opciones. Se podrá elegir el nñumero de jugadores de la partida entre 2 y 6. Otra opción a escoger es la duración de la partida, esta opción afectará al número de fichas que se le da a cada jugador, (30,40 o 50) y dos opciones gráficas, una versión en texto más simple la cual simplemente consta de toda la informacion necesaria y un log donde se va haciendo la partida, y la versión con interfaz gráfica, la cual cuenta con sonidos, animaciones, un tablero visible que se actualiza a medida que se juega. 
Hay una tercera version disponible, la cual es para ejecutarse en nodejs desde el propio visual studio si se desea, ésta usa el fichero jugarTexto.js.

<h2>Tests</h2>
El proyecto cuenta con una carpeta llamada "Test" en la cual se han realizado pruebas para confirmar y garantizar el funcionamiento correcto de las funciones usadas para jugar al pucherin, para poder correr estos estos test, simplemente es necesario descargar el repositorio y ejecutar "indexTest.html" ya que estamos usando mocha.

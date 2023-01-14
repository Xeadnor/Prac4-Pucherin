
var container = document.querySelector(".box");
const casillas = 9;

// crear puchero
 var puchero = document.createElement('canvas');
 puchero.classList.add('puchero');
/* puchero.width = 120;
 puchero.height = 120;*/
 container.appendChild(puchero);
 pintarPuchero(puchero);
//Crear elementos canvas para las casillas -->
// Usar un bucle for para crear los elementos de manera automática -->

// Los canvas se formarán en una elipse  -->
for (var i = 0; i < casillas; i++) {
  // Crear un elemento canvas
  var canvas = document.createElement('canvas');
  canvas.classList.add('casilla');
  // Establecer el ancho y alto del canvas en 50 (cada canvas será de 50 x 50)
  /*canvas.width = 120;
  canvas.height = 120;*/
  canvas.id ="canvas" + [i];
  // Añadir el canvas a la página
  container.appendChild(canvas);
  
}

// Obtener una referencia a todos los elementos canvas en la página
var canvases = document.querySelectorAll('.casilla');
window.addEventListener("load",pintarElipse)

function pintarElipse(array){
  // Dibujar una elipse en cada canvas y posicionarlos en una elipse de 
  for (var i = 0; i < canvases.length; i++) {
    // Obtener el contexto del canvas en 2D
    var ctx = canvases[i].getContext('2d');

    // Dibujar una elipse en el canvas
    ctx.beginPath();  
    
    //ctx.ellipse(35, 35, 35, 35, 0, 0, 2 * Math.PI);
    //ctx.stroke();

    // Posicionar el canvas en la elipse 
        canvases[i].style.left = Math.cos(2 * Math.PI * i / casillas) * calcularElipseLeftA() + calcularElipseLeftB() - 25 + 'px';
        canvases[i].style.top = Math.sin(2 * Math.PI * i / casillas) * 200 + calcularElipseTop()  - 25  + 'px';
    
    if (i>4) pintarCasilla(canvases[i],i+3)
    else pintarCasilla(canvases[i],i+2)
    
  }
}

function repintarElipse(array){
  // Dibujar una elipse en cada canvas y posicionarlos en una elipse de 
  for (var i = 0; i < canvases.length; i++) {
    // Obtener el contexto del canvas en 2D
    var ctx = canvases[i].getContext('2d');

    // Dibujar una elipse en el canvas
    ctx.beginPath();  
    
    //ctx.ellipse(35, 35, 35, 35, 0, 0, 2 * Math.PI);
    //ctx.stroke();

    // Posicionar el canvas en la elipse 
        canvases[i].style.left = Math.cos(2 * Math.PI * i / casillas) * calcularElipseLeftA() + calcularElipseLeftB() - 25 + 'px';
        canvases[i].style.top = Math.sin(2 * Math.PI * i / casillas) * 200 + calcularElipseTop()  - 25  + 'px';
    
    if (i>4) pintarCasilla(canvases[i],i+3,array[i].fichasRellenas)
    else pintarCasilla(canvases[i],i+2,array[i].fichasRellenas)
    
  }
}

function calcularElipseLeftA(){ //ampliar la elipse o hacerla más redondeada
  if (window.innerWidth>=1300){
    return 300
  } else if(window.innerWidth>=1120){
    return 250
  }else if(window.innerWidth>=992){//para tamaño L, xl y xxl
    return 200
  }else if(window.innerWidth>=768){//para tamaño M
    return 300
  }else if(window.innerWidth>=576){//para tamaños s
    return 200
  }else if(window.innerWidth>=437){//para tamaños s
    return 150
  }else if(window.innerWidth>=376){//para tamaños s
    return 120
  }else{//para tamaños XS
    return 100
  }
}
function calcularElipseLeftB(){ //posicionar la elipse más hacia la izquierda o hacia la derecha
  if(window.innerWidth>=1070){//para tamaño L, xl y xxl
    return 320
  }else if(window.innerWidth>=992){//para tamaño M
    return 250
  }else if(window.innerWidth>=926){//para tamaño M
    return 400
  }else if(window.innerWidth>=876){//para tamaño M
    return 350
  }else if(window.innerWidth>=826){//para tamaños s
    return 300
  }else if(window.innerWidth>=806){// para tamaños S
    return 280
  }else if(window.innerWidth>=786){//para tamaños xs
    return 260
  }else if(window.innerWidth>=775){//para tamaños xs
    return 250
  }else if(window.innerWidth>=665){//para tamaños xs
    return 280
  }else if(window.innerWidth>=596){//para tamaños xs
    return 210
  }else if(window.innerWidth>=526){//para tamaños xs
    return 190
  }else if(window.innerWidth>=505){//para tamaños xs
    return 170
  }else if(window.innerWidth>=486){//para tamaños xs
    return 150
  }else if(window.innerWidth>=465){//para tamaños xs
    return 130
  }else if(window.innerWidth>=437){//para tamaños xs
    return 125
  }else if(window.innerWidth>=398){//para tamaños xs
    return 120
  }else if(window.innerWidth>=358){//para tamaños xs
    return 110
  }else if(window.innerWidth>=347){//para tamaños xs
    return 100
  }else if(window.innerWidth>=327){//para tamaños xs
    return 80
  }else{
    return 90
  }
}

function calcularElipseTop(){//posicionar la elipse más hacia arriba o hacia abajo
  if(window.innerWidth>=1200){//para tamaños xl y xxl
   return 300
  }else if(window.innerWidth>=992){//para tamaño L
    return 300
  }else if(window.innerWidth>=768){//para tamaño M
    return 650
  }else if(window.innerWidth>=576){//para tamaño M
    return 650
  } else if(window.innerWidth>=445){//para tamaño M
    return 650
  } else{//para tamaños S y XS
    return 700
  }
}

function pintarCasilla(canvas, fichas, num){

  
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 65, 0, 2 * Math.PI);
  ctx.fillStyle = 'orange';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'teal';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, 2 * Math.PI);
  ctx.fillStyle = 'orange';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();



  for (var i = 0; i < fichas; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i / fichas) * 42 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i / fichas) * 42 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
      if (i < num ) ctx.fillStyle = 'green'
         else ctx.fillStyle = 'white'
      ctx.fill();
    
     ctx.fillStyle = 'red';
    // Establecer la fuente para el texto
     ctx.font = '35px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(fichas).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(fichas, x, y);
  }
  
}

function pintarPuchero(canvas){
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 65, 0, 2 * Math.PI);
  ctx.fillStyle = 'teal';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'orange';
  ctx.fill();

 

  for (var i = 0; i < 4; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i /4) * 35 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i /4) * 35 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 3 * Math.PI);
     
      ctx.fillStyle = 'teal'

      ctx.fill();
    
    
     ctx.fillStyle = 'white';
    // Establecer la fuente para el texto
     ctx.font = '35px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(7).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(7, x, y);
  }
  
}

// pintamos fichas aleatorias en el tablero
/*for(let i=0; i < canvases.length; i++){
  let fichas = Math.ceil(Math.random()*(i+2));
  pintarCasilla(canvases[i], i+2, fichas); 
  console.log(i+" "+(i+2)+ " "+fichas);
}*/

//pintarCasilla(canvases[2], 4, 2); // pinta dos fichas en el 4
//pintarCasilla(canvases[8], 11, 5); // pinta 5 fichas en el 11
//pintarCasilla(canvases[6], 9, 3); // pinta 3 fichas en el 9
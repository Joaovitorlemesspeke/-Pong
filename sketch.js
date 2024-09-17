//variaveis bolinha
let Xbolinha=200;
let Ybolinha=200;
let diametro=30;

let velocidadeXbolinha=6;
let velocidadeYbolinha=3;

//variaveisminharaquete
let Xraquetejogador=5;
let Yraquetejogador=15;
let alturaraquetejogador=10;
let larguraraquetejogador=90;




function setup() {
  createCanvas(400, 400);
}


function draw() {
  background("black");
mostrabolinha();
movimentabolinha();
verificacolisao();
mostraraquetejogador();
movimentaraquetejogador();

}

function mostrabolinha() {
fill('blue');
  circle(Xbolinha,Ybolinha,diametro);
  
  
 } 
  
function movimentabolinha() {
  Xbolinha+= velocidadeXbolinha;
  Ybolinha+= velocidadeYbolinha;
}





function verificacolisao(){
if(Xbolinha>width||Xbolinha<0){
  velocidadeXbolinha *= -1;
}
if(Ybolinha>height||Ybolinha<0){
  velocidadeYbolinha *= -1;
}
  
  
  
  
  
  
} 

function mostraraquetejogador() {
fill('blue');
stroke('red')
  
  rect(Xraquetejogador,
Yraquetejogador,alturaraquetejogador,larguraraquetejogador);

}
function movimentaraquetejogador(){

if(keyIsDown(UP_ARROW)){
 Yraquetejogador-=10;}
  
 if(keyIsDown(DOWN_ARROW)){
 Yraquetejogador+=10;} 
}



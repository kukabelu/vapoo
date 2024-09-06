//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;     
let diametro = 20;
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;
let raio = diametro/2;

//variáveis das raquetes 
let xRaquete = 10;
let yRaquete = 125;
let alturaRaquete = 100;
let larguraRaquete = 10;
let xRaqueteOponente = 580;
let yRaqueteOponente = 125;

//variáveis do placar
let meusPontos = 0;
let pontoOponente = 0;

function setup() {
  createCanvas(600, 400);
  //background(0);
}

function draw() {
 background(0);
  bolinha();
  velocidadeBolinha();
  colisaoBolinhaBorda();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  colisaoMinhaRaquete();
  colisaoRaqueteOponente();
  criaPlacar();
  marcaPontos();
}

function bolinha(){
  fill(255);
  circle(xBolinha,yBolinha,diametro);
}

function velocidadeBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinhaBorda(){
  if(xBolinha+raio>width||xBolinha-raio<0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha+raio>height||yBolinha-raio<0){
   velocidadeYBolinha *= -1; 
  }
 }

function mostraRaquete(x,y){
  //fill("blue")
  rect(x,y,larguraRaquete,alturaRaquete);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete += -10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(65)){
    yRaqueteOponente += -10;
  }
  if(keyIsDown(90)){
    yRaqueteOponente += 10;
  }
}

function colisaoMinhaRaquete(){
  if(xBolinha - raio < xRaquete + larguraRaquete && yBolinha -raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function colisaoRaqueteOponente(){
  if(xBolinha + raio > xRaqueteOponente - larguraRaquete && yBolinha - raio < yRaqueteOponente + alturaRaquete && yBolinha + raio > yRaqueteOponente){
    velocidadeXBolinha *= -1;
  }
}

function criaPlacar(){
  textAlign(CENTER);
  textSize(16);
  fill(color(255,69,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos,170,25);
  
  fill(color(255,69,0));
  rect(450,10,40,20);
  fill(255);
  text(pontoOponente,470,25);
  }

function marcaPontos(){
  if(xBolinha<10){
    pontoOponente += 1;
  }
  if(xBolinha>590){
    meusPontos += 1;
  }
}

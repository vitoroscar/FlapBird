function setup(){
  createCanvas(800, 600);
}

function draw(){
  background(88, 178, 255);
    //passaro.js
  mostraPassaro();
  movimentaPassaro();
  descePassaro();
  acabouATela();
  voltaPosicaoInicialDoPassaro();
  verificaColisao();
  //cenario.js
  mostraCanos();
  movimentaCanos();
  acabouATelaCanos();
  voltaCanos();
  movimentaCanos();
}
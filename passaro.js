var xPassaro = 125
var yPassaro = 250
var velocidadeDescidaPassaro = 1.5
var colisao = false

function mostraPassaro(){
  image(imagemDoPassaro, xPassaro, yPassaro, 100, 100)
}

function movimentaPassaro(){
  if (keyIsPressed === true){
    yPassaro -= 4;
  }
}

function descePassaro(){
  yPassaro += velocidadeDescidaPassaro
}

function voltaPosicaoInicialDoPassaro(){
  if(acabouATela(yPassaro)){
    yPassaro = 250;
  }
}

function acabouATela(yPassaro){
  return yPassaro > 540
}

function verificaColisao(){
  for (let i = 0; i < imagemCanos.length; i++){
    colisao = collideRectCircle(xCanos[i], yCanos[i], comprimentoCanos, alturaCanos, xPassaro, yPassaro, 150)
    if (colisao){
       yPassaro = 250;
    }    
  }
}
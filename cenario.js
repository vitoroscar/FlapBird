var xCanos = [600, 600]
var yCanos = [350, 0]
var velocidadeCanos = [2, 2]
var comprimentoCanos = 85
var alturaCanos = 250


function mostraCanos(){
  for (let i = 0; i <imagemCanos.length; i++){
    image(imagemCanos[i], xCanos[i], yCanos[i], comprimentoCanos, alturaCanos);
  }
}

function movimentaCanos(){
  for (let i = 0; i < imagemCanos.length; i++){
    xCanos[i] -=velocidadeCanos[i]    
  }
}

function voltaCanos(){
  for (let i = 0; i < imagemCanos.length; i ++){
    if (acabouATelaCanos(xCanos[i])){
      xCanos[i] = 825;
    }
  }
}

function acabouATelaCanos(xCanos){
  return xCanos < -75
}

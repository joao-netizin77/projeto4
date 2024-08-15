let palavra;
let musica;
let imagem;

function setup() {
  createCanvas(1000, 800);
  palavra = leite();
  musica.loop();
}

function preload(){
  imagem = loadImage("foto.jpg");
  musica = loadSound("musica.mp3");
}


function draw() {
  chocolate();
  leite();
 
  let maximo = width;
  let minimo = 0; 
  
  let aparecer = map(mouseX, 0, width, 1,palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 500, 400);
}

function chocolate(){
  background("darkblue");
  image(imagem,0,0,1000,800)
  fill("lightblue");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function leite(){
   let palavras = ["neymar", "guilherme scabora", "mcqueen", "tigrinho"];
  return random(palavras);
}
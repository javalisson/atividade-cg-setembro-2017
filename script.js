/**
 * p5js atividade setembro
 * 
 * ******** SEU NOME AQUI ********
 * 
 */

// 
var pos_terra = null, 
	pos_nave = null;

// 
var angulo = 0;

// 
var img_nave, 
	img_terra, 
	img_estrelas, 
	img_raio;

// 
var texto = "Controle de solo para o Major Tom";

// 
var fonte;

// 
var musica;

// 
function preload() {
	// 
	img_estrelas = loadImage('estrelas.jpg');
	img_terra = loadImage('terra-grande.png');
	img_nave = loadImage('nave-150-por-75-px.png');
	img_raio = loadImage('raio.png');

	//
	fonte = loadFont('cocogoose-letterpress.ttf');

	// 
	soundFormats('mp3');

	//
	musica = loadSound('musica.mp3');
}

// 
function setup() {
	// 
	createCanvas(960, 500);

	// 
	noCursor();

	// 
	toca_musica();

	// 
	pos_terra = createVector(width/2, height/4);

	// 
	pos_nave = createVector(0, 0);
}

// 
function draw() {
	// 
	background(img_estrelas);

	// 
	desenha_terra(pos_terra.x, pos_terra.y);

	// 
	desenha_nave(pos_nave.x, pos_nave.y)

	// 
	desenha_texto();

	// 
	desenha_raio();

}

// 
function desenha_terra(x, y) {
	// 
	push();
	// 
	translate(450 + 400, 140 + 395);
	// 
	rotate(angulo);
	// 
	angulo += 0.01 * PI/64;
	// 
	image(img_terra, -400, -395);
	// 
	pop();
}

// 
function desenha_nave(x, y) {
	// o tamanho original da imagem eh 150 x 75
	image(img_nave, x - 75, y - 38);
}

// 
function toca_musica() {
	// 
	musica.setVolume(1.0);
	// 
	musica.loop();
}

// 
function desenha_texto() {
	// 
	textFont(fonte);

	// 
	textSize(32);

	// 
	fill(255);

	// 
	text(texto, 300, 50);
}

// 
function desenha_raio() {
	// 
	image(img_raio, 0, 0);
}

// 
function mouseMoved() {
	// 
	if (pos_nave != null) {
		// 
		pos_nave.x = mouseX;
		// 
		pos_nave.y = mouseY;
	}
}

// 
function mousePressed() {
	// 
	console.log('O mouse foi pressionado na posicao (' + mouseX + ', ' + mouseY + ')');
	//
	console.error('Seu circuito pifou, tem algo errado');
	// 
	console.warn('Está me ouvindo, Major Tom?');
	// 
	console.info('Aqui estou eu, flutuando em volta da minha lata, bem acima da lua');
}
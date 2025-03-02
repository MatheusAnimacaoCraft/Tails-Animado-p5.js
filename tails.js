function setup() {
  createCanvas(1200, 500);
  background('#1e95f1');
}

function draw() {
  background('#1e95f1'); // Para evitar sobreposição ao redesenhar
  noStroke();

  olhoX = map(mouseX,0,761,475,524)
  olhoY = map(mouseY,0,400,215,277)


  // Cabeça
  fill('#eff701');
  ellipse(555, 240, 280, 300);
  //circle(550, 250, 350);
  
  // Olhos (parte branca)
  fill('#ffffff');
  ellipse(500, 250, 90, 150); // Olho esquerdo
  ellipse(610, 250, 90, 150); // Olho direito

  // Pupilas (pretas)
  fill('#000000');
  ellipse(olhoX, olhoY, 35, 80); // Pupila do olho esquerdo
  ellipse(olhoX +100, olhoY, 35, 80); // Pupila do olho direito

  // Brilho nos olhos (detalhes brancos)
  fill('#ffffff');
  ellipse(490, 240, 10, 20); // Reflexo olho esquerdo
  ellipse(600, 240, 10, 20); // Reflexo olho direito

  // Boca (área branca)
  fill('#ffffff');
  ellipse(550, 350, 240, 130); // Região branca ao redor da boca
  // Cabeça
  
  fill('#000000');
  ellipse(540, 381, 29, 22);
  fill('#F44336');
  ellipse(540, 381, 27, 20);


  // Sorriso (linha preta)
  stroke(0);
  strokeWeight(4);
  noFill();
  //arc(550, 360, 120, 80, 0, PI); // Desenha um sorriso curvado

  // Nariz
  noStroke();
  fill('rgb(0, 0, 0)');
  triangle(557, 302, 537, 320, 573, 324);

  // Orelhas
  fill('#eff701');
  //triangle(356, 35, 373, 222, 523, 74);
  triangle(417, 72, 545, 91, 415, 235);
  //triangle(711, 5, 592, 76, 708, 180);
  triangle(718, 78, 593, 96, 692, 225);

  // Parte interna das orelhas
  fill('#ffffff');
  triangle(465, 304, 379, 288, 434, 328);
  triangle(439, 326, 387, 322, 432, 362);
  triangle(432, 359, 387, 362, 447, 384);
  
  triangle(650, 314, 714, 304, 668, 347);
  triangle(670, 343, 717, 361, 658, 379);
  triangle(653, 379, 688, 404, 630, 398);
  
  //triangle(366, 48, 378, 198, 502, 78);
  triangle(424, 78, 529, 96, 428, 187);
  //triangle(703, 19, 699, 158, 610, 73);
  //triangle(703, 19, 699, 158, 610, 73);
  triangle(706, 88, 596, 108, 684, 202);
  
  //cabelo
  fill('#F7E301');
  triangle(641, 25, 554, 98, 579, 109);
  triangle(741, 95, 583, 109, 596, 127);
  triangle(598, 137, 741, 171, 589, 151);

  olhoX = map(mouseX,0,761,475,100)
  olhoY = map(mouseY,0,400,215,277)
  
  //ellipse(olhoX,olhoY, 35, 80); // Pupila do olho esquerdo

  // Debug para pegar coordenadas
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}

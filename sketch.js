let m, m2;

function setup() {
  createCanvas(400, 400);
  m = new Mover(50, 50, 10);
  m2 = new Mover(300, 300, 50);
}

function draw() {
  background(220);
  m.update();
  m.show();

  m2.update();
  m2.show();

  if (mouseIsPressed) {
    let mousePos = createVector (mouseX,mouseY);
      m.attractTo(mousePos);
      m2.attractTo(mousePos);

  // let f = p5.Vector.sub(mousePos, m.pos); //마우스를 향하는 방향의 벡터 구하는 코드
  // f.limit(5); //너무 빨라서 리미트로 힘 크기 제한
  // m.applyForce(f);
  //   //make attract to mouse position
  //
  // let f2 = p5.Vector.sub(mousePos, m2.pos);
  // f.limit(7);
  // m2.applyForce(f2);
  }
}

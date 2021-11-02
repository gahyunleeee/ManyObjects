let m, m2;
let movers = [];

function setup() {
  createCanvas(400, 400);
  m = new Mover(50, 50, 10);
  m2 = new Mover(300, 300, 50);

for (let i=0; i<5; i++) {
  let mover = new Mover(random(400),random(400),random(5,500),) //이 변수는 이 안에서만 적용됨
  movers.push(mover);
}

}

function draw() {
  background(220);
  // for (let i=0; i<movers.length; i++) {
  //   let mover = mevers[i];
  //   mover.upadate();
  //   mover.show();
  // }
  //아래 for구문이랑 똑같은 의미임

for (let mover of movers) {
  mover.upadate();
  mover.show();
}


  if (mouseIsPressed) {
    let mousePos = createVector (mouseX,mouseY);

    for (let mover of movers) {
      mover.attractTo(mousePos);
    }


  }
}

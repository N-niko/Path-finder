var l = 20;
var b, pf;
var bp, sp;

let FB = false;

function setup() {
  createCanvas(floor (window.innerWidth * 0.6 / l) * l, floor (window.innerHeight * 0.8 / l) * l);
  
  bp = { x: 2, y: floor (height / l / 2) }; 
  sp = { x: width / l - 3, y: floor (height / l / 2) };
  
  b = new Board ();
  pf = new PathF ();
  
  ns.push ({ x: bp.x, y: bp.y });
  
 // frameRate (2);
}

function draw() {
  background(220);
  
  b.show ();
  
  if (FB)
    pf.find ();

}



function UF (x) {
  return floor (x * 10) / 10;
}


let X, Y;
let bl;
mousePressed = function () {
  if (mouseX >= width || mouseY >= height || mouseX < 0 || mouseY < 0) return;
  
  X = (mouseX - mouseX % l) / l;
  Y = (mouseY - mouseY % l) / l;
  if (b.b[X][Y].n == -1)
    bl = false;
  else if (b.b[X][Y].n == 0)
    bl = true;
  
  if (bl) {
    if (!b.b[X][Y].n)
      b.b[X][Y] = new Square (X, Y, -1);
  }
  else 
    if (b.b[X][Y].n == -1)
      b.b[X][Y] = new Square (X, Y, 0);
}

mouseDragged = function () {
    if (mouseX >= width || mouseY >= height || mouseX < 0 || mouseY < 0) return;
  
  X = (mouseX - mouseX % l) / l;
  Y = (mouseY - mouseY % l) / l;
  
  if (bl) {
    if (!b.b[X][Y].n)
      b.b[X][Y] = new Square (X, Y, -1);
  }
  else 
    if (b.b[X][Y].n == -1)
      b.b[X][Y] = new Square (X, Y, 0);
    
}

b0 = document.getElementById ("b0");
b1 = document.getElementById ("b1");
b2 = document.getElementById ("b2");
r = document.getElementById ("r");
er = document.getElementById ("er");

b0.addEventListener('click', () => {
    be = 1;
    dj = 1;
    FB = true;
    b0.disabled = true;
    b1.disabled = true;
    b2.disabled = true;
});

b1.addEventListener('click', () => {
    be = 1;
    dj = 0;
    FB = true;
    b0.disabled = true;
    b1.disabled = true;
    b2.disabled = true;
});

b2.addEventListener('click', () => {
    be = 0;
    dj = 1;
    FB = true;
    b0.disabled = true;
    b1.disabled = true;
    b2.disabled = true;
});

r.addEventListener('click', () => {
    b = new Board ();
    pf = new PathF ();
    FB = false;
    b0.disabled = false;
    b1.disabled = false;
    b2.disabled = false;
  
    ns.push ({ x: bp.x, y: bp.y });
});

er.addEventListener('click', () => {
    
    let blocks = []
    for (let y in b.b) {
        for (let x in b.b[y]) {
            if (b.b[y][x].n == -1) {
                blocks.push ({ x: x, y: y });
            }
        }
    }

    b = new Board ();
    pf = new PathF ();

    for (block of blocks) {
        b.b[block.y][block.x] = new Square (block.y, block.x, -1);
    }

    FB = false;
    b0.disabled = false;
    b1.disabled = false;
    b2.disabled = false;
  
    ns.push ({ x: bp.x, y: bp.y });
});


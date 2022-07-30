
class Square {
  
    constructor (x, y, n = 0, a = 1, px = undefined, py = undefined, path = undefined) {
      if (px != undefined)
        this.par = { x: px, y: py };
      this.path = path;
      this.x = x;
      this.y = y;
      this.n = n;
      if (n == 3 || n == 5) {
        this.G = sqrt (sq (bp.x - x) + sq (bp.y - y));
        this.H = sqrt (sq (sp.x - x) + sq (sp.y - y));
        this.F = this.H * dj + this.path * be;
        this.a = a;
      }
      if (n == 1) {
        this.G = sqrt (sq (bp.x - x) + sq (bp.y - y));
        this.H = sqrt (sq (sp.x - x) + sq (sp.y - y));
        this.F = this.H * dj + this.path * be;
      }
    }
    
    show () {
      push ();  
      
      if (!this.n) 
        fill (235, 250, 250);
      else if (this.n == 1) 
        fill ('lightGreen');
      else if (this.n == 2)
        fill (120, 30, 150);
      else if (this.n == 3) 
        if (this.a == 0)
          fill (65, 125, 115);
        else
          fill (70, 210, 200);
      
      else if (this.n == 5)
        fill (10, 255, 110);
      else if (this.n == 10) 
        fill (150, 10, 0);
      else if (this.n == -1)
        fill (20);
      
      strokeWeight (0.3);
      square (this.x * l, this.y * l, l);
      
      stroke ('red');
      strokeWeight (0.1);
      translate (l / 2, l / 2);
      if (this.par) {
        //line (this.x * l, this.y * l, this.par.x * l, this.par.y * l);
      }
      translate (-l / 2, -l / 2);
      
      let txt = this.F;
      if (true) {
        textSize (10);
        fill ('white');
        if (this.n == 5 || this.n == 1)
          fill ('black');
        
        textAlign (CENTER);
        //text (UF (txt), this.x * l + l / 2, this.y * l + l / 2);
      }
        
      pop ();
    }
    
    
  }
  
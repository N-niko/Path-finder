var ns = [];
let xc = [0, 1, 0, -1];
let yc = [-1, 0, 1, 0];
let dj = 1; // dijsktra-0 A*-1
let be = 0; // be-0 best first search

class PathF {
  

  find () {
    if (ns == undefined) 
      return;
    
    let M = 10000;
    let AM = 10000;
    let I;
    
    for (let i = 0; i < ns.length; i++) {
     if (b.b[ns[i].x][ns[i].y].F < M) {
       M = b.b[ns[i].x][ns[i].y].F;
     }
    }
    
    for (let i = 0; i < ns.length; i++) {
      if (b.b[ns[i].x][ns[i].y].F == M && (b.b[ns[i].x][ns[i].y].H < AM || dj)) {
        AM = b.b[ns[i].x][ns[i].y].H;
        I = i;
        break;
      }
    }
    
    if (I != undefined) {
      this.unfold (ns[I].x, ns[I].y);
      if (ns)
        ns.splice (I, 1);
    }
    
  }
  
  unfold (x, y) {
    
    if (x == sp.x && y == sp.y) {
      this.findP (x, y);
      let sf = b.b[b.sp.x][b.sp.y];

      b.b[b.sp.x][b.sp.y] = new Square (b.sp.x, b.sp.y, 10, 1, sf.par.x, sf.par.y, sf.path);      
        
      ns = []; 
      
      return;
    }
    
    b.b[x][y].a = 0;
    
    let neig = [];
    for (let i = 0; i < xc.length; i++) {
      if ((x + xc[i]) < 0 || (y + yc[i]) < 0 || !((x + xc[i] - width / l) * (y + yc[i] - height / l)))
        continue;
      neig.push (b.b[x + xc[i]][y + yc[i]]);
    }
    
    
    for (let i = 0; i < neig.length; i++) {
      let ng = neig[i];
      
      if (ng && !ng.n || ng.n == 2 || ng.n == 3) {
        let npath = (b.b[x][y].path + 1 * (1 - dj)) * be + sqrt (sq (ng.x - x) + sq (ng.y - y)) * dj;
        
        if (ng.n == 3 && b.b[ng.x][ng.y].path < npath) {
          continue;
        }
        
        if (b.b[ng.x][ng.y].path == undefined || b.b[ng.x][ng.y].path > npath)
          b.b[ng.x][ng.y] = new Square (ng.x, ng.y, 3, 1, x, y, npath);
        /*else {
          let sf = b.b[ng.x][ng.y];
          b.b[ng.x][ng.y] = new Square (ng.x, ng.y, 3, 1, sf.par.x, sf.par.y, sf.path);
        }*/
        if (ng.n != 3)  
          ns.push ({ x: ng.x, y: ng.y });
      }
      
    }
    
  }
  
  findP (x, y) {
    
    let sf = b.b[x][y];
    b.b[x][y] = new Square (x, y, 5, 1, sf.par.x, sf.par.y, sf.path);
    //print (x, y, b.b[x][y]);
    
    if (b.b[sf.par.x][sf.par.y].par && !(sf.par.x == x && sf.par.y == y))
      this.findP (sf.par.x, sf.par.y);
    
  }
  
  
  
}





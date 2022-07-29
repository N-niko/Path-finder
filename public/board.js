
class Board {
  
    constructor () {
      this.bp = bp;
      this.sp = sp;
      this.b = [];
      
      for (let i = 0; i < width / l; i++) {
        this.b[i] = [];
        for (let j = 0; j < height / l; j++) {
          
          if (i == this.bp.x && j == this.bp.y)
            this.b[i][j] = new Square (i, j, 1, 1, i, j, 0);
          else if (i == this.sp.x && j == this.sp.y)
            this.b[i][j] = new Square (i, j, 2);
          else 
            this.b[i][j] = new Square (i, j);
          
        }
      }
      
    }
    
    
    show () {
      
      for (let i = 0; i < width / l; i++) {
        for (let j = 0; j < height / l; j++) {
          this.b[i][j].show ();
        }
      }
      
    }
    
    
  }
  
  
  
'use strict';

import {Canvas2DBase} from '../core'

class Transformations01 extends Canvas2DBase{
  constructor(){
    super();
    
    this.counter = 0;
    this.step = 1;

    this.start(this.rectAnim.bind(this));
  }

  rectAnim(){
    this.counter += this.step;
    this.rectTest(this.ctx, 20, this.counter%360)
  }

  rectTest(ctx, width=20, rotateStep=10){
    const self = this;
    for (var i = 0; i < 20; i++) {
      for (var j = 0; j < 20; j++) {
        self.ctx.save();
        self.ctx.translate(j*width*1.3 + width/2, i*width*1.3 + width/2);
        self.ctx.rotate((Math.PI/180)*j*rotateStep);
        self.ctx.translate(-width/2, -width/2);
        self.ctx.strokeRect(0, 0, width, width);
        self.ctx.restore();
      }
    }
  }
}

export default Transformations01;
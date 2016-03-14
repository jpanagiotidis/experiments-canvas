'use strict';

class Canvas2DBase{
  constructor(){
    this.canvas = Canvas2DBase.createCanvas(document.body);
    this.ctx = this.canvas.getContext('2d');
  }

  start(animationCallback){
    this.animationCallback = animationCallback;
    this.animate();
  }

  animate(){
    const self = this;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.animationCallback();
    window.requestAnimationFrame(this.animate.bind(self));
  }

  static createCanvas(elem, id="exp-canvas", width="500px", height="500px"){
    const canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    elem.appendChild(canvas);
    return canvas;
  }
}

export default Canvas2DBase;
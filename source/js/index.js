require('./tools/dom-ready.js');

let canvas, ctx;

docReady(function(){
  canvas = createCanvas(document.body);
  ctx = canvas.getContext('2d');

  // ctx.beginPath();
  // ctx.moveTo(0, 0);
  // ctx.lineTo(100, 200);
  // ctx.stroke();

  // rectTest(ctx);

  draw(ctx);
});

let counter = 0;
let step = 1;

function draw(){
  // console.log('mm')
  counter += step;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  rectTest(ctx, 20, counter%360);
  window.requestAnimationFrame(draw);
}

function createCanvas(elem, id="exp-canvas", width="500px", height="500px"){
  const canvas = document.createElement('canvas');
  canvas.id = id;
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  elem.appendChild(canvas);
  return canvas;
}

function rectTest(ctx, width=20, rotateStep=10){
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
      ctx.save();
      ctx.translate(j*width*1.3 + width/2, i*width*1.3 + width/2);
      ctx.rotate((Math.PI/180)*j*rotateStep);
      ctx.translate(-width/2, -width/2);
      ctx.strokeRect(0, 0, width, width);
      ctx.restore();
    }
  }
}
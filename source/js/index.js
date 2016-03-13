require('./tools/dom-ready.js');

docReady(function(){

  console.log('FFFd');
  initCanvas();
});

function initCanvas(){
  const canvas = document.createElement('canvas');
  canvas.id = "exp-canvas";
  canvas.setAttribute("width", "500px");
  canvas.setAttribute("height", "500px");
  document.body.appendChild(canvas);
}
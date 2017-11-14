const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
  if(!isDrawing) { //will stop the function from running when the mouse isn't down
    return;
  }
  //here is where everything is going to 'show' the drawing
  console.log(event);

  ctx.strokeStyle = `hsl(${ hue }, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); //where the mouse was last 'mouseup' (0 by default)
  ctx.lineTo(event.offsetX, event.offsetY); //where the mouse moved, takes it from the console
  ctx.stroke();
  // lastX = event.offsetX;
  // lastY = event.offsetY; can be also put in array like that:
  [lastX, lastY] = [event.offsetX, event.offsetY];
  
  hue++;
  if(hue >= 360) {
    hue = 0;
  }

  //making the line thicker and thinner, and not resetting it but reversing the direction of growth.
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}


//event listeners added to react to the mouse, changing the value of the function.
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
}); //allows to start drawing anywhere from the page, and not only from where the mouse was last up.

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


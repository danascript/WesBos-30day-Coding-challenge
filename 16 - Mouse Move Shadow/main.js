const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300;

function shadow(event) {
  //const width = hero.offsetWidth;
  //const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;

  let { offsetX: x, offsetY: y} = event;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / width * walk) - (walk / 2));

  text.style.textShadow = `${ xWalk }px ${ yWalk }px 0 rgba(255,0,255,0.6),
                           ${ xWalk }px ${ yWalk * -1 }px 0 rgba(0,255,255,0.6),
                           ${ yWalk * -1 }px ${ xWalk }px 0 rgba(0,0,255,0.6),
                           ${ xWalk * -1 }px ${ yWalk * -1 }px 0 rgba(0,0,255,0.6)`;
}

hero.addEventListener('mousemove', shadow);
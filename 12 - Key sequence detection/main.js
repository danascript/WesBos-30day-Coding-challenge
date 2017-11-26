const pressed = [];
  const secretWord = 'hello there';

  window.addEventListener('keyup', (event) =>{
    pressed.push(event.key);
    pressed.splice(-secretWord.length -1, pressed.length - secretWord.length);
    console.log(pressed);

    if(pressed.join('').includes(secretWord)) {
      window.alert('Hey back at you!');
    }
  })

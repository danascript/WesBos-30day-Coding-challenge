const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediastream => {
      video.src = window.URL.createObjectURL(localMediastream)
      video.play()
    })
    .catch(err => {
      console.error('Oh No! You need to give access to your camera!')
    })
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    //first, we take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height)
    //second, we mess with them in these functions

    //pixels = deepGreen(pixels)
    
    //pixels = rgbSplit(pixels)
    //ctx.globalAlpha = 0.5 //this one creates a 'ghosting' effect

    pixels = greenScreen(pixels)
    //third, we put them back
    ctx.putImageData(pixels, 0, 0)
  }, 16)
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play()

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'beauty')
  link.innerHTML = `<img src="${ data }" alt="An image"/>`
  strip.insertBefore(link, strip.firstChild)
}

function deepGreen(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] - 100;     //red channel
    pixels.data[i + 1] = pixels.data[i + 1] - 50;  //green channel
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue channel
    //pixels[i + 3] //alpha channel
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]  //red channel
    pixels.data[i + 100] = pixels.data[i + 1]  //green channel
    pixels.data[i + -150] = pixels.data[i + 2] //blue channel
    //pixels[i + 3] //alpha channel
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas)
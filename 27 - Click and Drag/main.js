const slider = document.querySelector('.items')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.classList.add('active')
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) => {
  if (!isDown) {
    return
  }

  e.preventDefault()
  const x = e.pageX - slider.offsetLeft
  const walk = x - startX// or you can write (x - startX) * 3 //which will multiply the walk by 3, will result in a faster scroll
  slider.scrollLeft = scrollLeft - walk
})

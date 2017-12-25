const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition((data) => {
  console.log(data)
  speed.textContent = data.coords.speed
  arrow.style.transform = `rotate(${ data.coords.heading}deg)`
}, (err) => {
  console.error(err)
  alert('Hey, you cannot use the compass without aloowing the geolocation')
})
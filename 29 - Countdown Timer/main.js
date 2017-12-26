let countDown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
  //we need to clear any existing timers when we statr a new one, since they are not going to clear themselvves until they have reached 0:00
  clearInterval(countDown)

  const now = Date.now() //a new wat instead of new Date()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    //check if it goes negative
    if (secondsLeft < 0) {
      clearInterval(countDown)
      return
    }

    //display it
    displayTimeLeft(secondsLeft)    
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60) //since we care only about full minutes, without remainders we use the Math.floor
  const remainderSeconds = seconds % 60
  const display = `${ minutes }:${ remainderSeconds < 10 ? '0' : '' }${ remainderSeconds }` // the '0' is added since the display of 4, 3 or any single digit is without a 0 in front of them
  
  document.title = display //shows the timer on the tab
  
  timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const minutes = end.getMinutes()
  endTime.textContent = `Be Back at ${ hour }:${ minutes < 10 ? '0' : '' }${ minutes }`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const mins = this.minutes.value
  timer(mins * 60)
  this.reset()
})
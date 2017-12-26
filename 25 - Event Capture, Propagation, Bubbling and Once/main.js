const divs = document.querySelectorAll('div')

function logText(e) {
  console.log(this.classList.value)
  //e.stopPropagation() 
  //the function above stops bubbling. Logs the event listener on the actually clicked
  //element (in case capture:false is stated below in the forEach, or the outer element
  //in case capture: true).
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, //bubbling, a true value will reverse the bubbling
    once: true //unbindes the event from the element. Meaning that a user can click on
    // it only once. For example at the checkout in online-shops, you don't want the user
    // to click checkout many times, only once. Here's an example with a button:
  })
)

const button = document.querySelector('button')

button.addEventListener('click', () => {
  console.log('Button is clicked!!')
}, {
  once:true
})

//check in the developer tools, the console.log appears only ONCE, as the event says.
const alertText = document.getElementById('alert-text')
const messages = [
    "New Christmas recipes available now",
    "looking for party food to see in the New Year? Click here",
    "Make a homemade treat to give for Christmas"
]

function showAlertMessages(messages, displayDuration = 8000) {
  let currentIndex = 0

  function updateMessage() {
    alertText.style.opacity ='0'

    setTimeout(() => {
      alertText.textContent = messages[currentIndex]
      alertText.style.opacity = '1'
      currentIndex = (currentIndex + 1) % messages.length
    }, 1000)
  }
  updateMessage()
  setInterval(updateMessage, displayDuration)
}

window.onload = () => {
  showAlertMessages(messages)
}


const alertText = document.getElementById('alert-text')
const messages = [
    "New Christmas recipes available now 🎅🏻",
    "looking for party food to see in the New Year? Click here 🎉",
    "Make a homemade treat to give for Christmas 🎁"
]

const heroContainer = document.getElementById('hero-container')
const heroImages = [
  {
    photo: 'assets/recipe-hero-images.png',
    text: 'Christmas recipes to WOW your guests'
  },
  {
    photo: 'assets/recipe-hero-images2.png',
    text: 'Bake your friends some Christmas Cookies'
  }
]

const showMenu = document.getElementById('show-menu')
const checkboxMenu = document.getElementById('checkbox-menu')
const closeBtn = document.getElementById('close')

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

function createHeroGallery() {
  heroContainer.style.backgroundImage = `url(${heroImages[0].photo})`
  heroContainer.innerHTML = `<h2 class="text-4xl bg-slate-100 p-4 rounded">${heroImages[0].text}</h2>`
                              
}

createHeroGallery()

showMenu.addEventListener('click', function() {
  checkboxMenu.style.height = 'auto'
  checkboxMenu.style.display = ''
})

closeBtn.addEventListener('click', function() {
  checkboxMenu.style.height = '0px'
  checkboxMenu.style.display = 'none'
})
const alertText = document.getElementById('alert-text')
const heroContainer = document.getElementById('hero-container')
const showMenu = document.getElementById('show-menu')
const checkboxMenu = document.getElementById('checkbox-menu')
const closeBtn = document.getElementById('close')

const messages = [
    "New Christmas recipes available now 🎅🏻",
    "looking for party food to see in the New Year? Click here 🎉",
    "Make a homemade treat to give for Christmas 🎁"
]

const heroImages = [
  {
    photo: 'assets/recipe-hero-images.png',
    text: 'Christmas recipes to WOW your guests'
  },
  {
    photo: 'assets/recipe-hero-image2.png',
    text: 'Bake your friends some Christmas Cookies'
  },
  {
    photo: 'assets/recipe-hero-image3.png',
    text: 'Cocktail ideas to see in the New Year'
  },
  {
    photo: 'assets/recipe-hero-image4.png',
    text: 'Traditonal Christmas Pudding to feed the family'
  }
]

// function to show text in the alert bar
function showAlertMessages(messages, displayDuration = 9000) {
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


// to produce slide show of hero images - thank you ChatGPT
let currentIndex = 0; // Tracks the current image index

function createHeroGallery(index) {
  // Temporarily remove the opacity to restart the animation
  heroContainer.style.opacity = '0';
  
  // Wait for the fade-out to complete, then update content and fade back in
  setTimeout(() => {
    heroContainer.style.backgroundImage = `url(${heroImages[index].photo})`;
    heroContainer.innerHTML = `<h2 class="text-4xl bg-slate-rgba p-4 rounded">${heroImages[index].text}</h2>`;
    heroContainer.style.opacity = "1"; // Add the fade-in class
  }, 800); // Delay matches the fade-out duration
}

function startSlideshow() {
  createHeroGallery(currentIndex); // Display the first image
  setInterval(() => {
    currentIndex = (currentIndex + 1) % heroImages.length; // Increment index and loop back
    createHeroGallery(currentIndex); // Update the hero section
  }, 12000); // 
}

// Initialize the slideshow
startSlideshow();

// Event Listeners
showMenu.addEventListener('click', function() {
  checkboxMenu.style.height = 'auto'
  checkboxMenu.style.display = 'flex'
})

closeBtn.addEventListener('click', function() {
  checkboxMenu.style.height = '0px'
  checkboxMenu.style.display = 'none'
})


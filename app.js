const navBars = document.querySelector('.fa-bars ')
const navOverlay = document.querySelector('.overlay-nav')
const navClose = document.querySelector('.nav-close')
const displayRecipes = document.getElementById('display')


// Navigation event listeners
navBars.addEventListener('click', function(){
    navOverlay.style.width = "100%"
})

navClose.addEventListener('click', function() {
    navOverlay.style.width = "0"
})


// Tasty API https://rapidapi.com/apidojo/api/tasty
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=fish';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '37b61ae7ccmshd35c9cd4d587a48p1b476cjsnf552552cf8a3',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
}

function renderRecipe(recipe) {
    if(recipe) {
        displayRecipes.innerHTML += `<div class="recipe flex">
                                        <p>${recipe.name}</p>
                                        <p>${recipe.prep_time_minutes} minues</p>
                                        <img src="${recipe.thumbnail_url}" alt="${recipe.name}" class="food-img">
                                    </div>`
    }
}

function getRecipe(recipe) {
    return fetch(url, options)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(recipe => {
            console.log(recipe)
            renderRecipe(recipe)
        })
         //will need to loop thrugh to get all names to show
        return data.results //gives the array, just need to figure out how to get at it
    })
}

getRecipe() 
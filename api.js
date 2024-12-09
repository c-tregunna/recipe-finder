
const displayRecipes = document.getElementById('recipes')


// Tasty API https://rapidapi.com/apidojo/api/tasty
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=italian';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '37b61ae7ccmshd35c9cd4d587a48p1b476cjsnf552552cf8a3',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
}

function renderRecipe(recipe) {
    let instructionHTML = ""
    if(recipe.instructions && recipe.instructions.length > 0) {
        recipe.instructions.forEach(instruction => {
            instructionHTML += `<li>${instruction.display_text}</li>`
        })
    }

    if(recipe) {
        displayRecipes.innerHTML += `<div class="flex w-full border border-gray-300 shadow rounded flex-col text-center my-5 p-4 gap-4">
                                        <h2 class="w-full text-2xl">${recipe.name}</h2>
                                        <p class="w-full italic">${recipe.prep_time_minutes} minutes</p>
                                        <img src="${recipe.thumbnail_url}" alt="${recipe.name}" class="h-32 w-32 mx-auto">
                                        <ol class="list-decimal px-6 text-left">${instructionHTML}</ol>
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
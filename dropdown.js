
//drop down menu that autocompletes ingredient typed into input 

// })
//need to get array of ingredients 
fetch("https://localhost.3000/ingredients")
.then(res => res.json())
.then(ingredientsArray => {
    populateDropdown(ingredientsArray);

});

const ingredientList = document.getElementById("autocomplete-list");
const ingredientInput = document.getElementById("add-ingredient");


function populateDropdown(data) {
    if (data) {
    const addedIngredient = document.createElement("li");
    addedIngredient.textContent = ""
    data.forEach(ingredient => {
        addedIngredient.textContent = ingredient.strIngredient1;
        ingredientList.append(addedIngredient);
})
    }
};

function filterIngredients (ingredientsArray, searchText) {
    ingredientsArray.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()))
}

ingredientInput.addEventListener("submit", () => {
    const filteredArray = filterIngredients(ingredientsArray, ingredientInput.value);
    populateDropdown(filterIngredients);

});






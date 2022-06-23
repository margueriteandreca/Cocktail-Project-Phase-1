//elements regarding menu and details div
const innerMenuDiv = document.getElementById("inner-menu-div");
const detailsImage = document.getElementById("display-image");
const detailsDiv = document.getElementById("display-classic-drink");
const detailImageContainer = document.getElementById("drink-details");
const detailTitle = document.getElementById("details-title");


//elements regarding dropdown/submit 
const dropDown = document.getElementById("edit-drink-dropdown"); //entire submit form
const ingredientListResults = document.getElementById("autocomplete-list");
const ingredientInput = document.getElementById("add-ingredient");
const buttonsDiv = document.getElementById("ingredients-buttons");



fetch("http://localhost:3000/drinks")
.then(res => res.json())
.then(drinksArray => {
    console.log(drinksArray);
    createDrinksMenu(drinksArray);
    populateDetailsfromMenu(drinksArray[0]);
    
});

function createDrinksMenu(drinksArray) {
    drinksArray.forEach(drink => {
        const menuImage = document.createElement("img");
        menuImage.src = drink.image;
        menuImage.alt = drink.name;
        innerMenuDiv.append(menuImage);
        menuImage.addEventListener("click", () => {
            populateDetailsfromMenu(drink);
        })

    });
}

function populateDetailsfromMenu(drink) {
    detailTitle.textContent = drink.name
    detailsImage.src = drink.image
    detailsImage.alt = drink.name
    detailImageContainer.append(detailsImage);
    buttonsDiv.innerHTML = ""
    drink.ingredients.forEach(ingredient => {
        console.log(ingredient)
        const existingIngredient = document.createElement("span")
        existingIngredient.className = "ingredient-tags"
        existingIngredient.textContent = ingredient
        buttonsDiv.append(existingIngredient);

    })
   
};



fetch("http://localhost:3000/ingredients")
.then(res => res.json())
.then(ingredientsArray => {
    // populateDropdown(ingredientsArray);
    createDropDownIngredients(ingredientsArray)
});




function createDropDownIngredients(ingredientsArray) {
    // console.log(ingredientsArray)
    ingredientInput.addEventListener("keyup", (e) => {
        console.log(e.target.value);
        let results = [];
        let input = ingredientInput.value;
        if (input.length) {
            results = ingredientsArray.filter((ingredient) => {
            return ingredient.toLowerCase().includes(input.toLowerCase())
        });
        }
        populateDropdown(results);
    });
    };



function populateDropdown(results) {
    if (!results.length) {
        return ingredientListResults.classList.remove("show"); 
    } 
    let content = results.map((ingredient) => {
    return `<li>${ingredient}</li>`}).join("");

    ingredientListResults.innerHTML = `<ul>${content}</ul>`;
    // ingredientForButton = `${content}`
    console.log(ingredientListResults)
    console.log(content)
    console.log(results);
    ingredientListResults.classList.add("show");

    
};

ingredientListResults.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    const ingredientTag = document.createElement("span");
    const removeButton = document.createElement("button");
    removeButton.textContent = "x"
    removeButton.className = "remove-tag"
    removeButton.addEventListener("click", () => {
        removeButton.parentNode.remove();
    });
    ingredientTag.textContent = e.target.textContent.toLowerCase();
    ingredientTag.className = "ingredient-tags"
    ingredientTag.append(removeButton);
    buttonsDiv.append(ingredientTag);

})

// dropDown.addEventListener("submit", (e) => {

// })
//TO DO - SUBMIT INGREDIENT TAGS, POST TO JSON 



// function populateDetailsfromMenu(drink) {
//     const existingImage = document.getElementById("drink-detail-main-image");
//     if (existingImage) {
//         existingImage.src = drink.image
//         existingImage.alt = drink.name
//     } else {
//         const drinkImage = document.createElement("img");
//         drinkImage.src = drink.image
//         drinkImage.alt = drink.name
//         drinkImage.id = "drink-detail-main-image";
//         detailImageContainer.append(drinkImage);
//     }

// };

//elements regarding menu and details div
const innerMenuDiv = document.getElementById("inner-menu-div");
const detailsImage = document.getElementById("display-image");
const detailsDiv = document.getElementById("display-classic-drink");
const detailImageContainer = document.getElementById("drink-details");
const detailTitle = document.getElementById("details-title");
const menuTitleDiv = document.getElementById("menu-title");
const menuSubtitle = document.getElementById("menu-subtitle")
let menuImageGlobal


//elements regarding dropdown/submit 
const dropDown = document.getElementById("edit-drink-dropdown"); //entire submit form
const ingredientListResults = document.getElementById("autocomplete-list");
const ingredientInput = document.getElementById("add-ingredient");
const buttonsDiv = document.getElementById("ingredients-buttons");

let currentDrinkId; 
let currentTagsArray = [];


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
        menuImageGlobal = menuImage
        menuImage.addEventListener("click", () => {
            populateDetailsfromMenu(drink);
            console.log(drink.id)
        })

    });
}

function populateDetailsfromMenu(drink) {
    detailTitle.textContent = drink.name.toUpperCase();
    detailsImage.src = drink.image
    detailsImage.alt = drink.name
    detailImageContainer.append(detailsImage);
    buttonsDiv.innerHTML = ""
    console.log(drink)
    currentTagsArray = [];
    currentDrinkId = drink.id;
    drink.ingredients.forEach(ingredient => {
        console.log(ingredient)
        const existingIngredient = document.createElement("span")
        existingIngredient.className = "ingredient-tags"
        existingIngredient.textContent = ingredient
        buttonsDiv.append(createIngredientTag(ingredient));
        currentTagsArray.push(ingredient);
    })
   
};

menuTitleDiv.addEventListener("mouseover", () => {
    // const menuSubtitle = document.createElement("h3");
    menuSubtitle.textContent = "Pick and edit a classic";
    menuSubtitle.setAttribute("id", "menu-subtitle")
    menuTitleDiv.append(menuSubtitle);

});

menuTitleDiv.addEventListener("mouseout", () => {
    const menuSubtitleExpanded = document.getElementById("menu-subtitle");
    if (menuSubtitleExpanded) {
        setTimeout(() => {menuSubtitleExpanded.remove()}, 1200);
    }

})



fetch("http://localhost:3000/ingredients")
.then(res => res.json())
.then(ingredientsArray => {
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
    // console.log(content)
    // console.log(results);
    ingredientListResults.classList.add("show");

    
};

// ingredientListResults.addEventListener("click", (e) => {
//     console.log(e.target.textContent);
//     createIngredientTag();
    // const ingredientTag = document.createElement("span");
    // const removeButton = document.createElement("button");
    // removeButton.textContent = "x"
    // removeButton.className = "remove-tag"
    // removeButton.addEventListener("click", () => {
    //     removeButton.parentNode.remove();
    // });
//     ingredientTag.textContent = e.target.textContent.toLowerCase(); 
//     ingredientTag.append(removeButton);
//     ingredientTag.className = "ingredient-tags"
//     buttonsDiv.append(ingredientTag);

// })

// function createIngredientTag() {
//     const ingredientTag = document.createElement("span");
//     const removeButton = document.createElement("button");
//     removeButton.textContent = "x"
//     removeButton.className = "remove-tag"
//     removeButton.addEventListener("click", () => {
//         removeButton.parentNode.remove();
//     });
// }


//click to make tag
ingredientListResults.addEventListener('click', e => {
    const ingredientToAdd = e.target.textContent.toLowerCase()
    const ingredientTag = createIngredientTag(ingredientToAdd);
    buttonsDiv.append(ingredientTag);
    currentTagsArray.push(ingredientToAdd);
});


//create tag w x given tag text received from input of dropdown
function createIngredientTag(tagText) {
    const ingredientTag = document.createElement('span');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.className = 'remove-tag';
    removeButton.addEventListener('click', () => {
        removeButton.parentNode.remove();
        currentTagsArray = currentTagsArray.filter(tag => tag !== tagText);
    });
    ingredientTag.textContent = tagText;
    ingredientTag.append(removeButton);
    ingredientTag.className = 'ingredient-tags';

    return ingredientTag;
};


 dropDown.addEventListener("submit", (e) => {
    e.preventDefault();
  
    fetch(`http://localhost:3000/drinks/${currentDrinkId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            ingredients: [...currentTagsArray]
        }),
        headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data.id));
});
    


//TO DO - SUBMIT INGREDIENT TAGS, POST TO JSON 



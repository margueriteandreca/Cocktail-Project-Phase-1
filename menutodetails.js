const innerMenuDiv = document.getElementById("inner-menu-div");

const detailsImage = document.getElementById("display-image");
const detailsDiv = document.getElementById("display-classic-drink");
const detailImageContainer = document.getElementById("drink-details");



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
    detailsImage.src = drink.image
    detailsImage.alt = drink.name
    detailImageContainer.append(detailsImage);
    drink.ingredients.forEach(ingredient => {
        const existingIngredient = document.createElement("span")
        existingIngredient.className = "ingredient-tags"
        existingIngredient = ingredient
        buttonsDiv.append(existingIngredient);

    })
   

};







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

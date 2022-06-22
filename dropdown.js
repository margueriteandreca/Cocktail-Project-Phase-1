
fetch("http://localhost:3000/ingredients")
.then(res => res.json())
.then(ingredientsArray => {
    // populateDropdown(ingredientsArray);
    createDropDownIngredients(ingredientsArray)
});

const dropDown = document.getElementById("edit-drink-dropdown"); //entire submit form
const ingredientListResults = document.getElementById("autocomplete-list");
const ingredientInput = document.getElementById("add-ingredient");
const buttonsDiv = document.getElementById("ingredients-buttons");


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

dropDown.addEventListener("submit", (e) => {
    
})



// function populateDropdown(results) {
//     if (!results.length) {
//         return ingredientListResults.classList.remove("show"); 
//     } 
//     const newUl = document.createElement("ul");
//     results.forEach((ingredient) => {
//         const newLi = document.createElement("li");
//         newLi.textContent = ingredient;
//         newUl.append(newLi);
//     });
//     console.log(results);
//     dropDown.classList.add('show');











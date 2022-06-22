
fetch("http://localhost:3000/ingredients")
.then(res => res.json())
.then(ingredientsArray => {
    // populateDropdown(ingredientsArray);
    createDropDownIngredients(ingredientsArray)
});

const dropDown = document.getElementById("edit-drink-dropdown");
const ingredientListResults = document.getElementById("autocomplete-list");
const ingredientInput = document.getElementById("add-ingredient");


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
    console.log(ingredientListResults)
    console.log(content)
    console.log(results);
    ingredientListResults.classList.add("show");
   

}



// function populateDropdown(results) {
//     if (!results.length) {
//         return dropDown.classList.remove("show"); 
//     } 
//     const newUl = document.createElement("ul");
//     results.forEach((ingredient) => {
//         const newLi = document.createElement("li");
//         newLi.textContent = ingredient;
//         newUl.append(newLi);
//     });
//     console.log(results);
//     dropDown.classList.add('show');











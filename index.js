const menu = document.getElementById("inner-menu-div")

//Cocktail ids from 11000 to 11060
//c = categories : g = glass : i = ingredients : a = has alchohol
const drinkByIngredient = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const drinkByName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const ingredientByName = 'www.thecocktaildb.com/api/json/v1/1/search.php?i='
const drinkDetails = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const drinkByCategory = 'www.thecocktaildb.com/api/json/v1/1/filter.php?c='


const displayImage = document.getElementById("display-image")
const displayTitle = document.getElementById("details-title")
const ingredientsList = document.getElementById("ingredients-list")
// const header = '{Content-Type: application/json}'

//Filters can be added on top of each other
// drinkForm.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     fetch(drinkByName+drink.value).then(resp=>resp.json())
// .then(data=> data.drinks.forEach(drink=> {
//         menuDrinks(drink)
//     }))
// })

// //Create drink has category, glass, ingredients, alchohol

// createDrink.addEventListener("submit",(e)=> {


//     fetch("http://localhost:3000/").then(resp=>resp.json())
//     .then(checkDuplicateAndPost)

//     //Needs to be inside of then

//     fetch("http://localhost:3000/").then(resp=>resp.json())
//     .then(postNewDrink)

//     function postNewDrink(drinkInfo) {
//         const drinkObj = {
//             name: e.target.querySelector.value,
//             ingredients: e.target.querySelector.value,
//             glass: e.target.querySelector.value,
//             alchohol: e.target.querySelector.value,


//         }
//     }
// })
// for (let i =11000; i < 11010;i++) {
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${i}`)
//     .then(resp=>resp.json())
//     .then(data => {
//         menuDrinks(data);

//     })
// }

// function menuDrinks(data) {
//     const filterData = data.drinks[0]
//     //const newDrink = document.createElement("h2")
//     const drinkImg = document.createElement("img")
//     drinkImg.src = filterData.strDrinkThumb
//     //newDrink.textContent = data.strDrink


//     menu.append(drinkImg)

//     drinkImg.addEventListener("click",(e)=>{    

//         console.log("clicked")
//         displayImage.src = drinkImg.src
//         displayTitle.textContent = filterData.strDrink

//         ingredientsList.querySelectorAll("li").forEach(ele=>{
//             ele.remove()
//         })
//         for (i=1;i <= 15;i++) {
//             if (filterData[`strIngredient${i}`]) {
//                 const ingredient = document.createElement("li")
//                 ingredient.textContent = filterData[`strIngredient${i}`] 
//                 ingredientsList.append(ingredient)

//                 ingredient.addEventListener("click",e=>{
//                     populateDropdown()
//                 })
//             }
    
//         }

//    })
// }

// function dropdown(click) {
//     //Make dropdownVisible
//     //Filter through ingredients database
//     //Check against userinput 
//     fetch("http://localhost:3000/ingredients").then(resp=>resp.json())
//     .then(dataIngredients=> {
//         dataIngredients.forEach(ingridient=>{
//             const ingrList = document.createElement("li")
//             ingrList.setAttribute("id",dataIngredients.id)
//             ingrList.classList.add("dropdownItem")
//             //Append to ul
//             //if (userinput doesn't match ingredient regex pattern)
//             //set display to none
//         })
//         const dropdownItems = document.querySelectorAll("dropdownItem")
//         //Trim user input and turn to all lowercase
//         dropdownItems.forEach(item=>{
//             if (userinput != dropdownitem sliced by length of user input) {
//                 item.style.display = none
//             }
//             else {
//                 item.style.display = default
//             }

//         })
//     })
//     return dropdownValue
// }




// function removeIngredient(ingridientName, ingredientId,drinkId) {

//     fetch(`http://localhost:3000/ingredients/${ingredientId}`,{method:DELETE,})
//     fetch(`http://localhost:3000/drinks/${drinkId}`,{method:PATCH,})
    
//     data.ingredients : data.ingredients.filter(item=> item !== ingridientName)


//     //Remove ingridient from drink in db
//     //Keep in ingredients db
//     //Patch requested ingridient in array to null

// }

// function submitNewIngredient(ingredientName,drinkId) {

//     if (checkDuplicateAndPost(dupeName, checkAgainst,property)) {
    
//     fetch(`http://localhost:3000/drinks/${drinkId}`,{method:PATCH,})

//     //[...ingriedents, ingridientName]

    

//     //Add ingridient to ingridients database
//     //Add ingredient to drink ingredient array
//     //
//     }
// }


// //Edit drinks already in userbase
// //Each drink stores its id in html id
// //Fetch accesses id
// //Each editable category has dropdown menu which can be selected from 
// //Dropdown default is set to object value

// function checkDuplicateAndPost(dupeName, checkAgainst,property) {
//     fetch(`http://localhost:3000/${checkAgainst}`).then(resp=>resp.json())
//     .then(data=> {
//         const isDupe = false
//         data.forEach(item=> {
//             if (item.property === dupeName) {
//                 isDupe = true
//             }
//         })
//         if (isDupe === true) {
//             console.log("Attribute value already exists!")
//             console.log("Would you like to repalce existing attibute?")

//             if (answer === true) {
//                 fetch(`http://localhost:3000/${checkAgainst}`,{method:POST})
    
//             }
//             else {
//                 console.log("attribute not changed!")
//                 return false
//             }

//         }
//        else {
//         fetch(`http://localhost:3000/${checkAgainst}`,{method:POST})

//        }
//        return true
//     })

// }

//Create new drink????? 
//oneventlistener
//post new ingredients of drink
//post new drink
//Have attributes in obj resuse menu function 

const menu = document.getElementById("menu")
const drink = document.getElementById("drinkType")
const drinkForm = document.querySelector("form")


//c = categories : g = glass : i = ingredients : a = has alchohol
const drinkByIngredient = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const drinkByName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const ingredientByName = 'www.thecocktaildb.com/api/json/v1/1/search.php?i='
const drinkDetails = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const drinkByCategory = 'www.thecocktaildb.com/api/json/v1/1/filter.php?c='


drinkForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    fetch(drinkByName+drink.value).then(resp=>resp.json())
.then(data=> data.drinks.forEach(drink=> {
        menuDrinks(drink)
    }))

})


function menuDrinks(data) {
    console.log(data)
    const newDrink = document.createElement("h2")
    newDrink.textContent = data.strDrink

    menu.append(newDrink)

}
// const filter = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?'
// //headers for all fetches
const filterDrinkNode = document.getElementById("filter-drink-form")
const ingredientsNode = document.querySelectorAll(".circle-drink img")
const toggleShow = document.getElementById("filter-button")
const filterDrinkDisplayNode = document.getElementById("filter-drink-display")
const allImg = document.querySelectorAll("#filter-drink-display img")
const mostMatchedDrinkNode = document.getElementById("most-matched-drink-img")
const filterImgNode = filterDrinkDisplayNode.querySelectorAll("img")
const alchNodes = filterDrinkNode.querySelectorAll(".liquor img")
const closeDisplay = filterDrinkDisplayNode.querySelector(".close")

const regex = new RegExp("strIngredient","g")
const ingredientValue = {}
const liquorValue = {}

let isToggleShow = false
filterDrinkNode.style.display = "none"
filterDrinkDisplayNode.style.display = "none"

toggleShow.addEventListener("click",()=>{
    if (isToggleShow === true) {
        filterDrinkNode.style.display = "none"
        isToggleShow = false
    }
    else {
        filterDrinkNode.style.display = "flex"
        isToggleShow = true
    }
})

closeDisplay.addEventListener("click",()=>{
    allImg.forEach(img=> {
        img.removeAttribute("src")
    })
    filterDrinkDisplayNode.style.display = "none"

})

addClickToggle(ingredientValue,ingredientsNode)
addClickToggle(liquorValue,alchNodes)

function addClickToggle(obj,node) {
    node.forEach(item=> {
        obj[item.id] = false
        item.addEventListener("click",()=>{
           obj[item.id] = !obj[item.id]
           item.parentElement.classList.toggle("background-color-class")
        })
    
    })
}

filterDrinkNode.addEventListener("submit",(e)=> {
    e.preventDefault()
    const endUrl = []
    filterDrinkNode.style.display = "none"
    filterDrinkDisplayNode.style.display = "block"
    isToggleShow = false
    
   for (let state in liquorValue) {
    if (liquorValue[state]) {
        endUrl.push(state)
        }
    }
   
    for (let state in ingredientValue) {
        if (ingredientValue[state]) {
            endUrl.push(state)
        }
    }
    
       endUrl.forEach(url=>{
        fetchDrinks(url)
       }) 

})
function fetchDrinks(endUrl) {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${endUrl}`).then(resp=>resp.json())
        .then(comparePossibleDrinks)
}
function fetchMatchDrinks(endUrl) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${endUrl}`).then(resp=>resp.json())
    .then(displayMatchDrink)
}

function displayMatchDrink(data){
    const drinkData = data.drinks[0]
    for (let i = 0;i < filterImgNode.length;i++) {
        if (!filterImgNode[i].src) {
            const parentEle = filterImgNode[i].parentElement
            filterImgNode[i].src = drinkData.strDrinkThumb
            parentEle.querySelector("h1").textContent = drinkData.strDrink 
            console.log(parentEle)
            for (let property in drinkData) {
                if (drinkData[property] && regex.test(property)) {
                    displayIngridients(drinkData[property],parentEle.querySelector(".filter-ingridients"))
                }
            }
            
            break;
        }
    }
}
function displayIngridients(ingredient,node) {
    console.log(node)
    const ingNode = document.createElement("span")
    ingNode.textContent = ingredient
    ingNode.classList.add("ingredient-tags")
    node.append(ingNode)

}
const amountOccur = {}

function comparePossibleDrinks(drinksByIngredient) {
    drinksByIngredient.drinks.forEach(drink=>{
        if (drink.idDrink in amountOccur) amountOccur[drink.idDrink] = parseInt(amountOccur[drink.idDrink]) + 1
        else amountOccur[drink.idDrink] = 0
    })
    const recArray = {}
    for (let id in amountOccur) {
        if (Object.keys(recArray).length < 3 ){
            recArray[id] = amountOccur[id]
        }
        for (let large in recArray) {
            if (amountOccur[id] > recArray[large]) {
                delete recArray[large]
                recArray[id] = amountOccur[id]
            }
        }
    }
    displayRec(recArray)
    
}

function displayRec(recArray) {
    Object.keys(recArray).forEach(key=> {
        fetchMatchDrinks(key)
    })

}




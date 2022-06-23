// const filter = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?'
// //headers for all fetches
const filterDrinkNode = document.getElementById("filter-drink-form")
const ingredientsNode = document.querySelectorAll(".circle-drink")
const toggleShow = document.getElementById("filter-button")
// const ingFilter = document.getElementById("ingridientsFilter")
// const catFilter = document.getElementById("catFilter")
// const alchFilter = document.getElementById("alchFilter")
// const glassFilter = document.getElementById("glassFilter")
// const filterDrinkFormInputs = filterDrinkNode.querySelectorAll("input[type=button]")

const ingredientValue = {}

let isToggleShow = false
filterDrinkNode.style.display = "none"

toggleShow.addEventListener("click",()=>{
    console.log("click")
    if (isToggleShow === true) {
        filterDrinkNode.style.display = "none"
        isToggleShow = false
    }
    else {
        filterDrinkNode.style.display = "flex"
        isToggleShow = true
    }
})

ingredientsNode.forEach(item=> {

    ingredientValue[item.id] = false
    item.addEventListener("click",()=>{
        console.log(ingredientValue)
       ingredientValue[item.id] =  !ingredientValue[item.id]
    })

})

const clickState = {
    vodkaClick:false,
    ginClick:false,
    scotchClick:false,
    tequilaClick:false
}

const vodkaNode = document.getElementById("vodka-img")
const ginNode = document.getElementById("gin-img")
const scotchNode = document.getElementById("scotch-img")
const tequilaNode = document.getElementById("tequila-img")



vodkaNode.addEventListener("click",()=>{
    clickState.ginClick = false
    clickState.scotchClick = false
    clickState.tequilaClick = false
    if (clickState.vodkaClick == false) {
        clickState.vodkaClick = true
    }
    else {
        clickState.vodkaClick = false
    }
    console.log(clickState.vodkaClick)
})

ginNode.addEventListener("click",()=>{
    clickState.vodkaClick = false
    clickState.scotchClick = false
    clickState.tequilaClick = false
    if (clickState.ginClick == false) {
        clickState.ginClick = true
    }
    else {
        clickState.ginClick = false
    }

})

scotchNode.addEventListener("click",()=>{
    clickState.ginClick = false
    clickState.vodkaClick = false
    clickState.tequilaClick = false
    if (clickState.scotchClick == false) {
        clickState.scotchClick = true
    }
    else {
        clickState.scotchClick = false
    }

})

tequilaNode.addEventListener("click",()=>{
    clickState.ginClick = false
    clickState.scotchClick = false
    clickState.vodkaClick = false
    if (clickState.tequilaClick == false) {
        clickState.tequilaClick = true
    }
    else {
        clickState.tequilaClick = false
    }
})

filterDrinkNode.addEventListener("submit",(e)=> {
    e.preventDefault()
    const endUrl = []
    for (let click in clickState) {
        if (clickState[click]) {
            const targetUrl = click.replace('Click',"")
            console.log(targetUrl)
            endUrl.push(targetUrl)
        }
    }
    for (let click in ingredientValue) {
        if (ingredientValue[click]) {
            endUrl.push(click)
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
function displayMatchDrink(drinkData){
    console.log(drinkData)
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
            console.log("ran")
            if (amountOccur[id] > recArray[large]) {
                delete large
                recArray[id] = amountOccur[id]
            }
        }
    }
    displayRec(recArray)
    
}

function displayRec(recArray) {
    console.log(recArray)
    Object.keys(recArray).forEach(key=> {
        fetchMatchDrinks(key)
    })

}
// filterDrinkNode.addEventListener("submit",e=>{
//     console.log(Array.from(filterDrinkFormInputs))
//     e.preventDefault()
//     const filteredInputs = Array.from(filterDrinkFormInputs).filter(item=> item.value!==null)

//     let newFilter = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filteredInputs[0]}`

//     filteredInputs.forEach(item => {
//         newFilter+= item.name
//     });

//     fetch("newFilter").then(resp=>resp.json())
//     .then(filterDrinks)
// })




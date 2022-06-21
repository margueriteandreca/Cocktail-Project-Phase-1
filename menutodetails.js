// const menuImage = document.querySelector(".menu-img");

function populateDetailsfromMenu (data) {
    menuImage.addEventListener("click", () => {
        data.forEach(ingredient => {
            const menuImage = document.createElement("img");
            menuImage.src = ingredient.strDrinkThumb;
            menuImage.alt = ingredient.




        }

        );
    })
}
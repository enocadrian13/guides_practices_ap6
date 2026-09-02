class FoodFactory{

    createFood(type){

        switch(type){
            case "Torta": return { type: "Pastry", ingredients: "Itlog, Flour, Baking Soda, Love, Yeast", cookingMethod: "Baked"};
            case "Spaghetti": return { name: "Main Course", ingredients: "Pasta, Tomato Sauce, Ground Beef, Sausage", cookingMethod: "Boiled and Strained"}
        }
    }



}


const container = document.getElementById("container");
function insertContent(type){
    try{
        const food = new FoodFactory(type);

        const div = document.createElement("div");
        div.classList.add("food-items");
        div.textContent = food.createFood(type).type + food.createFood(type).ingredients + food.createFood(type).cookingMethod;
        container.appendChild(div);
    }catch(error){
        alert(error)
    }
}


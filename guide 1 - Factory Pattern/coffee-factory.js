// Factory function that creates and returns a coffee object based on the given type
const coffeeFactory = (type) => {
  switch (type) {
    case "espresso":
      return espresso();
    case "latte":
      return latte();
    case "cappuccino":
      return cappuccino();
    default:
      throw new Error("Sorry, we don't serve that coffee.");
  }
};

// Returns an Espresso coffee object with its properties and describe method
const espresso = () => {
  return {
    name: "Espresso",
    price: 100,
    ingredients: ["Espresso Shot"],
    describe() {
      return `${this.name} (₱${this.price}) - Ingredients: ${this.ingredients.join(", ")}`;
    }
  };
};

// Returns a Latte coffee object with its properties and describe method
const latte = () => {
  return {
    name: "Latte",
    price: 150,
    ingredients: ["Espresso", "Steamed Milk"],
    describe() {
      return `${this.name} (₱${this.price}) - Ingredients: ${this.ingredients.join(", ")}`;
    }
  };
};

// Returns a Cappuccino coffee object with its properties and describe method
const cappuccino = () => {
  return {
    name: "Cappuccino",
    price: 170,
    ingredients: ["Espresso", "Steamed Milk", "Foamed Milk"],
    describe() {
      return `${this.name} (₱${this.price}) - Ingredients: ${this.ingredients.join(", ")}`;
    }
  };
};

const orderList = document.getElementById("order-list");

// Handles ordering a coffee, creates the coffee object, and displays it in the order list
const orderCoffee = (type) => {
  try {
    const coffee = coffeeFactory(type);
    const div = document.createElement("div");
    div.classList.add("order-item");
    div.textContent = coffee.describe();
    orderList.appendChild(div);
  } catch (error) {
    alert(error.message);
  }
};
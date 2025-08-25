function CoffeeFactory(type) {
      switch (type) {
        case "espresso":
          return Espresso();
        case "latte":
          return Latte();
        case "cappuccino":
          return Cappuccino();
        default:
          throw new Error("Sorry, we don't serve that coffee.");
      }
    }

    function Espresso() {
      return {
        name: "Espresso",
        price: 100,
        ingredients: ["Espresso Shot"],
        describe() {
          return `${this.name} (₱${this.price}) - Ingredients: ${this.ingredients.join(", ")}`;
        }
      };
    }

    function Latte() {
      return {
        name: "Latte",
        price: 150,
        ingredients: ["Espresso", "Steamed Milk"],
        describe() {
          return `${this.name} (₱${this.price}) - Ingredients: ${this.ingredients.join(", ")}`;
        }
      };
    }

    function Cappuccino() {
      return {
        name: "Cappuccino",
        price: 170,
        ingredients: ["Espresso", "Steamed Milk", "Foamed Milk"],
        describe() {
          return `${this.name} (₱${this.price}) - Ingredients: ${this.ingredients.join(", ")}`;
        }
      };
    }

    const orderList = document.getElementById("order-list");

    function orderCoffee(type) {
      try {
        const coffee = CoffeeFactory(type);
        const div = document.createElement("div");
        div.classList.add("order-item");
        div.textContent = coffee.describe();
        orderList.appendChild(div);
      } catch (error) {
        alert(error.message);
      }
    }
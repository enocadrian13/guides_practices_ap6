// Food Factory (Starter Template)
function FoodFactory(type) {
  switch (type) {
    case "pizza":
      // TODO: return Pizza object
    case "burger":
      // TODO: return Burger object
    case "pasta":
      // TODO: return Pasta object
    default:
      throw new Error("We don't serve that food.");
  }
}

// Example Usage
const order1 = FoodFactory("pizza");
console.log(order1.describe());

const order2 = FoodFactory("burger");
console.log(order2.describe());

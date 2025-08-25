class CarFactory {
  createCar(type) {
    switch (type) {
      case "sedan": return { type: "Sedan", wheels: 4, fuel: "Gasoline" };
      case "suv": return { type: "SUV", wheels: 4, fuel: "Diesel" };
      default: return { type: "Generic Car", wheels: 4, fuel: "Unknown" };
    }
  }
}



function main(){
    const factory = new CarFactory();
    console.log(factory.createCar("sedan"));

}


main();
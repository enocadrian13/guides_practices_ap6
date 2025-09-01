// Strategy Interface
class RouteStrategy {
  buildRoute(start, end) {
    throw new Error("buildRoute() must be implemented");
  }
}

// Concrete Strategies
class CarRoute extends RouteStrategy {
  buildRoute(start, end) {
    console.log(`Car route from ${start} to ${end}`);
  }
}

class WalkingRoute extends RouteStrategy {
  buildRoute(start, end) {
    console.log(`Walking route from ${start} to ${end}`);
  }
}

class PublicTransportRoute extends RouteStrategy {
  buildRoute(start, end) {
    console.log(`Public transport route from ${start} to ${end}`);
  }
}

// Context
class Navigator {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  buildRoute(start, end) {
    if (!this.strategy) throw new Error("Strategy not set!");
    this.strategy.buildRoute(start, end);
  }
}

// Usage
const navigator = new Navigator();

navigator.setStrategy(new CarRoute());
navigator.buildRoute("Cebu City", "Davao City");

navigator.setStrategy(new WalkingRoute());
navigator.buildRoute("Ayala Mall", "IT Park");

navigator.setStrategy(new PublicTransportRoute());
navigator.buildRoute("Mactan Airport", "SM Seaside");

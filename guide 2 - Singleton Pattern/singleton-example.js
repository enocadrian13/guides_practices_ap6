// Singleton Pattern Example in JavaScript

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; // return the same instance if already created
    }

    // properties
    this.timestamp = new Date().toISOString();
    
    // save the instance
    Singleton.instance = this;

    return this;
  }

  showMessage() {
    console.log("Hello! I am a Singleton instance created at:", this.timestamp);
  }
}

// Usage
const obj1 = new Singleton();
obj1.showMessage();

const obj2 = new Singleton();
obj2.showMessage();

console.log("Are obj1 and obj2 the same?", obj1 === obj2); // true ✅

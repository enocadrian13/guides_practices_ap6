// Singleton for LocalStorage Manager
class LocalStorageManager {
  constructor() {
    if (LocalStorageManager.instance) {
      return LocalStorageManager.instance; // return the same instance
    }

    LocalStorageManager.instance = this;
    return this;
  }

  // Save data
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Load data
  load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Remove data
  remove(key) {
    localStorage.removeItem(key);
  }

  // Clear all
  clear() {
    localStorage.clear();
  }
}

// Usage
const storage1 = new LocalStorageManager();
storage1.save("user", { name: "Adrian", age: 23 });

const storage2 = new LocalStorageManager();
console.log(storage2.load("user")); // { name: "Adrian", age: 23 }

console.log(storage1 === storage2); // true ✅ Singleton

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance; // always return the same instance
    }

    this.connection = this.connect();
    Database.instance = this;
  }

  connect() {
    console.log("✅ Connecting to database...");
    // Simulate a database connection object
    return { id: Date.now(), status: "connected" };
  }

  getConnection() {
    return this.connection;
  }
}

// ---------------------------
// Usage in the same file
// ---------------------------

const db1 = new Database();
const db2 = new Database();

console.log("🔹 First call:", db1.getConnection());
console.log("🔹 Second call:", db2.getConnection());

console.log("Are both connections the same?", db1 === db2); // true ✅

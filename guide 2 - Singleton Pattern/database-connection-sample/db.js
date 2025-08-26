class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance; // return the same instance if already created
    }

    this.connection = this.connect();
    Database.instance = this; // store the instance
  }

  connect() {
    // Simulate DB connection (real code would connect to MySQL or MongoDB)
    console.log("✅ New Database Connection Created");
    return { id: Date.now(), status: "connected" };
  }

  getConnection() {
    return this.connection;
  }
}

// Export a single instance
const dbInstance = new Database();
Object.freeze(dbInstance); // prevent modifications

export default dbInstance;

class Database {
  constructor() {
    this.connection = null;
  }

  async connect(url) {
    try {
      // Simulate a connection attempt
      console.log("Attempting to connect to MongoDB with url::", url);

      // Simulate a successful connection
      this.connection = url;
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
    }
  }

  disconnect() {
    if (!this.connection) {
      console.log("No MongoDB connection to close.");
      return;
    }

    // Simulate disconnecting
    this.connection = null;
    console.log("Disconnected from MongoDB");
  }
}

module.exports = new Database();

class Logger {
  constructor() {
    if (Logger.instance) return Logger.instance;
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log("LOG:", message);
  }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("First message");
logger2.log("Second message");

console.log(logger1.logs); // ["First message", "Second message"]
console.log(logger1 === logger2); // true ✅

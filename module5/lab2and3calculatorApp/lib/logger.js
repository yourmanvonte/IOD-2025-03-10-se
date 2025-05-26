// part 3
const logger = (message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
};

module.exports = logger;
// This logger function can be used to log messages with a timestamp
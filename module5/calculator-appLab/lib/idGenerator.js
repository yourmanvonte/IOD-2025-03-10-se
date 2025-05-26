// part 2
const generateId = () => {
    return Math.floor(Math.random() * 1000000);
}

module.exports = { generateId };
// This function generates a random ID for each request, which can be used for logging or tracking purposes.
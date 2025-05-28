const axios = require('axios');
const api = axios.create({
    baseURL: "https://fakestoreapi.com",
});

module.exports = api;
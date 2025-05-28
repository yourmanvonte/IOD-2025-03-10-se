const api = require("../lib/apiClient");

exports.getAllProducts = async (req, res) => {
    try {
        const { data } = await api.get("/products");
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
};
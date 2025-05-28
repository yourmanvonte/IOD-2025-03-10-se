const express = require("express");
const path = require('path');
const app = express();

const productRoutes = require("./routes/productRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");


app.use(express.static(path.join(__dirname, 'public')));
app.use("/api/products", productRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const products = require("../server/data/products.json");

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.use("/images", express.static("images"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

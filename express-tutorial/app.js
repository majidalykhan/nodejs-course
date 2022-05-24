const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a> ');
});

//All products
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.send(newProducts);
});

//Single product -- route params
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    res.status(404).send("Product does not exist");
  }

  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("Server is listening on port: 5000");
});

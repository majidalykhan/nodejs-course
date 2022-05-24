const express = require("express");

const app = express();

let { people } = require("./data");

//Static assets
app.use(express.static("./methods-public"));

//Parse form data
app.use(express.urlencoded({ extended: false }));

//Parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

//POST - Javascript example
app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  res.status(201).json({ success: true, person: name });
});

//POST - Form Example
app.post("/login", (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please provide credentials");
});

app.listen(5000, () => {
  console.log("Server is listening on port: 5000");
});

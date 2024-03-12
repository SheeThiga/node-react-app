const express = require("express");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/message", (req, res) => {
  res.send({ message: "Hello, World" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

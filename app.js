const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");

app.use(express.static("public"));

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);

app.listen(3000, () => console.log("servidor corriendo en localhost:3000"));

const path = require("path");

const shopControllers = {
  shop: (req, res) =>
    res.render(path.resolve(__dirname, "../views/pages/shop/shop.ejs"), {
      title: "Tienda",
      isLogged: false,
    }),
  item: (req, res) =>
    res.render(path.resolve(__dirname, "../views/pages/shop/item.ejs"), {
      title: "Item",
      isLogged: false,
    }),
  addItem: (req, res) =>
    res.send("route for add the current item to de shop cart"),
  cart: (req, res) =>
    res.render(path.resolve(__dirname, "../views/pages/shop/cart.ejs"), {
      title: "Carrito",
      isLogged: false,
    }),
  addToCart: (req, res) => res.send("route for go to checkout page"),
};

module.exports = shopControllers;

const path = require("path");

const authControllers = {
  submitLogin: (req, res) => res.send("route for submit login view"),
  login: (req, res) =>
    res.render(path.resolve(__dirname, "../views/pages/auth/login.ejs"), {
      title: "Login",
      isLogged: false,
    }),
  register: (req, res) =>
    res.render(path.resolve(__dirname, "../views/pages/auth/register.ejs"), {
      title: "Register",
      isLogged: false,
    }),
  submitRegister: (req, res) => res.send("route for submit register view"),
  logout: (req, res) => res.send("route for logout view"),
};

module.exports = authControllers;

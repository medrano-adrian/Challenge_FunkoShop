const authControllers = {
    auth: (req, res) => res.send("route for auth view"),
    submitLogin: (req, res) => res.send("route for submit login view"),
    login: (req, res) => res.send("route for login view"),
    register: (req, res) => res.send("route for register view"),
    submitRegister: (req, res) => res.send("route for submit register view"),
    logout: (req, res) => res.send("route for logout view"),
  };
  
  module.exports = authControllers;
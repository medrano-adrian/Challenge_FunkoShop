const mainControllers = {
  home: (req, res) => res.render("index", { title: "Home" }),
  contact: (req, res) => res.send("route for Contact view"),
  about: (req, res) => res.send("route for About view"),
  faqs: (req, res) => res.send("route for Faqs view"),
};

module.exports = mainControllers;

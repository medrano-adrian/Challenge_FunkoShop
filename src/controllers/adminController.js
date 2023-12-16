const path = require("path");

const adminControllers = {
  admin: (req, res) =>
    res.render(path.resolve(__dirname, "../views/pages/admin/admin.ejs"), {
      title: "Admin",
      isLogged: true,
    }),
  create: (req, res) =>
    res.render(path.resolve(__dirname, "../views/pages/admin/create.ejs"), {
      title: "Admin",
      isLogged: true,
    }),
  submitCreate: (req, res) => res.send("route for submit create view"),
  edit: (req, res) =>
    res.render(path.resolve(__dirname, "../views/pages/admin/edit.ejs"), {
      title: "Admin",
      isLogged: true,
    }),
  submitEdit: (req, res) => res.send("route for submit edit view"),
  delete: (req, res) => res.send("route for delete view"),
};

module.exports = adminControllers;

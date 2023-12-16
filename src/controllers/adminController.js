const adminControllers = {
    admin: (req, res) => res.send("route for admin view"),
    create: (req, res) => res.send("route for create view"),
    submitCreate: (req, res) => res.send("route for submit create view"),
    edit: (req, res) => res.send("route for edit view"),
    submitEdit: (req, res) => res.send("route for submit edit view"),
    delete: (req, res) => res.send("route for delete view"),
  };
  
  module.exports = adminControllers;
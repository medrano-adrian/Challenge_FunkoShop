const express = require("express");
const router = express.Router();
//const adminControllers = require("../controllers/adminController");

router.get("/", (req, res) => res.send("route for admin view"));
router.get("/create", (req, res) => res.send("route for admin create"));
router.post("/create", (req, res) => res.send("route for admin create"));
router.get("/edit/:id", (req, res) => res.send("route for create"));
router.put("/edit/:id", (req, res) => res.send("route for edit"));
router.delete("/delete/:id", (req, res) => res.send("route for delete"));

module.exports = router;
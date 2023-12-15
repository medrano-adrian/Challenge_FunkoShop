const express = require("express");
const router = express.Router();
//const adminControllers = require("../controllers/adminController");

router.get("/login", (req, res) => res.send("route for admin view"));
router.post("/login", (req, res) => res.send("route for admin create"));
router.get("/register", (req, res) => res.send("route for create"));
router.post("/register", (req, res) => res.send("route for delete"));
router.get("/logout", (req, res) => res.send("route for delete"));

module.exports = router;
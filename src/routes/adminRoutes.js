const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminController");

router.post("/", adminControllers.admin);
router.get("/create", adminControllers.create);
router.post("/create", adminControllers.submitCreate);
router.get("/edit/:id", adminControllers.edit);
router.put("/edit/:id", adminControllers.submitEdit);
router.delete("/delete/:id", adminControllers.delete);

module.exports = router;

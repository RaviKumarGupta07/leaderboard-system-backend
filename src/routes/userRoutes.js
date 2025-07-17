const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");

router.get("/users", userCtrl.getUsers);
router.post("/users", userCtrl.addUser);
router.post("/claim", userCtrl.claimPoints);
router.get("/history", userCtrl.getHistory);

module.exports = router;
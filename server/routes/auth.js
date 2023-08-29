const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth");
const verifyToken = require("../middleware/verifyToken");

router.post("/login", auth.handleLogin);
router.post("/register", auth.handleRegister);


module.exports = router;

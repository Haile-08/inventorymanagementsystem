const express = require("express");
const router = express.Router();

const product = require("../controllers/product");
const verifyToken = require("../middleware/verifyToken");

router.post("/add", verifyToken, product.handlePost);
router.post("/get", verifyToken, product.handleGet);

module.exports = router;

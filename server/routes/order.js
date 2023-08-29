const express = require("express");
const router = express.Router();

const order = require("../controllers/order");
const verifyToken = require("../middleware/verifyToken");

router.post("/add", verifyToken, order.handlePost);
router.post("/get", verifyToken, order.handleGet);
router.post("/delete", verifyToken, order.handleDelete);
router.post("/edit", verifyToken, order.handleEdit);

module.exports = router;

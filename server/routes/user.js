const express = require("express");
const router = express.Router();

const user = require("../controllers/user");
const verifyToken = require("../middleware/verifyToken");

router.post("/add", verifyToken, user.handlePost);
router.post("/get", verifyToken, user.handleGet);
router.post("/delete", verifyToken, user.handleDelete);
router.post("/edit", verifyToken, user.handleEdit);

module.exports = router;

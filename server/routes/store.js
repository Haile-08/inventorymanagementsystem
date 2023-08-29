const express = require("express");
const router = express.Router();

const store = require("../controllers/store");
const verifyToken = require("../middleware/verifyToken");

router.post("/add", verifyToken, store.handlePost);
router.post("/get", verifyToken, store.handleGet);
router.post("/delete", verifyToken, store.handleDelete);
router.post("/edit", verifyToken, store.handleEdit);

module.exports = router;

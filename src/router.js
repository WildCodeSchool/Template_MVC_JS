const express = require("express");

const router = express.Router();

const productControllers = require("./controllers/productControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.get("/", categoryControllers.browse);
router.get("/products", productControllers.browse);

module.exports = router;

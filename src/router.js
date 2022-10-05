const express = require("express");

const router = express.Router();

const productControllers = require("./controllers/productControllers");

router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home",
  });
});
router.get("/products", productControllers.browse);

module.exports = router;

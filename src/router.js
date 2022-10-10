const express = require("express");

const router = express.Router();

const productControllers = require("./controllers/productControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.get("/", categoryControllers.browse);
router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.getOne);
router.post("/contact", (req, res) => {
  res.render("pages/contact", {
    title: "Thanks for the message",
    form: req.body,
  });
});

module.exports = router;

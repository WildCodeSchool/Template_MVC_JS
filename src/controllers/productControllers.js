const models = require("../models");

const browse = (req, res) => {
  models.products
    .findAll()
    .then(([rows]) => {
      res.render("pages/products", {
        title: "Products list",
        products: rows,
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};

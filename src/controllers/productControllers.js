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

const getOne = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.products
    .findWithCategory(id)
    .then(([rows]) => {
      res.render("pages/product", {
        title: "Product details",
        product: rows[0],
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  getOne,
};

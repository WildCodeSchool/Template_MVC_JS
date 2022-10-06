const models = require("../models");

const browse = (req, res) => {
  models.categories
    .findAll()
    .then(([rows]) => {
      res.render("pages/index", {
        title: "Home",
        categories: rows,
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

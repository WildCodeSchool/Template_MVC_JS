const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "products" });
  }

  findWithCategory(id) {
    return this.connection.query(
      `select * from  ${this.table} inner join categories on ${this.table}.category_id = categories.id where ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = ProductManager;

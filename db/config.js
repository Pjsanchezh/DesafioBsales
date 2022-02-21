const mysql = require("promise-mysql");
const {log} = console;

// DataBase connection data
const connection = async () => {
  return await mysql.createConnection({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    database: "bsale_test",
    user: "bsale_test",
    password: "bsale_test",
  });
};

const getProduct = async () => {
  const db = await connection();
  const products = await db.query("SELECT product.*, category.name as category_name, category.id as category_id  FROM product INNER JOIN category ON product.category = category.id");
  log(products)
  await db.end();
  return products;
};

const getCategory = async () => {
    const db = await connection();
    const products = await db.query("SELECT * from category");
    log(products)
    await db.end();
    return products;
  };
module.exports = { getProduct, getCategory};

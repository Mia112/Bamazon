DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tablet", "Electronics", 99.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('50" TV', "Electronics", 479.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Car Charger", "Automotive", 12.99, 150);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Phone Mount", "Automotive", 19.99, 110);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer Desk Chair", "Furniture", 64.99, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sofa", "Furniture", 624.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Maker", "Appliances", 49.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Fryer", "Appliances", 89.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Face Cream", "Beauty", 10.99, 120);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Makeup Remover", "Beauty", 5.99, 45);



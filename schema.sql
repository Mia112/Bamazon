DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  department_name VARCHAR(50) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("Tablet",  99.99, "Electronics", 10);
INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ('50" TV', 479.99, "Electronics", 10);

INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("Car Charger", 12.99, "Automotive", 150);
INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("Phone Mount", 19.99, "Automotive", 110);

INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("Computer Desk Chair", 64.99, "Furniture", 7);
INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("Sofa", 624.99, "Furniture", 3);

INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("Coffee Maker", 49.99, "Appliances", 20);
INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("Air Fryer", 89.99, "Appliances", 25);

INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("Face Cream", 10.99, "Beauty", 120);
INSERT INTO products (product_name, price, department_name, stock_quantity)
VALUES ("Makeup Remover", 5.99, "Beauty", 45);



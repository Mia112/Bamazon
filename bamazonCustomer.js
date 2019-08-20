const mysql = require("mysql");

const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "mia1120",
    database: "bamazon_DB"
});

//on load, if there is an error, throw the error
connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");

    //else, do the following
    displayProducts();

});

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("Id | Product | Price | Department");
        console.log("---------------------------------------------");
        for (let i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + "$" + res[i].price + " | " + res[i].department_name);
            console.log("-------------------------------------------");

        }
    })
};

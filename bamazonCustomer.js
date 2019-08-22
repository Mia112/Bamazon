const mysql = require('mysql');

const inquirer = require('inquirer');

var Table = require('cli-table');

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

});

// validateInput to make sure the user inputs is valid
function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a valid input.';
    }
}


function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

    //add cli table for styling
        let productTable = new Table({
            head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
            colWidths: [10, 25, 25, 10, 14]
        });
        //
        for (let i = 0; i < res.length; i++) {
            productTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].stock_quantity]
            );

        }
        console.log(productTable.toString());

        console.log("---------------------------------------------------------------------\n");
        customerPrompt();
    })
};

// prompt the customer to select the item and quantity they would like to purchase
function customerPrompt() {
   
    // Prompt the customer to select an item
    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'Please enter the Item ID which you would like to purchase.',
            validate: validateInput,
            filter: Number
        },
        {
            //Prompt the customer to select quantity
            type: 'input',
            name: 'quantity',
            message: 'How many do you need?',
            validate: validateInput,
            filter: Number
        }
    //based on the customer 
    ]).then(function (answer) {

        const item = parseInt(answer.item_id);
        const quantity = parseInt(answer.quantity);

        // Query db to confirm that the given item ID exists in the desired quantity
        // const queryStr = 'SELECT * FROM products WHERE ?';
        const querySql = 'SELECT * FROM products WHERE ?';
        connection.query(querySql, {item_id: item}, function (err, res) {
            if (err) throw err;

            // If the user has selected an invalid item ID, data attay will be empty
            // console.log('data = ' + JSON.stringify(data));

            if (res.length === 0) {
                console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
                displayProducts();

            } else {
                let productData = res[0];

                // console.log('productData = ' + JSON.stringify(productData));
                // console.log('productData.stock_quantity = ' + productData.stock_quantity);

                // If the quantity requested by the user is in stock
                if (quantity <= productData.stock_quantity) {
                    console.log('Congratulations, the product you requested is in stock! Placing order!');

                    // Construct the updating query string
                    var updateSql = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                    // console.log(productTable.updateSql);

                    // Update the inventory
                    connection.query(updateSql, function (err, res) {
                        if (err) throw err;

                        

                        console.log('Your oder has been placed! ');
                        console.log("\n---------------------------------------------------------------------\n")
                        console.log('Your total is $' + productData.price * quantity);
                        console.log("\n---------------------------------------------------------------------\n")
                        console.log('Thank you for shopping with us!');
                        console.log("\n---------------------------------------------------------------------\n");

                        // End the database connection
                        connection.end();
                    })
                } else {
                    console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
                    console.log('Please modify your order.');
                    console.log("\n---------------------------------------------------------------------\n");

                    displayProducts();
                }
            }
        })
    })
}


displayProducts();

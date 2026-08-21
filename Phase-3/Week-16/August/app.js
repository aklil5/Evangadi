// Import necessary modules
const express = require('express')
const mysql = require('mysql2')

// Create an instance of express
const app = express()


// Route to check if the server is running
app.get("/", (req, res) => {
    res.send("The server is running")
})

// Create MySQL Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "aug21",
    password: "aug21",
    database: "aug21"
})

// Connect to the mySql DB
connection.connect((err) => {
    if (err) console.log(err);
    else console.log("DB is Connected.");
})
 


// =====================================================================================
// 1. CREATE

app.get("/create-table", (req, res) => {
    // Putting Query on a variable
    let name = `CREATE TABLE if not exists customers(
        customer_id int auto_increment,
        name VARCHAR(255) not null,
        PRIMARY KEY (customer_id)
    )`;

    let address = `CREATE TABLE if not exists address(
        address_id int auto_increment,
        customer_id int(11) not null,
        address VARCHAR(255) not null,

        PRIMARY KEY (address_id),
        FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
    )`

    let company = `CREATE TABLE if not exists company(
        company_id int auto_increment,
        customer_id int(11) not null,
        company VARCHAR(255) not null,
        PRIMARY KEY (company_id),
        FOREIGN KEY (customer_id) REFERENCES customers (customer_id)

    )`

    connection.query(name, (err, results, fields) => {
        if (err) console.log("Error founds: ", err);
    })

    connection.query(address, (err, results, fields) => {
        if (err) console.log("Error founds: ", err);
    })

    connection.query(company, (err, results, fields) => {
        if (err) console.log("Error founds: ", err);
    })

    res.end("Tables Created");
    console.log("Tables Created");
})

app.listen(2024, () => {
    console.log("Listening and running on http://localhost:2024");
})









// 2. INSERT






// 3. SELECT






// 4. UPDATE 






// 5. DELETE

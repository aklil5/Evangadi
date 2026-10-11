const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const cors = require("cors");


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))   // reads HTML form data
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Server Running")
})

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "apple",
    password: "apple",
    database: "apple"
})

connection.connect((err) => {
    if (err) console.log("ERROR", err);
    else console.log("DB Connected");
})


// CREATE TABLES
app.get("/install", (req, res) => {
    let products = `CREATE TABLE if not exists Products(
        Product_id int auto_increment,
        product_url VARCHAR(255) not null,
        product_name VARCHAR(255) not null,

        PRIMARY KEY (Product_id)
    )`;

    let description = `CREATE TABLE if not exists ProductDescription(
        Description_id int auto_increment,
        Product_id int not null,
        Product_brief_description VARCHAR(255) not null,
        Product_description TEXT not null,
        Product_img VARCHAR(255) not null,
        Product_link VARCHAR(255) not null,

        PRIMARY KEY (Description_id),
        FOREIGN KEY (Product_id) REFERENCES Products(Product_id)
    )`;

    let price = `CREATE TABLE if not exists ProductPrice(
        Price_id int auto_increment,
        Product_id int not null, 
        Starting_price VARCHAR(60) not null,
        Price_range VARCHAR(255) not null,

        PRIMARY KEY (Price_id),
        FOREIGN KEY (Product_id) REFERENCES Products(Product_id)
    )`;

    let orders = `CREATE TABLE if not exists Orders(
        order_id int auto_increment,
        Product_id int not null, 
        user_id int,

        PRIMARY KEY (order_id),
        FOREIGN KEY (Product_id) REFERENCES Products(Product_id),
        FOREIGN KEY (user_id) REFERENCES User (user_id)
    )`;

    let user = `CREATE TABLE if not exists User(
        user_id int auto_increment,
        User_name VARCHAR(60),
        User_password VARCHAR(60),

        PRIMARY KEY (user_id)
    )`

    connection.query(products, (err, results) => {
        if (err) { console.log("Error found:", err); return res.end("Error creating tables"); }

        connection.query(user, (err, results) => {
            if (err) { console.log("Error found:", err); return res.end("Error creating tables"); }

            connection.query(description, (err, results) => {
                if (err) { console.log("Error found:", err); return res.end("Error creating tables"); }

                connection.query(price, (err, results) => {
                    if (err) { console.log("Error found:", err); return res.end("Error creating tables"); }

                    connection.query(orders, (err, results) => {
                        if (err) { console.log("Error found:", err); return res.end("Error creating tables"); }

                        res.end("Tables Created");
                    })
                })
            })
        })
    })
})



app.post('/add-product', (req, res)=>{
    console.log(req.body);
    const { 
        product_url,  product_name, 
        Product_brief_description,Product_description, Product_img, Product_link, Price_id, 
        Starting_price, Price_range, 
        User_name, User_password
    } = req.body


    let insertProducts = "INSERT INTO Products (product_url, product_name) VALUES (?, ?)";

    connection.query(insertProducts, [product_url, product_name], (err, result) => {
        if (err) {
            console.log("ERROR", err);
            return res.end(err.message);
        } 
        
        let id = result.insertId;
        
       let insertDescription = "INSERT INTO ProductDescription (Product_id, Product_brief_description, Product_description, Product_img, Product_link) VALUES (?, ?, ?, ?, ?)";

        let insertPrice = "INSERT INTO ProductPrice (Product_id, Starting_price, Price_range) VALUES (?, ?, ?)";

        let insertUser = "INSERT INTO User (User_name, User_password) VALUES (?, ?)";

    


        connection.query(insertDescription, [id, Product_brief_description, Product_description, Product_img, Product_link], (err) => {
                if (err) {
                    console.log(err);
                    return res.end(err.message);
                }
            
                connection.query(insertPrice,  [id, Starting_price, Price_range], (err) => {
                    if (err) {
                        console.log(err);
                        return res.end(err.message);
                    }
                    connection.query(insertUser, [User_name, User_password], (err, userResult) => {
                        if (err) {
                            console.log(err);
                            return res.end(err.message);
                        }
                        let insertOrders = `INSERT INTO Orders (Product_id, user_id) VALUES (?, ?)`;
                        connection.query(insertOrders, [id, userResult.insertId], (err) => {
                            if (err) {
                                console.log(err);
                                return res.end(err.message);
                            }
                            res.send("DATA INSERTED")
                        })
                    })

                }) 
        })

    })
})





app.get("/iphones", (req, res) => {
    const sql = `
        SELECT Products.Product_id, Products.product_name, Products.product_url,
               ProductDescription.Product_brief_description, ProductDescription.Product_description,
               ProductDescription.Product_img, ProductDescription.Product_link,
               ProductPrice.Starting_price, ProductPrice.Price_range,
               User.User_name
        FROM Products
        INNER JOIN ProductDescription ON Products.Product_id = ProductDescription.Product_id
        INNER JOIN ProductPrice ON Products.Product_id = ProductPrice.Product_id
        INNER JOIN Orders ON Products.Product_id = Orders.Product_id
        INNER JOIN User ON Orders.user_id = User.user_id`;

    connection.query(sql, (err, rows) => {
        if (!err) res.json({ products: rows });
        else {
            console.log(err);
            res.status(500).send("Server Error");
        }
    });
});





app.listen(5100, () => {
    console.log("Listening on http://localhost:5100");
})
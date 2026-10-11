const express = require('express')
const mysql = require('mysql2')
// const cors = require('cors')


const app = express()

// to enable access to our backend - for SELECT
// app.use(cors())


app.get("/", (req, res) => {
    res.send("This server is running")
})


// request tekeblo response kemelaku befit mahl lay endiseralachu metfelgut neger MIDDLE WARE

// Middle ware to extract info from the html body name attribute
app.use(
    express.urlencoded({
        extended: true,
    })
)
 
// Middle ware to extract info from the frontend that are send through json
// to read the json file send through tools like POSTMAN
app.use(express.json())



const connection = mysql.createConnection({
    host: "localhost",
    user: "aug21",
    password: "aug21",
    database: "aug21"
})

connection.connect((err) => {
    if (err) console.log(err);
    else console.log("DB is connected");
})


// 1. CREATE TABLE
app.get("/create-tables", (req, res) => {
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
        if (err) console.log("Error found: ", err);
    })

    connection.query(address, (err, results, fields) => {
        if (err) console.log("Error founds: ", err);
    })

    connection.query(company, (err, results, fields) => {
        if (err) console.log("Error founds: ", err);
    });

    res.end("Tables Created")
})










// =====================================================================================

// 2. INSERT


// CRUD = create, retrive, update, delete

// 1. Route: /add-customer => to inser customer data into the tables

// 2. Route: /customers => to retrieve data from the tables

// 3. Route: /update => to update data from the tables

// 4. Route: /remove-user => to delete all data from the tables



// i. Route: /add-customer => to inser customer data into the tables

app.post("/add-user-info", (req, res) => {
    // console.log(req.body);
    console.table(req.body)
    // let product_name = req.body.product_name;
    // let product_url = req.body.product_url;   // instead of these

    // Destructuring
    const {name, address, company } = req.body


    // we use (parametrized query) /? as a placeholder/ to avoid sql injection attack - data is inserted when executed
    let insertName = "INSERT INTO customers (name) VALUES(?)";
    let insertAddress = "INSERT INTO address (customer_id, address) VALUES(?, ?)";
    let insertCompany = "INSERT INTO company (customer_id, company) VALUES(?, ?)";


    // result - used for PRIMARY KEYS that you use as foreign key for the next
    // result shows you the data thats been inserted


    // fields gives you metadata
    // query (3 input - the sql to be queried(executed), the parametrized value [insert it as an array], callback)

    // [name] inserted in place of the placeholder "?""
    connection.query(insertName, [name], (err, result, fields) => {
        if(err) console.log(err); 
        console.log(result);
        let id = result.insertId

        connection.query(insertAddress, [id, address], (err, result) => {
            if (err) console.log(err);
        })

        connection.query(insertCompany, [id, company], (err, result) => {
            if(err) console.log(err);
        })

    })

    res.send("Data inserted successfully")
    
})












// // 3. SELECT

// // ii. Route: /customers => to retrieve data from the tables


// // use can select the entire thing with *

app.get("/customers", (req, res) => {
    connection.query(
        "SELECT * FROM customers JOIN address JOIN company ON customers.customer_id = address.customer_id AND customers.customer_id = company.customer_id", (err, results, fields) => {
            if (err) console.log(err);
            res.send(results)
        }
    )

})

// // or to select specific things, use

// // app.get("/customers", (req, res) => {
// //     connection.query(
// //         "SELECT customers.customer_id AS id, customers.name, address.address, company.company FROM customers JOIN address JOIN company ON customers.customer_id = address.customer_id AND customers.customer_id = company.customer_id", 
// //         (err, results, fields) => {
// //             if (err) console.log("Error During selection", err);
// //             res.send(results)
// //         }
// //     )
// // })





// // 4. UPDATE 

// // iii. Route: /update => to update data from the tables
// // just like there is data to accept from post in body, update also accepts data

// app.put("/update", (req, res) => {
//     const {newName, id} = req.body;

//     let updateName = `UPDATE customers SET name = '${newName}' WHERE customer_id = '${id}'`

//     connection.query(updateName, (err, result) => {
//         if (err) console.log(err)
//         else {
//             console.log("Data updated successfully");
//         }
//         res.send(result)
//     })
// })






// // 5. DELETE

// // iv. Route: /remove-user => to delete all data from the ALL THE TABLES - not just 1 because it can be used as foreign key

// app.delete("/remove-user", (req, res) => {
//     const {id} = req.body
//     connection.query()

//     let removeName = `DELETE FROM customers WHERE customer_id = '${id}'`;
//     let removeAddress = `DELETE FROM address WHERE customer_id = '${id}'`;
//     let removeCompany = `DELETE FROM company WHERE customer_id = '${id}'`;


//     // we start executing from the dependent ones, where a primary key is used as foreign key in them, and them we delete the main thing

//     connection.query(removeAddress, (err, result) => {
//         if (err) console.log(err);
//         else {
//             console.log("User deleted successfully");
//         }
//     });
//     connection.query(removeCompany, (err, result) => {
//         if (err) console.log(err);
//         else {
//             console.log("User deleted successfully");
//         }
//     })
//     connection.query(removeName, (err, result) => {
//         if (err) console.log(err);
//         else {
//             console.log("User deleted successfully");
//         }
//     });

//     res.send("User Deleted")
// })






app.listen(4000, () => {
    console.log("Listening and running on http://localhost:5000");
})
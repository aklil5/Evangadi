
---
==Working with databases (MySql PI)==


1. Introduction: database and database management system (DBMS)
2. Main categories of database: relational and non-relational database
3. Working with databases using NodeJS: http verb
4. Working with databases using NodeJS: SQL query and MySQL database
5. Working with databases using NodeJS: MySQL driver and connecting with MySQL database using Node
6. Working with databases using NodeJS: most commonly used SQL queries (create)


---
# 1. Introduction: database and database management system (DBMS)

db - organized collection of structured info or data typicaly stored electronically in a computer system. 

- functions of DB
	- creation of a DB
	- storage of data/info
	- retrieval of info
	- updating the db
	- control of redundance and inconsistency
	- efficient memory management
 

DBMS - sw for easy, efficient and realiable data processing and management.




# 2. Main categories of database: relational and non-relational database
1. Relational DB
- referred to as SQL db, are structured around multiple tables that interrelate with eah other.



2. Non-Relational DB
- referred to as NoSQL db, primarily operate around objects or documents.
- common format is the key-value pair model, similar to JSON.
- work with collections of objects rather than structured tables. - more flexible schema, allowing for easier scalability and adaptability


Data Modeling Philosophy:
■ Relational databases follow the ACID (Atomicity, Consistency,Isolation, Durability) principles, ensuring strong data consistency.
■ Non-relational databases focus on BASE (Basically Available, Soft state, Eventually consistent) principles, emphasizing scalability and availability over strict consistency.






---

# 3. Working with databases using NodeJS: 
## 3.1. http verb
- GET Method - retrieve data
- POST method - create new data
- PUT and PATCH methods - update existing data - (complete replacement vspartial updates)
- DELETE - remove data






---

## 3.2 SQL query and MySQL database
SQL statements
- CREATE - new table
- INSERT - new data
- SELECT - retrieve data
- UPDATE - alter existing data
- DELETE - remove data from table


With Node.js, you can leverage SQL queries to interact with a MySQL database seamlessly. These SQL statements enable the execution of specific actions like creating tables, inserting data, retrieving information, updating existing records, and deleting entries. By integrating Node.js with MySQL, you gain a powerful toolset to manage your database efficiently within your applications.






---

## 3.3 MySQL driver and connecting with MySQL database using Node
1. In MySQL using phpMyAdmin, create a db and set up user credentials (username and password)
2. install and import mysql module
	`npm i mysql2`
3. create a connection - "createConnection"
4. connect to the DB - "connect"

```
	const express = require("express");
	const app = express();

	// STEP - 2 : 
	const mysql = require("mysql2");

	// STEP - 3 : 
	const connection = mysql.createConnection({
		host: "localhost",
		user: "info",
		password: "info",
		database: "info",
	});

	// STEP - 4 : Connect to MySQL DB
	connection.connect((err) => {
		if (err) console.log(err);
		else console.log("Connected to MySQL");
	});

	app.listen(3001, () => console.log("listening on port 3001"));
```












download MAMP
- start Servers
	- if its not active -> go to task manager and END the processed of httpd and mamp/mysql

- Then go to the opened website -> TOOLS -> PHPMYADMIN - it opens mysql
- you can then create a table and then a user

## 3.4 most commonly used SQL queries (create)
CREATE TABLE users(
	col1 datatype,
	col2 datatype
)




===
=========================
---
PART II


## 3.5 Insert

INSERT INTO table_name(col)
VALUES()

**HTTP Method used to Data insertion in Node.js**
- POST


- you can also use POSTMAN



---

## 3.6 Retrieving Data from Table using SELECT

Add this at the top of the page 
```
const cors = require('cors')


// to enable access to our backend - for SELECT
app.use(cors())
```

- we use GET request

SELECT * FROM table_name;

SELECT specific_fields FROM table_name


**Conditions**

WHERE product_id = 1;  // you can add condition

LIMIT 5;  //only returns the top 5

ORDER BY product_id ASC or DESC;  

---
JOIN - to get info from different tables
ON - condition 









## 3.7 Managing DB Operations - SQL Query for Update and Delete

`UPDATA table_name 
SET column1 = value1, column2 = value2,...
WHERE condition`


`DELETE FROM Products WHERE ....



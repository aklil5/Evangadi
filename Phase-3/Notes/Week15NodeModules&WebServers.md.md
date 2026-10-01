==P1
introduction to Node Modules==



1.1 Getting started with Node.js (installing and running our script on Node)
1.2 What is back-end development?
1.3 Modular structure: avoiding problems of global namespace collision
1.4 Approaches to avoid namespace collision: the IEFE Way and the CommonJS Way
1.5 Basic concept of Node module
1.6 Standards used to write Node modules: commonJS and ES6
1.7 Managing Node modules using NPM: core and contributed modules




==p2 3:00


---
# 1.1 Getting started with Node.js (installing and running our script on Node)





---
# 1.2 What is back-end development?









---
# 1.3 Modular structure: avoiding problems of global namespace collision
![[Pasted image 20260716225853.png]]

![[Pasted image 20260716085736.png]]

![[Pasted image 20260716225740.png]]



---
# 1.4 Approaches to avoid namespace collision: the IEFE Way and the CommonJS Way
IEFE - immediately invoked function
![[Pasted image 20260716231807.png]]
![[Pasted image 20260716231842.png]]
- ==inside is anonymous function

- but no FUNCTION REUSABILITY




![[Pasted image 20260716231017.png]]

![[Pasted image 20260716231215.png]]

![[Pasted image 20260716231438.png]]

![[Pasted image 20260716231601.png]]







---
# 1.5 Basic concept of Node module
![[Pasted image 20260716232933.png]]

![[Pasted image 20260716232437.png]]

![[Pasted image 20260716232826.png]]

![[Pasted image 20260716232900.png]]


---
---
![[Pasted image 20260716235443.png]]
==try command==


![[Pasted image 20260717000644.png]]

![[Pasted image 20260717000915.png]]

![[Pasted image 20260717000724.png]]

![[Pasted image 20260717000706.png]]

![[Pasted image 20260717000744.png]]
==whtats the oiutput

![[Pasted image 20260717000852.png]]







---
# 1.6 Standards used to write Node modules: commonJS and ES6
![[Pasted image 20260716233357.png]]

![[Pasted image 20260716234129.png]]
![[Pasted image 20260716234421.png]]
![[Pasted image 20260716234440.png]]

![[Pasted image 20260716234532.png]] 

![[Pasted image 20260716234904.png]]
![[Pasted image 20260716234925.png]]



---

![[Pasted image 20260716235022.png]]
![[Pasted image 20260716235052.png]]

![[Pasted image 20260716235259.png]]

![[Pasted image 20260716235214.png]]

==?? if not default==
![[Pasted image 20260716235228.png]]

---
![[Pasted image 20260717081127.png]]

![[Pasted image 20260717081146.png]]

![[Pasted image 20260717081216.png]]

![[Pasted image 20260717081231.png]]

---
![[Pasted image 20260717081306.png]]






---
# 1.7 Managing Node modules using NPM: core and contributed modules
![[Pasted image 20260717083205.png]]




---

![[Pasted image 20260717081350.png]]
![[Pasted image 20260717081516.png]]
![[Pasted image 20260717081544.png]]

![[Pasted image 20260717081652.png]]

==js FILES WE create berasachen are custom modules



---
![[Pasted image 20260717081850.png]]

![[Pasted image 20260717082017.png]]

![[Pasted image 20260717082102.png]]

![[Pasted image 20260717082343.png]]

![[Pasted image 20260717082401.png]]
![[Pasted image 20260717082448.png]]

==more

![[Pasted image 20260717082726.png]]
![[Pasted image 20260717082933.png]]
![[Pasted image 20260717082949.png]]

























---

---


==P2
Web servers==

2.1 Introduction: core node modules
2.2 Most common core Node modules (fs, os, path, http)
2.3 Building HTTP web server using HTTP module: 
	defining a web server and listener
	2.4 Building HT TP web server using NodeJS: serving a simple message using HTTP module
	2.5 Building HTTP web server using HTTP module: serving static files with HTTP
	2.6 Building HTTP web server using HTTP module: serving our static Apple website with HTTP
2.7 Building HTTP web server using Express module: serving our static Apple website with Express


---
# 1. Introduction: core node modules
![[Pasted image 20260717232031.png]]

---

![[Pasted image 20260717231327.png]]

![[Pasted image 20260717231536.png]]
![[Pasted image 20260717231543.png]]
![[Pasted image 20260717231954.png]]






---
# 2. Most common core Node modules (fs, os, path, http)

## Getting ifnormation from our OS
![[Pasted image 20260717233703.png]]

## Getting detail location info about a file
![[Pasted image 20260717233727.png]]
![[Pasted image 20260717233750.png]]
![[Pasted image 20260717233801.png]]
![[Pasted image 20260717233823.png]]
![[Pasted image 20260717233855.png]]
![[Pasted image 20260717233913.png]]



---
![[Pasted image 20260717234039.png]]

![[Pasted image 20260717234050.png]]

![[Pasted image 20260717234202.png]]
.ext => only FILE EXTENTION
![[Pasted image 20260717234227.png]]



this VS that
![[Pasted image 20260717234411.png]]
![[Pasted image 20260717234426.png]]


![[Pasted image 20260717234843.png]]






---
# 3. Building HTTP web server using HTTP module
## 3.1 Defining a web server and listener

![[Pasted image 20260718000322.png]]


---
 
![[Pasted image 20260717235656.png]]

![[Pasted image 20260717235708.png]]

![[Pasted image 20260717235911.png]]
![[Pasted image 20260718000018.png]]
































---
## 3.2 Serving a simple message using HTTP module

![[Pasted image 20260718000822.png]]
![[Pasted image 20260718001025.png]]

![[Pasted image 20260718001357.png]]
![[Pasted image 20260718001439.png]]
![[Pasted image 20260718001506.png]]
3











---
## 3.3 Serving static files with HTTP















---
## 3.4 Serving our static Apple website with HTTP













---
# 4. Building HTTP web server using Express module: serving our static Apple website with Express
































---

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
![[Pasted image 20260720235209.png]]

![[Pasted image 20260720235627.png]]


---
![[Pasted image 20260720235916.png]]

















# 2. Main categories of database: relational and non-relational database
![[Pasted image 20260721000122.png]]
![[Pasted image 20260721000149.png]]

![[Pasted image 20260721000628.png]]
![[Pasted image 20260721000701.png]]

![[Pasted image 20260721000741.png]]


==normalization
bzu table fetro -> efficient lemareg
![[Pasted image 20260721001707.png]]



![[Pasted image 20260721001729.png]]

![[Pasted image 20260721001837.png]]
![[Pasted image 20260721001803.png]]

instead of tables they have documents with ibject in them

---

![[Pasted image 20260721002341.png]] 






---

# 3. Working with databases using NodeJS: 
## 3.1. http verb

![[Pasted image 20260721080743.png]]

![[Pasted image 20260721080858.png]]
![[Pasted image 20260721081137.png]]


---
![[Pasted image 20260721081308.png]]







---

## 3.2 SQL query and MySQL database

![[Pasted image 20260721082044.png]]
![[Pasted image 20260721082514.png]]


![[Pasted image 20260721082153.png]]

---
![[Pasted image 20260721083324.png]]
![[Pasted image 20260721083555.png]]








---

## 3.3 MySQL driver and connecting with MySQL database using Node
![[Pasted image 20260721083838.png]]

![[Pasted image 20260721232923.png]]














## 3.4 most commonly used SQL queries (create)









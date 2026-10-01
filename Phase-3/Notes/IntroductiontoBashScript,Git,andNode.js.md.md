
1.1 Bash script: Max Terminal, Git Bash and Cygwin
1.2 Main Bash commands you have to know
1.3 Intro to Git
1.4 Why we use Git and GitHu? How to create a repo on Github>
1.6 Git workflow: cloning, editing, committing and pushing
1.7 Git workflow: forking, sending pull request and merging


![[Pasted image 20260805222750.png]]==try php and with mamp


---

---
# 1.1 Bash script: Max Terminal, Git Bash and Cygwin


- Bash (Bourne Again Shell)
	- allows you to efficiently perform any tasks and advanced tasks compared to the Graphical User Interface (GUI).

## Before knowing what bash is, lets define terminal, GUI and shell
- **GUI or (mainly using mouse, keyboard can also be used)**
	- command/instruct your compuster OS using graphical symbols rather than typing the instructions.
	- uses windows, icons, and menus
- **CLI (using terminal)**
	- are the "black" screen programmers use to send text commands
- **Shell**
	- when you type commands on your terminal, what you've typed must be understood before the computer executes the task.
	- **Shell** -> [sw that interprets the commands types on the terminal] so your computer understands them and returns a response. 
	- There are different shells (programs/CLIscript) that we can use to manipulate our OS.
		- bash (Mac and Linus )
		- command prompt (CMD) or 
		- windows Powershell
- **Bash**
	- Bourne Again SHELL, is a CLI and most widely used shell


### Why are we learning Bash and Bash script for this course?
- [great control over your OS
- [The piping feature on bash is what makes it super special]
	- The pipe (|) is a command that lets you use two or more commands at once such that the output from one command serves as an input to the next.
- [There are web developer tools that operate through shell only:]
	- Eg. a package from Node Package Manager (NPM) can't be downloaded and installed using your mouse. u need to use commands
- Better utilization of the Git Version Control too
	- u will need your shell command experiences to use the Git commands as well
	- there are lots of Git functionalities that still require the use of Git commands from your terminal
- For local backend development
	- The front-end languages live in the browser, so there are no extra installations required. 
	- However, any backend programming language can run on your server, and there is no one language that lives in your server. 
	- Therefore, you need to install the backend language you want on your computer to get them running.



## Whats Bash and why do we need it
- Bash Script is a very important tool to expedite your development process.
- The **ability to execute a pre written procedural steps** is what makes bash super useful.
- You need to have a terminal to write bash script on
	- You can use the default terminal on Mac
	- Cygwin or gitbash can be used on Windows
### what you need to write Bash script?
- you need to have a terminal to write bash script on.


**for windows users to be able use bash commands** on it you need:
- Gitbash  or 
- cygwin64











---

---
# 1.2 Main Bash commands you have to know

- Directory (folder) related commands
	- pwd, cd, ls, ls -al, mkdir, touch, 
	- mv
		- moves or renames a directory
	- rm  
	- rmdir -> remove empty directory
	- rm-rf -> remove folder and anything inside it
	- grep -> search a string in a file
		- `grep Sam my.txt your.txt` - search for "Sam" string in my.txt and your.txt files found under your current directory 
	- clear, exit, chmod
	- echo 
		- without an option `echo "hello world"`
			- prints to the terminal window
		- with file name only `echo > style.css`
			- creates a file
		- with text and file name `echo "abebe" > abtAbebe.html`
			- creates abtAbebe.html file and types "abebe" on the file.

- find -name ./Phase-2
	- you can find files and folders from anywhere
- code ./Phase -2
	- opens the folder or file in a vs code window

when u are done you have to kill the terminal (trash can) not just "x" and close it.






---

---
# 1.3 Intro to Git
Git - version control system
- tracks the changes made to your source code history

to access git
- terminal commands
	- bash
- Github Desktop


**Advanatges of Git**
- tracks change on our code base
- makes it easier for collaboration bn developers 
- allows developers to save/commit their work and go back to their saved check-point /commit



## Where doe the .git directory come from?
- In case of new projects, this directory is created when open your new project folder in the terminal and type the command “git init”
- If it is an existing project, this directory is created when you bring a copy of a repository into your local computer through the command “git clone”.



---

---
# 1.4 Why we use Git and GitHub? How to create a repo on Github

```
**Git**: the version control system
**GitHub**: where you store your code and collaborate with others
**GitHub Desktop**: helps you work on GitHub locally
```


# why use git?
- git simplifies the process of working with other people
- If different people are working on the same file, Git can automatically merge the changes from each contributor without losing anyone's work.
## Diffing: 
- makes git supper powerful and efficient
- Diff (or short for difference): Diff in the computation world allows programmers to look at 2 files side by side and see what differentiates them by spotting the place where a new line of code had been added.
- Diffing is used mostly when comparing two different versions of the same file/code, meaning comparing an older version with the newer one.


## What is GitHub?
- Git is software that runs locally. Your files and their history are stored on your computer. However, if you want to work on a project together with others from anywhere, you will need to store a copy of your files in a cloud/ remote place. That is when GitHub comes in handy.
- GitHub is a website/online host where you can remotely store your git project/repositories so that they are accessible from anywhere in the world for anyone working on the project. I


**What is GitHub**
- GitHub is a cloud-based hosting platform for your code and collaborate with others.
- it [lets you and others work together on projects from anywhere].

**GitHub Desktop**
- it is an application that helps you work with GitHub locally.


### Using terminal
- Git config for terminal use
	- git config --global  user.name "John Doe"
	- git config --global user.email "johndo@example.com"




### Git workflow
- is a guideline how to use git in a team project
1. Git repo
	- project folder created by the project owner on Github.com
2. clone
	- creates **local copy** of the repo
		- `git clone <URL of repo>




**Why Git and GitHub**
- Git simplified the process of working with other people and makes it easy to collaborate on projects.
- Centralized storage of your code (GitHub)
- Diffing makes git super powerful and efficient.
- The work flow that can be designed around git makes it the central part of every development team.
- Git work flow
	- Cloning
		- Edit
	- Commit
	- Push

- Forking
- Send pull request

- Branch
- Send pull request


## How to create a repo on GitHub?

==Steps==
1. Create a Project repo on github
2. Open GitHub Desktop -> you can see your repos there -> ==Steps on next title==



### Create a new repo on the command line
```sh
git clone <URL of repo>
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remove add origin https://.....
git push -u origin main
```

- when we enter the folder after cloning, we can see that it has started **tracking** since we can see [(main)] next to the folder name 
	- to see the tracker `ls -al` => theres a **.git** file

**OR You can Use**
- `git init` to [start tracking a project]
	- make sure you do that per project -> specific repos -> not Desktop or Phase-3


### push an existing repo from the command line
```sh
git remove add origin https://github.com/aklil5/folder.git
git branch -M main
git push -u origin main
```





---
## How to use git-bash on your VS code
- Download git
### to change your default terminal
Ctrl + Shift + P -> search "Select default profile" -> select terminal -> u can select bash
then you can change it using the "v" button next to the "+"  as you open the terminal


```sh
to add files you want to track to the staging area
git add [file-name]
or
git add .

to check whats added to the staging area use the status command
git status


```





---

---
# 1.5 Git workflow: cloning, editing, committing and pushing => we are the owners
**Git workflow:** It is a guideline for how to use Git in a team project to
ensure the team is on the same page.

**Git repository/repo:** It is a virtual location on GitHub where a user can
store code and a collection of files of various versions of a Project


### Git config for terminal use
```sh
git config --global user.name "Hohn Doe"
git config --global user.email "johndoe@example.com"
```

### Git workflow
- is a guideline how to use git in a team project

1. [Git repo
	- project folder created by the project owner on Github.com
2. [clone
	- creates local copy of the repo
		- `gt clone <URL of repo>`
3. [commit
	- saves changes to the local repo after making changes
		```sh
		git add . or git add [file-name]
		git commit -m"short messages here
		```
4. [pull
	- After committing changes locally, if you just push changes to the remote repository, it is possible that another developer had already pushed updates that contain code that conflicts with yours.
	- Before publishing your updated version, you need to download the current version of the central repository by the process called “git pull”.
	- updates the local repo by comparing to the remote repo
		- `git pull`
5. [push
	- pushes changes from the local repo to the remote repo
		- `git push`
6. [branch
	- creates a new branch for our repo
		- `git branch <Branch name>`
	- Main/master branch: This is basically the first branch created when you clone and save a repository in your local computer.
	- Other branches: Git allows you to create branches in addition to the main branch.
		- to list all branches in your repo
			- `git branch 
		- to delete a specified branch
			- `git branch -D <branchName>`
		- rename the current branch to "newBranchName"
			- `git branch -m <newBranchNam>`
		  `

- we can check the status with 
	- `git status` after adding,  commiting or pushing.




### Conflict
If we change the file on GitHub and then change it again on VSCode - (which the file was cloned before the changes on GitHub)
- then add it, commit then push it -> then there will be a **conflict** 
	- So the first step is to ==git pull==
	- Downloads remote changes and **instantly merges** them.
git fetch
git status




---

---
# 1.6 Git workflow: forking, sending pull request and merging
7. [fork
	- Creates a copy  of a repo from someone elses repo to your Github account.
		- **Why forking:** Forking a repository allows you to freely make changes without affecting the original project. 
			- Usually, people want to fork a publicly available repository because they want to contribute to someone else’s project or want to use someone’s project as the starting point for their own.
	- to make changes to the repo you need to
		- `clone, commit, push, send pull request, merge`
8. [pull request
	- Lets you ask someone else to update their repo after you made some changes to it.
	- This is how you ask to contribute to someone elses code or repo
		- Got to GitHub then to the forked project -> click on pull request => new pull request
9. [merge
	- After receiving a pull request, the repo owner decides and integrates the new changes by someone else


- after forking, to check that you are level with the main branch
	- `git pull`
	- if it says "Already up to date", its perfect
```sh
git branch dev-aklil
git checkout dev-aklil
```


`git branch -a` to see all the branches

since we are now inside the branch, it wont affect the main branch so it gives us freedom
- to go back to main branch
```sh
git checkout main
```
- You can see the difference as you change back to main branch Vs dev-aklil branch

- Finally go to the branch repo ->
```sh
git merge main
```

- you can then push the branch
```sh
git push
```

- then go to Github - 

merge
pull request
review change
then merge










---

---
==Intro to Node.js==
Prerequisites to understand Node.js
	How does a website work
	1. How does a local static web page work
	2. How does a remote static web page work? 
		1. Requesting/receiving data from a remote computer
		2. Browser getting content of the file using TCP/IP layers
	3. How does a local dynamic web page work?
	4. 4. How remote dynamic web pages work?
	5. Concurrent HTTP requests and synchronous/blocking architecture
	6. Inception of NodeJS: non-blocking/asynchronous architecture

---
# Pre Requisite to Understand Node.js
## How does a website work
# 1. How does a local static web page work
## What is a webpage?
- Webpage is a **properly tagged HTML text document.** and it f**ollows the file path on the computer**
- The main purpose of a web page is to display the text info thats included in the document in a well organized and visually meaningful way to the user
- As a web page is simply a text document, we would need help to create some useful visual representation of the text. A software that helps us create a useful representation is called a Browser. This means a web page without the help of a Browser is as helpless as a text document.


---
## The Browser
- The main role of a **web browser** is to [create a visual representation of the text document based on the tags] used on the text document. This text document with the HTML tags included in it is called the HTML document. 
- This process of creating the visual representation the browser follows is called [Rendering]. 
- For the browser to be able to do its job, it needs to get the HTML tagged text first. When the **HTML file is saved locally, all the browser needs is a way to locate** this resource file containing the HTML. The way [we achieve this is by giving the URL (Uniform Resource Locator) to the browser]. Since we are on a local computer this URL is just **a path to the file**. Path is structured by the Operating System on the computer.
	- **Eg.** /week-1/clock/index.html
- The browser has a place to let us provide this location/address of the file. It's called the **address bar**. (Located at the top of your browser). The browser then finds the file and starts rendering it in a way that makes more visual sense.


- If in case additional resources are included in the HTML file, the browser then goes back and gets that resource from the provided URL. (This could be an image, a css file, a js file ...). Since every resource is located on the local computer, there is no problem for the browser to do its job. (No additional help is needed in here)

- If the file that is required is a js file, it means the browser needs help to understand the code on the JS file.

- Every browser has a JS engine that takes our JS code and converts it into something that the browser can understand.
	- IE - Chakra
	- Chrome - V8
	- Firefox - SpiderMonkey
	- Safar - JSCode

- **Now lets move the web page to a different computer**


- You can try copy the path of a folder and explore it using the browser.
```file path
file:///C:/Users/MY/Documents/GitHub/Evangadi/Phase-3/Week-14/
```




---

# 2. How does a remote static web page work? 
- The webpage is on a different/remote computer (server).
	- i.e. - Hostinger or netlify
- the Browser needs to get this remote file before it renders it
	- i.e. it accesses the server through a domain name
## 2.1. Requesting/receiving data from a remote computer
Local vs Dynamic

```file path
file:///C:/Users/MY/Documents/GitHub/Evangadi/Phase-3/Week-14/

https://www.evangadi.com/clock/index.html
```

- Whether the web page is on a local or remote computer, it is the **responsibility of the user to provide the correct location of the file (URL) to the browser**.

### Locating  the Computer containing the file
- most common way is using the **Domain Name of the server**. Domain names are names that we choose to give to our server just to help used remember the name of our remote computer.
- There is a global standard of naming servers that everybody follows. There is a governing body controlling this too. This system is called [Domain Name System (DNS).]

- Once we locate the location of the server, we still need to locate the specific location of the file on that computer. That specific location should also include on the URL we provide to our browser.


  
User - Frontend            -> Web Server - Backend        -> Database - Backend

---

## 2.2. Browser getting content of the file using TCP/IP layers
## /Remote static web page

**Getting the file**
- At this point, we have the location of the file we are looking for. But, how does the browser receive the content? This was not a problem when the file was located on the local computer.
- Because the OS can be directly used for that. But in the remote case, the file is located somewhere else and needs to be sent to the computer containing the browser.
- It is at this point the TCP/IP network protocol come to play.

- TCP/IP is a family of communication protocols used to connect computer systems in a network. It is named after two of the protocols in the family: Transmission Control Protocol (TCP) and Internet Protocol (IP). 

- Hypertext Transfer Protocol (HTTP) is a member of the TCP/IP family. HTTP is a transfer protocol that is specifically designed to transfer mainly text files through the internet.

- To be able to send or receive data using the HTTP protocol through the TCP/IP network protocol, we need a sw that understands this HTTP protocol and help us send the HTML text from the server to the browser requesting the document. The sw that receives the request and handles the delivery of the requested ile is called a Web Server. It's one f the things a Web server does


IP Vs Port number

- Similarity: both are numerical labels. a port number is "tracked on" to the end of the IP address.
Eg. 192.168.1.67:80

- Difference: - IP address: numeritcal value assigned to a device/computer - helps to identify a specific device/computer
			- Port no: number assigned to data/application thats executing in a device/computer. Thus, it helps to identifya particular data type / application (such as MySQL, TCP) excuting in the device/computer.

Port 80: HTTP - unencrypted web traffic
port 443 - HTTPS
port 21: FTP - Upload or download files to and from a server
port 25: email
port 22 - SSH -  to log into remote servers sercurely via command line.

HTTP: is a member of the TCP/IP family thats specifically designed to transfer mainly text files through the internet



**Understanding the TCP/IP Networking Layers**
- The software that controls the TCP/IP usually resides in the operating system, where it can be shared by all application programs running on the machine.


- The TCP/IP has five layers that are used to manage the transportation of data between computers on the internet. Below are the layers and what they're responsible for.


## TCP/IP (Transmission Control Protocol / Internet Protocol)
1. Application layer - through broser (google chrome) using HTTP
	- Data = https://www.evangadi.com
	- Data can also be text, files (img/videos) in addition to the address(domain)
2. Transport Layer
	- Port number
	- Segment = Data + (port and sequence info)
	- Default ports - 80 - http
					-  443 https, 21 - FTP, 22 - SSH
3. Network Interface/ access layer
	- Packet = segment + IP
4. DataLink layer (Ethernet)
	- Frame = packet + Mac (Media Access Control) address
5. Physical layer
	- transmission medium
		- Wifi
		- Ethernet cable

---

### 1. Application layer
- Refers to the applications that are going to make the communication through the network
	- Eg.
		- Browser, CyberDuck, Outlook etc

- Each of these applications use some kind of data transfer protocol to format the data to be send
	- Eg.
		- Browser - HTTP,
		- Cyberduck - FTP
		- Outlook - SMPT, etc

- The data to be send starts to be packed in this layer
- Once the data is formatted following one of the protocols, it then gets passed to the layers that manages the transportation

- At this layer, whats going to be sent is called **DATA**

```
HTTP
Data: Request URL: http://www.evangadi.com/clock/index.html
```




### 2. Transport Layer


Transport Layer
- The transport layer is responsible for end-to-end delivery of data from the source host to the destination host.
- The main protocol of tis layer is called the TCP protocol.

- TCP is a reliable connection-oriented protocol that transmits data from the source to the destination machine without any error. A connection is established between the peer entities prior to transmission. At the sending host, TCP divides an incoming byte stream into segments and assigns a separate sequence number to each segment. 
- At the receiving host, TCP reorders the segments and sends an acknowledgement to the sender for correct receipt of segments. TCP also manages flow control so that a fast sender does not overwhelm a slow receiver.

- This layer adds the port number and sequence to the data
	- Eg. Port 80 will be added to the data if it is going to be send through HTTP
	- This port will be later used by the receiving machine to determine which specific application is responsible to handle the request.
		- In this case, it will be received by a web server application.

- At this layer, whats going to be sent is called a SEGMENT.
	- SEGMENT = DATA + (PORT and Sequence info)




### 3. Network Interface/ access layer

Network Layer
- The network layer includes the powerful Internet Protocol (IP).

- This layer responds to service requests from the transport layer and issues service requests to the data link layer.

- This layer adds the source and destination IP address.
- At this layer, what is going to be sent is called a PACKET.
	- PACKET = SEGMENT + IPs




### 4. DataLink layer (Ethernet)



DataLink Layer (Ethernet)
- This layer adds the sender and/or receiver's mac addresses along with some error checking mechanism to be used by the receiver.
	- Mac address in a unique number assigned by the manufacturer of the network card. Every network card has this address.
	- Every device that is connected to the Internet has a unique IP address assigned to it.


		- This Assigning of addresses is managed by a global authority known as IANA (Internet Assigned Numbers Authority)
		- With the current design of the Internet, this IP address is assigned to Routers. (ISPs manage this)
		- Multiple devices can be connected to a single Router. The router then manages each device using their specific Mac address that is unique to each device
- 
- At this layer, what is going to be sent is called a FRAME
	- **FRAME = PACKET + Mac Address**






### 4. Physical layer

Physical Layer
- The physical network layer specifies the characteristics of the hardware to be used for the network. Basically Cables
- This is where the FRAME leaves the sender machine





---
# 3. How does a local dynamic web page work?
what makes DYNAMIC different from STATIC is that it has **SERVER**

## Static vs Dynamic webpages
**Static (fixed)**
- The content can't be changed by a client action
- Fixed content
- Example
	- Your portfolio website

**Dynamic**
- Content can be changed by the client/user aciton
- Generates content on the server in response to the user request/actions.
- It can pull information from a database, process data, and customize the content for each user.
- Example
	- Facebook, Instagram

![[Pasted image 20260708151956.png]]



---

# 4. How remote dynamic web pages work?
- Remote dynamic web pages also work the same way as a local dynamic web page. There needs to be a compiler and a web server installed to be able to generate the dynamic content and send it back to the client which requests the data.

- One additional challenge when a web page is available of a publicly accessible domain is, [multiple people can request access the same page at the same time]. This phenomenon is called **"Concurrent Request"**.

- Being able to handle multiple requests at the same time is very critical specially when your web site has a lot of visitors. One of the ways to determine the effectiveness of a web server is to check its ability to handle concurrent requests.





---
# 5. Concurrent HTTP requests and synchronous/blocking architecture
**Concurrent HTTP requests**
- When a lot of ppl send a request to access the website at the same time
- Eg. JAVA
	- Tomcat - multithreaded architecture to handle client request
		- 200 threads
- A thread represents a single stream of execution

**Synchronous/blocking architecture**
- one request at a time only
	- the next one has to wat for the previous to finish
	- The program must complete one step before moving on to the next step

## How Web Servers traditionally handle concurrent requests

- There used to be something called CGI (Common Gateway Interface). CGI is a standard that defines a way for a web server to interact with external content-generating programs, which are often referred to as CGI programs. These CGI programs cna be written using any language that can interface with the CGI. (Eg. C, C++, Java, PERL,...)
	- CGI is an extension of the HTTP protocol.

	- When the web server received the request, it passes the control to the CGI Application. The CGI interface will be used for that. To achieve this, there needs to be a new process for every request. Means each time an HTTP server receives a request, it initiates a new process.

	- Which is a very resource intensive if multiple requests are sent to the serer at the same time. It's like opening a new tab on your browser. To be specific, if the CGI Application is written using PHP, then the server needs to run new PHP on every request.


---
## Modern web servers
- Different web servers tried different methods to solve this problem of handling this concurrent request problem.

- Most implemened this concept of threading. This is only possible if the program language supports threading in the first place.
	- Threading is a way for a program to split itself into two or more ismultaneously running tasks. Threads are distinguished from processes in theat processes are typically independent.
	- Multiple threads, on the other hand, typically share the state information of a single process, and share memory and other resources directly.
	- 
- For example, the most common web server for Java is called Tomcat.
	- Tomcat applied this concept of threading
		- This is possible becuase Java supports multiple threading.
	- Tomcat runs 200 threads at the same time
		- Means it can handle up to 200 concurrent connections at the same time without delay.
		- The delay starts at the 201st concurrent connection
		- 200 is an ok number for small sites. But it quickly becomes a problem if we are thinking to scale up.



==each tab in a browser -> thread





---
## Blocking or Synchronous Architecture
- This is the Architecture used by many web servers even to this day

**What it means is:**
- When a request arrives, the request is received by the web server and is allocated to a thread to handle that request.
	- Most of the times, requests involve getting data from the Database. Which involves querying the Database and getting the data.
	- Usually this takes some time.
		- In Synchronous Architecture, the thread that sends the query sites and waits until it gets the data back from the Database. Means it cannot accept another request. It's blocked from other requests.
	- This has its own advantages as you don't have to worry about any other thing in the mean time.
	- The disadvantage is, if there are many concurrent requests, it causes delay.
		- To avoid the delay, we need to add more hardware to handle the requests. Which makes it an expensive approach.
		- Adding additional resource could have been avoided if we could have a way to avoid the CPU sits idle waiting for the response.
	- Frameworks like Asp.Net and Rails follow a **Synchronous** architecture by default. 

- The main problem that arises from this architecture and in general on web server is:
	- How can we improve the speed of serving pages when there are a lot of concurrent requests?


![[Pasted image 20260708154146.png]]

thread - ye restaurant astenagaj


  



---

# 6. Inception of NodeJS: non-blocking/asynchronous architecture
- Node JS
	- is a runtime envt for JS, allowing you to run/execute JS code on the server side.
	- Is single-threaded, **event-driven architecture**, which makes it efficient for handling a high volume of concurrent connections.
	- Asynchronous/non-blocking
		- while a file is being read or a network request is in progress, the thread can continue to process other tasks.

	- Widely used for building real-time web applications
		- Netflix, NASA, LinkedIn, Paypal, and many more use Node.js
	- Commonly used for building server-side APIs
		- Effective for applications which send and receive a lot of data from external services like Database (Input/Output)

## The Problem To Solve
**How to improve the speed of serving pages when there are a lots of concurrent requests?**



---
## The solution (Thanks to Ryan)
### The Conceptual Solution -> Non-blocking or Asynchronous Architecture
- Simply means no waiting until external process finished before starting to serve another client.

- When a request arrives, that request is received by the web server and is allocated to a process to handle that request.
	- If the request involves querying the Database, it sends the query to the DB. Then instead of waiting for the response, it just takes a note of the request and goes back to receiving another request.
		- The system that tracks the requests is called event Queue
		- What makes this Event Queue effective is, it has a mechanism to keep track of the status of the request sent to the DB. When the DB returns the data, the queue receives and stores it along with a flag to notify the original thread that the data is ready.
		- This avoids the time that is wasted by the CPU waiting for the response

### The Implementation of the Solution as Node.js
#### Choice of language
- There are a couple of things a programming language needed to have to be the idea fit for this solution.
	- First, it needs to have a good compiler as it is going to be used on the serve.r
	- Second, needs to be able to handle a non-blocking I/O request and Asynchronous running
	- It has to be a language that most ppl use already.

- Most languages that were popular at the time, had a good compiler, but the problem was their architecture is mostly the Synchronous/Blocking one.
	- Languages like Ruby and Python couldn't be a good fit for that reason.
- KS was ideal because it can use the Non-Blocking/Asynchronous architecture. Plus it was already known by many people.

- **The only drawback for JS was that there was no compiler that was ready to be deployed on a server.**
#### Development of the JS Compiler
- At the time of the inception of Node, browsers already had well developed JS run time compilers.
- These JS compilers only came bundled with some kind of browser.
	- Ryan(Developer of Node.js) took out the V8 engine, the fastest of JS compiler, from Chrome and created another sw that is able to execute JS outside of the Browser. He wrote that application using C++ and called it Node.js.

	- While V8 was used inside of a browser, there was no need of providing a way for JS coddes to access networks or the file system. Up to that point the main purpose of JS was to just manipulate the DOM object. Since the DOM object was already provided by the browser all was well and no one bothered of the file system or the other things other programming language compilers handle.

	- Ryan took already existing C libraries and included them in the Node.js package along with a way for JS developers to access the C libraries using JS. This allowed JS developers to access the file system, communicate with the network and so on on top of what was already provided by V8. He included these additional modules inside of the core Node.js application and released it to the public.

- So, what is Node.js? It's just a run time JS Compiler :)
	- Since it does other things other than compiling too, it is usually referred as a run time JS Environment.



----

## Main drawback to Node.js
- Since Node **uses only one thread to handle requests**, it comes with its own drawback.
	- Lets say the request that is received requires the CPU to do a lot of things before passing it to another process like the DB. Lets say it is asked to encode a video. This process needs to be done by the CPU itself. The thread will be responsible to handle that. Which will take it a lot of time. Which inturn causes delays to accept a different request.

	- Therefore, we should avoid using node for CPU intensive projects. Node is effective for applications which send and receive a lot of data from external services like DB.







![[Pasted image 20260710080511.png]]

---

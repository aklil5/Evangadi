
1. Why do we need to portfolio website?
2. How do you make your website impressive?
3. Steps to follow to buy a template website and build a website (P I)
4. Steps to follow to buy a template website and build a website (P II)




---
# 1. Why do we need to portfolio website?
1. we will practice HTML, CSS and Bootstrap skills we learned so far
2. because having a portfolio website greatly improves your chance of getting an interview 
	- having a portfolio website might sometimes backfire if your website is not that impressive.




---
# 2. How do you make your website impressive?
## The design of your portfolio website
**The challenge:**
- designing is a skill set most of us don't have.
- These people are like painters. they know how to make things look good.
- Design is what sells. Not functionality of the website

**The solution:**
- Buy the design


### Where to buy designs from
- themeforest.com

**Search for:**
- single page portfolio

==free template sites==
- startbootstrap.com
- bootstrapmade.com
	- Go to Template -> Portfolio


- logo 
	- experete.com
	- icon - .ico

- free images
	- uplash.com
	- pexels.com



---
# 3. Steps to follow to buy a template website and build a website (P I)
text updating

- you can
	- edit the title
	- meta description about ur paage
	- meta keywords - for your page to be found when those words are searched
	- generate your own favicon and add it.








---
# 4. Steps to follow to buy a template website and build a website (P II)
image updating

- to edit your photo 
	- cropping for d/t height and width
	- decreasing the file quality - size
		- [[pixlr.com]]
		- [[photopea.com]]

 





---
---
==P2
Launching your own web==


1. Three main components needed for a website to launch or to go live
2. how do we set up a hosting server?
3. why is it not recommended to host your own website
4. How to choose the best web hosting plan according to your needs
5. Accessing and exchanging website files with your hosting server
6. Launching your website

---
---
# 1. Three main components needed for a website to launch or to go live

- **Code base**
	- html, css, img, js
	- Eg. the template you buy and customize

- **Server**
	- the computer where you put your code on to be accessed by the public.
	- move the code to the server
	- where to rent server from
		- https://hostinger.com

- **Domain**
	- the name of your server where the code lives
		- **Address to access your server**
	- change the DNS to point to the server
		- evangadi.com, apple.com, irl.gov
	- where to buy domains from
		- https://domains.google/





---
# 2. how do we set up a hosting server?
- There are 2 options on setting up a server
	1. Make your personal computer a server (NOT RECOMMENDED)
	2. Rent Server

- What is Server & how is it set up
	- Remote computer to store your code that is online all the time

- How to setup a server?
	- To turn a normal computer into a server, we have to install some sw/applications on it.

## whats hosting server
- It is **simply a computer** with some specific kind of sw installed on it.
- The job of a server computer is to wait for a request and send the proper response up on request.
- There are d/t kinds of servers. The only d/ce is the SW installed on them
	- Web servers,
	- DB servers, 
	- Mail servers


## Server Applications
- Web Server applications
	- Apache server, NGINC, Apache Tomcat, Node.js, IIS etc
	- Their job is to establish a connection between a server and the browsers of website visitors
- Database applications
	- Oracle, Microsoft SQL, MySQL, MongoDB etc...
- Mail server applications
	- Microsoft Exchange, Exim, Sendmail, Zimbra...
	- when forgot password or reset password

- If you install these server SSW on a computer, you can use that computer as a server.




==you can see the request and response in the Network tab when inspecting - inHeaders and Response respectively.
![[Pasted image 20260615002859.png]]
![[Pasted image 20260615002806.png]]

## Web server stacks
- Easier to install and configure
	- LAMP
	- WAMP
	- LEMP 
	- MAMP

- LAMP
	- Linux, Apache, MySQL, PHP
- WAMP
	- Windows, Apache, MySQL, PHP
- LEMP
	- Linux, NGINX, MySQL, PHP
- MAMP
	- Mac OS, Apache, MySQL, PHP

these packages are preferred cauuse we dont connect them after installing each of them separately, like Apache and Mysql.....


---
# 3. why is it not recommended to host your own website
- You are more vulnerable for hacking
- You need to maintain it consistently
- You need to Keep on Top of SW updates
- Its more expensive
- Your computer needs to be on and connected to the internet 24/7

- The Alternative is to choose a hosting server that best fits your need, compare the pricing and RENT.





---
# 4. How to choose the best web hosting plan according to your needs

- [Shared Server
	- Multiple users share the same server/computer
	- Server is administered by the host provider
	- If a hacker has access to one website, it leaves other websites on the server vulnerable as well.
	- **Roommates**
- [VPS
	- Multiple users using the same server but in a way that they have dedicated access to the portion of the server they use.
	- You are responsible for administering the VPS
	- **basement**
- [Dedicated Server
	- One dedicated computer - one user
	- You are responsible for administering your dedicated server
- [Cloud hosting
	- A **cluster of computers working together** to host your site
	- The host company manages the cloud
	- Your files get moved from place to place as needed. But your access credentials remain the same.

- Hosting Server
	- [[Hostinger]]
- Ethiopia
	- [[yegara.com]]
	- [[hahucloud.com]]
	- [[ethio telecom]]

- free hosting
	- [[netlify.com]]




---
# 5. Accessing and exchanging website files with your hosting server
- usually, the computer that you use to host your website and the one you use for development are different computers. They are also often located in different locations.
- You need a way to send files to the server.
- We do this by using FTP client

BROWSER uses Text Transfer Protocol
## Whats an FTP client?
- just like a browser is a sw written by following the HTTP protocol to help us send and receive HTTP message, An FTP clientis also a sw that follows the FTP protocol and helps us upload, download, and manage on our server.


## Recommended FTP clients to use
- cyberduck
- FileZilla
- WinSCP 
- Transmit


## Transfer your code to the server
- This is just a straight forward step of copying all the files to the server.
- Make sure your index.html file is in the root directory of your hosting server.

- Root directory is:
	- The publicly-accessible base folder of our host server
	- This is the directory where your web server sw is configured to look for the index file
	- It is for this reason we name our entry html page as index.html


- what you need is the server ip
- username and password
- your ip

---
# 6. Launching your website
## Domains and Hostinger relationship
- Puchase your domain
- Connect your domain to your server
	- In the DNS area fill out your servers ip-Address

- NOTE: Google domains has been bought by ==SquareSpace

SquareSpace
- to buy domain name


A - Address

CNAME - Conical name
	- a type of DNS record that connects an alias domain to a true (canonical) domain name
`fidelrestaurant.com == www.fidelrestaurant.com`



**For FREE**
- use Netlify




---
---






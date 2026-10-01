==Bootstrap==

# What is Bootstrap



# how do we use Bootstrap?




# Bootstrap containers
- classes
	- **container**
	- **container-fluid**



# Bootstrap breakpoints




---
# Bootstrap grid system (rows)







- it helps designers and developers to be on  the same page.

- it basicallly divides the design into multiple columns so that designers can design in a way that is logical for developers to convert it into a responsive website.

- There are multiple grid systems that are commonly used
	- 960px gridsystem (12 column) 6 col 4 col 3 col 2 col 1
	- 1200px grid system
	- 768px (12 col)
	- Bootstrap grid system
	- The bootstrap grid system is build using two main components
		- Rows and 
		- columns


- how to define a row
```html
<div class="row>

</div>
```

```css
.row {
	display: flex;
}
```

```html
<div class="row">
	<div>Abebe</div>
	<div>Almaz</div>
	<div>Kebede</div>
</div>
```

- do you have to give width to them, after putting them in row class? in the new version?
	- if you specify the width of them all - it will list them downwards


```js
<div class="container">
	<div class="row">
	</div>
</div>
```
---
# Bootstrap grid system (columns)

- col-6 -> 50%
- col 5 -> 
- col 4 - 33%
- col 3 - 25%
- col 2 - 16.6%
- col 1 - 8.33%



![[Pasted image 20260531234533.png]]

To make it responsive on different screen sizes: use: sm, md, lg, xl


- col-sm-6
- col-md-4
- col-lg-3
- col-xl-1


to divide the screen equally and for odd number of things
	- col-sm
	- col-md
		- without number 


![[Pasted image 20260531232018.png]]
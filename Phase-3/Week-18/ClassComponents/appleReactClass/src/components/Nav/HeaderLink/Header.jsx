import { Component } from 'react'

import Button from 'react-bootstrap/Button';
import logo from "../../../images/icons/logo-sm.png"
import search from "../../../images/icons/search-icon-sm.png"
import cart from "../../../images/icons/cart-sm.png"

class Header extends Component {
	render(){
			return (
			<div className="nav-wrapper fixed-top">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
						<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
							☰
						</button>
						<a className="navbar-brand mx-auto" href="#"><img src={logo} /></a>

						<div className="navbar-collapse collapse">
							<ul className="navbar-nav nav-justified w-100 nav-fill">
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
								<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search} /></a></li>
								<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart} /></a></li>
							</ul>
						</div>
					</nav>
				</div>
				<div>
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="success">Success</Button>
					<Button variant="warning">Warning</Button>
					<Button variant="danger">Danger</Button>
					<Button variant="info">Info</Button>
					<Button variant="light">Light</Button>
					<Button variant="dark">Dark</Button>
					<Button variant="link">Link</Button>
				</div>

			</div>
		)
	}
}
export default Header;

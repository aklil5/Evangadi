import { Component } from 'react'; 

import HeaderLink from './HeaderLink/HeaderLink';
import Test from './HeaderLink/Test';

import logo from "../../../assets/images/icons/logo-sm.png"
import search from "../../../assets/images/icons/search-icon-sm.png"
import cart from "../../../assets/images/icons/cart-sm.png"

class Nav extends Component {
	render() {
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
								<HeaderLink linkName="Mac" linkUrl="/mac"/>
								<HeaderLink linkName="iphone" linkUrl="/iphone"/>
								<HeaderLink linkName="ipad" linkUrl="/ipad"/>
								<HeaderLink linkName="watch" linkUrl="/watch"/>
								<HeaderLink linkName="tv" linkUrl="#"/>
								<HeaderLink linkName="Music" linkUrl="#"/>
								<HeaderLink linkName="Support" linkUrl="#"/>
								<HeaderLink linkName="Mac" linkUrl="#"/>
								
								
								<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search} /></a></li>
								<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart} /></a></li>
							</ul>
						</div>
					</nav>
				</div>
				<div>
					<p>Students</p>
					<Test name="one"/>
					<Test name="two" />
					<Test name="three" />
					<Test name="four" />
				</div>
			</div>
		)
	}
	
}
export default Nav;

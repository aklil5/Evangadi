import { Component } from 'react';

class HeaderLink extends Component {
	render(){
        return(
            <li className="nav-item" >
                <a className="nav-link js-scroll-trigger" 
                href={this.props.linkUrl}>
                    {this.props.linkName}
                </a>
            </li>
        );
    }
}

export default HeaderLink;